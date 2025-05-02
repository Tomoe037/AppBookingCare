import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllcodeByType,
  createNewUser,updateUser
} from "../../../features/admin/adminThunk.js";
import "./UserManager.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCreateUserViewModel } from "../../../viewmodels/useCreateUserViewModel.js";
import { useUserListViewModel } from "../../../viewmodels/useUserListViewModel.js";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { clearAdminMessages } from "../../../features/admin/adminSlice.js";

const UserManager = () => {
  const dispatch = useDispatch();
  const { formData, handleInputChange, handleImageChange, resetForm ,handleEditUser,
    isEditMode,
    editUserId} =
    useCreateUserViewModel();
  const { gender, role, position, loading, successMessage, error } =
    useSelector((state) => state.admin);
  const {
    users,
    handleDeleteUser,
    loading: loadingUsers,
    error: userError,
    // refreshUserList,
  } = useUserListViewModel();
  useEffect(() => {
    dispatch(fetchAllcodeByType("GENDER"));
    dispatch(fetchAllcodeByType("ROLE"));
    dispatch(fetchAllcodeByType("POSITION"));
  }, [dispatch]);

  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        dispatch(clearAdminMessages());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, error, dispatch]);

  // const [selectedImage, setSelectedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleSaveUser = () => {
    console.log("Gửi data form:", formData);
    console.log("ID cập nhật:", editUserId);
    if (isEditMode) {
      dispatch(updateUser({ id: editUserId, data: formData })).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          resetForm();
        }
      });
    } else {
      dispatch(createNewUser(formData)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          resetForm();
        }
      });
    }
  };

  return (
    <div className="crud-doctor-container">
      <div className="title">learn react - redux toolkit</div>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-12">Add New User</div>
            {successMessage && (
              <div className="alert alert-success" role="alert">
                {successMessage}
              </div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="col-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-control"
                disabled={isEditMode}
              />
            </div>
            <div className="col-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-control"
                disabled={isEditMode}
              />
            </div>
            <div className="col-3">
              <label className="form-label">FirstName</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-3">
              <label className="form-label">LastName</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-3">
              <label className="form-label">PhoneNumber</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-9">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
            <div className="col-3">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="form-select"
                disabled={loading}
              >
                <option value="">-- Chọn giới tính --</option>
                {gender.map((g) => (
                  <option key={g.key} value={g.key}>
                    {g.valueVi}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label for="inputState" className="form-label">
                Position
              </label>
              <select
                name="positionId"
                value={formData.positionId}
                onChange={handleInputChange}
                className="form-select"
                disabled={loading}
              >
                <option value="">-- Chọn chức vụ --</option>
                {position.map((p) => (
                  <option key={p.key} value={p.key}>
                    {p.valueVi}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-3">
              <label for="inputState" className="form-label">
                role
              </label>
              <select
                name="roleId"
                value={formData.roleId}
                onChange={handleInputChange}
                className="form-select"
                disabled={loading}
              >
                <option value="">-- Chọn vai trò --</option>
                {role.map((r) => (
                  <option key={r.key} value={r.key}>
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
                  onChange={handleImageChange}
                />
                <label className="label-uploadImg" htmlFor="previewImg">
                  UpLoad Image<i className="fas fa-upload"></i>
                </label>
                {formData.previewImgUrl && (
                  <div
                    className="preview-image"
                    style={{
                      backgroundImage: `url(${formData.previewImgUrl})`,
                    }}
                    onClick={() => setIsLightboxOpen(true)}
                  ></div>
                )}
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSaveUser}
                disabled={loading}
              >
                {loading ? "Đang lưu..." : "Save"}
              </button>
            </div>
            {/* Lightbox hiển thị khi click ảnh */}
            {isLightboxOpen && (
              <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={[{ src: formData.previewImgUrl }]}
              />
            )}
            {/* table view */}
            {userError && (
              <div className="alert alert-danger" role="alert">
                {userError}
              </div>
            )}
            <div className="col-12">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Address</th>

                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingUsers && (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Đang tải danh sách...
                      </td>
                    </tr>
                  )}

                  {!loadingUsers && users.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Không có người dùng nào.
                      </td>
                    </tr>
                  )}

                  {!loadingUsers &&
                    users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address}</td>
                        <td>
                          <div className="btn-edit-user" onClick={() => handleEditUser(user.id)}>
                            <FontAwesomeIcon icon={faPencil} />
                          </div>
                          <div className="btn-delete-user" onClick={() => handleDeleteUser(user.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
