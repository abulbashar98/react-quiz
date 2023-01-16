import React from "react";
import { useLocation, useParams } from "react-router";
import useAnswers from "../../Hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

const Result = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);
  // console.log(qna);
  // console.log(answers);

  return (
    <div>
      {loading && <div>Loading....</div>}
      {error && <div>There was an Error!</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary />
          <Analysis />
        </>
      )}
    </div>
  );
};

export default Result;
