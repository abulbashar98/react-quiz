import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);
  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchAnswers() {
      const database = getDatabase();
      const answerRef = ref(database, "quiz/" + videoID + "/questions");
      const answerQuery = query(answerRef, orderByKey());

      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(answerQuery);
        if (snapshot.exists()) {
          setLoading(false);
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
          //   console.log("got answers");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
