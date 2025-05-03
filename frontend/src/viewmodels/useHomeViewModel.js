import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopDoctors } from "../features/user/userThunk";
import { Buffer } from "buffer";

const useTopDoctors = (limit = 7) => {
  const dispatch = useDispatch();
  const {
    topDoctors: rawDoctors = [],
    loading,
    error,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchTopDoctors(limit));
  }, [dispatch, limit]);

  const topDoctors = useMemo(() => {
    return rawDoctors.map((doc) => {
      let imageBase64 = "";
      if (doc.image) {
        imageBase64 = Buffer.from(doc.image, "base64").toString("binary");
      }

      return {
        ...doc,
        image: imageBase64,
      };
    });
  }, [rawDoctors]);

  return {
    topDoctors,
    loadingTopDoctors: loading,
    errorTopDoctors: error,
  };
};

export { useTopDoctors };
