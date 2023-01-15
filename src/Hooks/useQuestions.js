import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      const database = getDatabase();
      const quizRef = ref(database, "quiz/" + videoID + "/questions");
      const quizQuery = query(
        quizRef,
        orderByKey()
        // startAt(page + ""),
        // limitToFirst(8)
      );

      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(quizQuery);
        if (snapshot.exists()) {
          setLoading(false);
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
          //   console.log("got questions");
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
    // hasMore,
  };
}
