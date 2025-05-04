import React from "react";
import Select from "react-select";
import MarkdownEditor from "../../../components/MarkdownEditor/MarkdownEditor";
import { useDoctorInfoViewModel } from "../../../viewmodels/useDoctorManagerViewModel.js"

const DoctorManager = () => {
    const {
      selectedDoctor,
    contentMarkdown,
    doctorDescription,
    onDoctorChange,
    onContentMarkdownChange,
    onDescriptionChange,
    onContentHTMLChange,
    onSave,
    loading,
    error
    } = useDoctorInfoViewModel();
  
    const doctorOptions = [
      { value: "dr01", label: "Bác sĩ A" },
      { value: "dr02", label: "Bác sĩ B" }
    ];
  
    return (
      <div className="doctor-manager-container">
        <div className="doctor-manager-title">Tạo Thêm Thông tin doctor</div>
        <div className="more-info-doctor">
          <div className="content-left form-group">
            <label>Chọn Bác Sĩ</label>
            <Select
             className="form-control"
             value={selectedDoctor}
             onChange={onDoctorChange}
             options={doctorOptions}
            />
          </div>
  
          <div className="content-right form-group">
            <label>Thông tin giới thiệu bác sĩ:</label>
            <textarea className="form-control" rows="4" placeholder="Nhập mô tả thêm tại đây..." 
             value={doctorDescription}
             onChange={onDescriptionChange}
            />
          </div>
        </div>
  
        {loading && <p>🔄 Đang lưu dữ liệu...</p>}
        {error && <p style={{ color: "red" }}>❌ Lỗi: {error}</p>}
  
        <MarkdownEditor
         value={contentMarkdown}
         onChange={onContentMarkdownChange}
         onSave={onSave}
         onHTMLChange={onContentHTMLChange}
        />
      </div>
    );
  };
  
  export default DoctorManager;
  