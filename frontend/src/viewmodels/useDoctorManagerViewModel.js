import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import {
  setSelectedDoctor,
  setContentMarkdown,
  setContentHTML,
  setDoctorDescription,
  resetForm,
} from "../features/doctor/doctorSlice.js";
import {
  saveDoctorInfoThunk,
  fetchAllDoctorsThunk,
} from "../features/doctor/doctorThunk.js";

const useDoctorInfoViewModel = () => {
  const dispatch = useDispatch();
  const selectedDoctor = useSelector((state) => state.doctor.selectedDoctor);
  const contentMarkdown = useSelector((state) => state.doctor.contentMarkdown);
  const contentHTML = useSelector((state) => state.doctor.contentHTML);
  const doctorDescription = useSelector(
    (state) => state.doctor.doctorDescription
  );
  const loading = useSelector((state) => state.doctor.loading);
  const error = useSelector((state) => state.doctor.error);
  const success = useSelector((state) => state.doctor.success);

  // get-all-doctor
  const doctorOptions = useSelector((state) => state.doctor.listDoctor);
  const loadingDoctorList = useSelector(
    (state) => state.doctor.loadingDoctorList
  );
  const errorDoctorList = useSelector((state) => state.doctor.errorDoctorList);

  useEffect(() => {
    dispatch(fetchAllDoctorsThunk());
  }, [dispatch]);

  const onDoctorChange = useCallback(
    (doctor) => {
      dispatch(setSelectedDoctor(doctor));
    },
    [dispatch]
  );

  const onContentMarkdownChange = useCallback(
    (markdown) => {
      dispatch(setContentMarkdown(markdown));
    },
    [dispatch]
  );

  const onContentHTMLChange = useCallback(
    (html) => {
      dispatch(setContentHTML(html));
    },
    [dispatch]
  );

  const onDescriptionChange = useCallback(
    (e) => {
      dispatch(setDoctorDescription(e.target.value));
    },
    [dispatch]
  );

  const onSave = useCallback(() => {
    if (!selectedDoctor?.value) {
      alert("⚠️ Vui lòng chọn bác sĩ.");
      return;
    }
    if (!contentMarkdown.trim()) {
      alert("⚠️ Nội dung Markdown không được để trống.");
      return;
    }
    if (!contentHTML.trim()) {
      alert("⚠️ Nội dung HTML không được để trống.");
      return;
    }
    if (!doctorDescription.trim()) {
      alert("⚠️ Mô tả bác sĩ không được để trống.");
      return;
    }
    dispatch(saveDoctorInfoThunk());
  }, [
    dispatch,
    selectedDoctor,
    contentMarkdown,
    contentHTML,
    doctorDescription,
  ]);
  const resetDoctorForm = useCallback(() => {
    dispatch(resetForm());
  }, [dispatch]);

  return {
    selectedDoctor,
    contentMarkdown,
    contentHTML,
    doctorDescription,
    loading,
    error,
    doctorOptions,
    loadingDoctorList,
    errorDoctorList,
    onDoctorChange,
    onContentMarkdownChange,
    onContentHTMLChange,
    onDescriptionChange,
    onSave,
    resetDoctorForm,
    success,
  };
};

export { useDoctorInfoViewModel };
