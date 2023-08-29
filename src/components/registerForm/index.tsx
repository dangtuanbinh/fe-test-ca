import RegisterButton from "../registerButton";
import registerNote from "../../assets/images/registerNote.png";
import registerButton from "../../assets/images/registerButton.png";
import userIcon from "../../assets/images/userIcon.png";
import passIcon from "../../assets/images/clockIcon.png";
import capchaIcon from "../../assets/images/captchaIcon.png";

import "./styles.scss";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useState } from "react";

const classNamePrefix = "register-form";

const RegisterForm = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [capcha, setCapcha] = useState<string>("");

  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRePass, setShowRePass] = useState<boolean>(false);

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__floating-tag`}>
        <span>ĐĂNG KÝ NGAY</span>
      </div>

      <form>
        <div className={`${classNamePrefix}__user-input`}>
          <img src={userIcon} alt="" />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Tên đăng nhập"
            autoComplete="new-user"
          />
        </div>

        <div className={`${classNamePrefix}__password-input`}>
          <img src={passIcon} alt="" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPass ? "text" : "password"}
            placeholder="Mật khẩu"
            autoComplete="new-password"
          />
          <div
            className={`${classNamePrefix}__input-icon`}
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <EyeFilled style={{ color: "#ffe671", fontSize: 22 }} />
            ) : (
              <EyeInvisibleFilled style={{ color: "#ffe671", fontSize: 22 }} />
            )}
          </div>
        </div>

        <div className={`${classNamePrefix}__password-input`}>
          <img src={passIcon} alt="" />
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            type={showRePass ? "text" : "password"}
            placeholder="Nhập lại mật khẩu"
          />
          <div
            className={`${classNamePrefix}__input-icon`}
            onClick={() => setShowRePass(!showPass)}
          >
            {showRePass ? (
              <EyeFilled style={{ color: "#ffe671", fontSize: 22 }} />
            ) : (
              <EyeInvisibleFilled style={{ color: "#ffe671", fontSize: 22 }} />
            )}
          </div>
        </div>

        <div className={`${classNamePrefix}__capcha-input`}>
          <img src={capchaIcon} alt="" />
          <input
            value={capcha}
            onChange={(e) => setCapcha(e.target.value)}
            type="text"
            placeholder="Nhập Capcha"
          />
        </div>
      </form>

      <div className={`${classNamePrefix}__button`}>
        <img src={registerButton} alt="" />
      </div>
      <img className={`${classNamePrefix}__note`} src={registerNote} alt="" />
    </div>
  );
};

export default RegisterForm;
