import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState(false);

  useEffect(() => {
    async function fetchVideos() {
      const database = getDatabase();
      const videosRef = ref(database, "videos");
      const videoQuery = query(videosRef, orderByKey());

      try {
        setLoading(true);
        setError(false);

        const snapshot = await get(videoQuery);
        if (snapshot.exists()) {
          setLoading(false);
          setVideos((prevVideos) => {
            return [prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          //
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
