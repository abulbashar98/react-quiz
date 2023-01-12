import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const database = getDatabase();
      const videosRef = ref(database, "videos");
      const videoQuery = query(
        videosRef,
        orderByKey(),
        startAt(page + ""),
        limitToFirst(8)
      );

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
          setHasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
