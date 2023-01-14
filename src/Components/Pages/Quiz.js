import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  // console.log(action.value);
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        // console.log(question);
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // console.log(questions);
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  // console.log(qna);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>There was an ERROR!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
