import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllcodeByType } from "../../../features/admin/adminThunk";
import "./UserManager.scss";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const UserManager = () => {
  const dispatch = useDispatch();
  const { gender, role, position, loading } = useSelector(
    (state) => state.admin
  );
  useEffect(() => {
    dispatch(fetchAllcodeByType("GENDER"));
    dispatch(fetchAllcodeByType("ROLE"));
    dispatch(fetchAllcodeByType("POSITION"));
  }, [dispatch]);
  const [previewImgUrl, setPreviewImgUrl] = useState("");
  // const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const handleOnchangeImage = (event) => {
    let data = event.target.files;
    let file = data[0];
    // tao mot url de xem anh

    // console.log(" check objectUrl  ", objectUrl )
    if (file) {
      let objectUrl = URL.createObjectURL(file);
      setPreviewImgUrl(objectUrl);
      // setSelectedImage(file);
    }
  };
  return (
    <div className="crud-doctor-container">
      <div className="title">learn react - redux toolkit</div>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-12">Add New User</div>
            <div className="col-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-3">
              <label className="form-label">FirstName</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-3">
              <label className="form-label">LastName</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-3">
              <label className="form-label">PhoneNumber</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-9">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" />
            </div>

            <div className="col-3">
              <label className="form-label">Gender</label>
              <select className="form-select" disabled={loading}>
                <option value="">-- Chọn giới tính --</option>
                {gender.map((g) => (
                  <option key={g.keyMap} value={g.keyMap}>
                    {g.valueVi}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label for="inputState" className="form-label">
                Position
              </label>
              <select className="form-select" disabled={loading}>
                <option value="">-- Chọn chức vụ --</option>
                {position.map((p) => (
                  <option key={p.keyMap} value={p.keyMap}>
                    {p.valueVi}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label for="inputState" className="form-label">
                RoleID
              </label>
              <select className="form-select" disabled={loading}>
                <option value="">-- Chọn vai trò --</option>
                {role.map((r) => (
                  <option key={r.keyMap} value={r.keyMap}>
                    {r.valueVi}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label className="form-label">Image</label>
              <div className="preview-img-container">
                <input
                  id="previewImg"
                  type="file"
                  hidden
                  onChange={handleOnchangeImage}
                />
                <label className="label-uploadImg" htmlFor="previewImg">
                  UpLoad Image<i className="fas fa-upload"></i>
                </label>
                {previewImgUrl && (
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${previewImgUrl})`,
                      cursor: "pointer",
                    }}
                    onClick={() => setIsLightboxOpen(true)}
                  ></div>
                )}
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>

            {/* Lightbox hiển thị khi click ảnh */}
            {isLightboxOpen && (
              <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={[{ src: previewImgUrl }]}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
