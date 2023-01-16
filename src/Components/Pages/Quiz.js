import { getDatabase, ref, set } from "@firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
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
      console.log(
        questions[action.questionID].options[action.optionIndex].checked
      );
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

  const { currentUser } = useAuth();
  const navigate = useNavigate();

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
    console.log(e.target.checked);
  };

  // handle when the user clicks on next question button to get the
  // next Question.

  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      console.log(currentQuestion, questions.length);
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }
  // handle when the user clicks on  Previous Logo, to get the previous Question .

  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    } else {
      return;
    }
  }

  // Submit Quiz to To Show Results based on individual uid  in Results Component

  async function submit() {
    console.log("fired");
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });

    navigate(`/result/${id}`, {
      state: {
        qna: qna,
      },
    });
  }

  // Calculate Percentage of Progress

  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading....</div>}
      {error && <div>There was an ERROR!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion]?.title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            options={qna[currentQuestion]?.options}
            handleChange={handleAnswerChange}
            input
          />
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
          <MiniPlayer />
        </>
      )}
    </>
  );
};

export default Quiz;
