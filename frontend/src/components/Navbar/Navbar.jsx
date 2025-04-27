import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faHandshake,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-top">
      <div className="navbar-left">
        <div className="navbar-menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="navbar-logo"></div>
        </div>
        <div className="navbar-right">
          <div className="navbar-contact">
            <FontAwesomeIcon icon={faHandshake} />
            <span>Hợp tác</span>
          </div>
          <div className="navbar-schedule">
            <FontAwesomeIcon icon={faClockRotateLeft} />
            <span>Lịch hẹn</span>
          </div>
        </div>
      </div>
     
        <div className="navbar-center">
          <div className="navbar-options">
            <div className="option-item">
              <div className="name-item">Tất cả</div>
            </div>
            <div className="option-item active">
              <div className="name-item">Tại nhà</div>
            </div>
            <div className="option-item">
              <div className="name-item">Tại viện</div>
            </div>
            <div className="option-item">
              <div className="name-item">Sống khỏe</div>
            </div>
          </div>

          <div className="navbar-search">
            <div className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <input
              type="text"
              placeholder="Tìm bệnh viện"
              className="search-text"
            />
          </div>
        </div>
       
    
    </div>
  );
};

export default NavBar;
