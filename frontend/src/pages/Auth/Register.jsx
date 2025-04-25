import "./Register.scss";
import InputField from "../../components/InputField/InputField";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import useRegisterViewModel from "../../viewmodels/useRegisterViewModel.js";
const Register = () => {
  const { form, loading, handleChange, handleRegister } =
    useRegisterViewModel();

  return (
    <div className="register">
      <div className="register-container">
        <div className="register-left">
          <div className="register-image"></div>
          <div className="register-left-des">
            Create your account and start chatting with your favorite people!
          </div>
        </div>

        <form className="register-right"onSubmit={handleRegister}>
          <div className="right-content">
            <div className="mainTitle">Register</div>
            <div className="subtitle">It’s free and only takes a minute.</div>
          </div>

          <div className="register-form" >
            <InputField
              icon={faUser}
              placeholder="FirstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <InputField
              icon={faUser}
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            <InputField
              icon={faEnvelope}
              placeholder="Your Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              icon={faLock}
              placeholder="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="group-register-login">
            <div className="existing-account-login">
              Already have an account? <a href="#">Sign in</a>
            </div>
            <div className="register-btn" disabled={loading}>
              <button type="submit" disabled={loading}>
                {loading ? "Đang đăng ký..." : "Đăng ký"}
              </button>
            </div>
          </div>

          <div className="register-other">
            <div className="other-item">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div className="other-item">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
            <div className="other-item">
              <FontAwesomeIcon icon={faGoogle} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
