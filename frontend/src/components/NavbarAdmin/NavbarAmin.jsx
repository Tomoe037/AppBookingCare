import { useState } from "react";
import "./NavbarAdmin.scss";

const NavbarAdmin = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  return (
    <div className="navbar-admin">
      <div className="navbar-admin-left">
        <div className="navbar-options">
          {/* Người dùng + dropdown */}
          <div
            className="user-dropdown-wrapper"
            onMouseEnter={() => setShowUserDropdown(true)}
            onMouseLeave={() => setShowUserDropdown(false)}
          >
            <div className="navbar-item">Người dùng</div>

            {showUserDropdown && (
              <div className="dropdown-menu">
                <div className="dropdown-item">CRUD user</div>
                <div className="dropdown-item">CRUD Redux</div>
                <div className="dropdown-item">Quản lý bác sĩ</div>
                <div className="dropdown-item">Quản lý admin</div>
              </div>
            )}
          </div>

          {console.log("dropdown state:", showUserDropdown)}
          <div className="navbar-item">Phòng khám</div>
          <div className="navbar-item">Chuyên khoa</div>
          <div className="navbar-item">Cẩm nang</div>
        </div>
      </div>

      <div className="navbar-admin-right">
        <div className="navbar-account">
          <div className="account-name">Xin chào, hoaidan1</div>
          <div className="account-avt"></div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
