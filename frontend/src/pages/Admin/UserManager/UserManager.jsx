import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllcodeByType } from "../../../features/admin/adminThunk";

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
              <input type="text" className="form-control" />
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
