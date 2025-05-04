import { React, useEffect } from "react";

import Select from "react-select";
import MarkdownEditor from "../../../components/MarkdownEditor/MarkdownEditor";
import { useDoctorInfoViewModel } from "../../../viewmodels/useDoctorManagerViewModel.js";


const DoctorManager = () => {

  const {
    selectedDoctor,
    contentMarkdown,
    doctorDescription,
    loading,
    error,
    success,
    doctorOptions,
    loadingDoctorList,
    errorDoctorList,
    onDoctorChange,
    onContentMarkdownChange,
    onContentHTMLChange,
    onDescriptionChange,
    onSave,
    resetDoctorForm ,
  } = useDoctorInfoViewModel();
  useEffect(() => {
    if (success) {
      alert("✅ Lưu thông tin bác sĩ thành công!");
      resetDoctorForm(); // ✅ gọi hàm reset từ ViewModel
    }
  }, [success, resetDoctorForm]);
  
  return (
    <div className="doctor-manager-container">
      <div className="doctor-manager-title">Tạo Thêm Thông tin doctor</div>
      <div className="more-info-doctor">
        <div className="content-left form-group">
          <label>Chọn Bác Sĩ</label>
          <Select
            className="form-control"
            value={selectedDoctor || null}
            onChange={onDoctorChange}
            options={doctorOptions}
            isLoading={loadingDoctorList}
            isDisabled={loadingDoctorList || !!errorDoctorList}
            placeholder="Đang tải danh sách bác sĩ..."
          />
          {loadingDoctorList && <small>🔄 Đang tải danh sách bác sĩ...</small>}
          {errorDoctorList && (
            <small style={{ color: "red" }}>
              ❌ Không thể tải danh sách bác sĩ: {errorDoctorList}
            </small>
          )}
        </div>

        <div className="content-right form-group">
          <label>Thông tin giới thiệu bác sĩ:</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Nhập mô tả thêm tại đây..."
            value={doctorDescription}
            onChange={onDescriptionChange}
          />
        </div>
      </div>

      {loading && <p>🔄 Đang lưu dữ liệu...</p>}
      {error && <p style={{ color: "red" }}>❌ Lỗi: {error}</p>}

      <MarkdownEditor
        key={contentMarkdown === "" ? "new" : "editing"}
        value={contentMarkdown}
        onChange={onContentMarkdownChange}
        onSave={onSave}
        onHTMLChange={onContentHTMLChange}
      />
    </div>
  );
};

export default DoctorManager;
