import React, { useState } from "react";
import { useParams } from "react-router";
import useQuestions from "../../Hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const Quiz = () => {
  const { id } = useParams();
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <>
      <h1>Pick three of your favorite Star Wars Flims</h1>
      <h4>Question can have multiple answers</h4>
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quiz;
