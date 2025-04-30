const UserManager = () => {
    return (
      <div className="crud-doctor-container">
        <div className="title">learn react - redux toolkit</div>
        <div className="body">
          <div className="container">
            <div className="row">
          <div className="col-12">
              Add New User
          </div>
                <div className="col-3">
                  <label className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="col-3">
                  <label className="form-label">
                    Password
                  </label>
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
                  <label for="inputState" className="form-label">
                    Gender
                  </label>
                  <select className="form-select">
                    <option selected>Male</option>
                    <option>Female</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="inputState" className="form-label">
                    Position
                  </label>
                  <select className="form-select">
                    <option selected>..</option>
                    <option>..</option>
                  </select>
                </div>
                <div className="col-3">
                  <label for="inputState" className="form-label">
                    RoleID
                  </label>
                  <select className="form-select">
                    <option selected>..</option>
                    <option>..</option>
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
  