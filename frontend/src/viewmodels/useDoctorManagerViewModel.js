import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  setSelectedDoctor,
  setContentMarkdown,
  setContentHTML,
  setDoctorDescription
} from "../features/doctor/doctorSlice.js";
import { saveDoctorInfoThunk } from "../features/doctor/doctorThunk.js";

const useDoctorInfoViewModel = () => {
  const dispatch = useDispatch();
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
  const contentMarkdown = useSelector((state) => state.doctor.contentMarkdown);
  const contentHTML = useSelector((state) => state.doctor.contentHTML);
  const doctorDescription = useSelector((state) => state.doctor.doctorDescription);
  const loading = useSelector((state) => state.doctor.loading);
  const error = useSelector((state) => state.doctor.error);

  const onDoctorChange = useCallback(
    (doctor) => {
      dispatch(setSelectedDoctor(doctor));
    },
    [dispatch]
  );

  const onContentMarkdownChange = useCallback((markdown) => {
    dispatch(setContentMarkdown(markdown));
  }, [dispatch]);

  const onContentHTMLChange = useCallback((html) => {
    dispatch(setContentHTML(html));
  }, [dispatch]);

  const onDescriptionChange = useCallback((e) => {
    dispatch(setDoctorDescription(e.target.value));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(saveDoctorInfoThunk());
  }, [dispatch]);

  return {
    selectedDoctor,
    contentMarkdown,
    contentHTML,
    doctorDescription,
    loading,
    error,
    onDoctorChange,
    onContentMarkdownChange,
    onContentHTMLChange,
    onDescriptionChange,
    onSave
  };
};

export {
  useDoctorInfoViewModel
}