import ContactToolbar from "../../components/contactToolbar";
import SideBanner from "../../components/sideBanner";
import WinnerList from "../../components/winnerList";
import { SideBannerMocks } from "../../mocks/sideBannerMocks";
import logo from "../../assets/images/logo.png";
import slogan from "../../assets/images/slogan.png";
import { WinnerMocks } from "../../mocks/winnerMocks";
import "./styles.scss";
import RegisterForm from "../../components/registerForm";
import Jackpot from "../../components/jackpot";
import { GameMocks } from "../../mocks/gameMocks";
import bottomNote from "../../assets/images/bottomNote.png";
import viewMore from "../../assets/images/viewMore.png";

const classNamePrefix = "register-page";

const RegisterPage = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content-top`}>
          <div className={`${classNamePrefix}__left`}>
            <SideBanner data={SideBannerMocks} />
          </div>

          <div className={`${classNamePrefix}__center`}>
            <img className={`${classNamePrefix}__logo`} src={logo} alt="" />
            <img className={`${classNamePrefix}__slogan`} src={slogan} alt="" />
            <RegisterForm />
          </div>

          <div className={`${classNamePrefix}__right`}>
            <ContactToolbar />
            <WinnerList data={WinnerMocks} />
          </div>
        </div>

        <div className={`${classNamePrefix}__content-bottom`}>
          <Jackpot data={GameMocks} />

          <div className={`${classNamePrefix}__bottom-note`}>
            <div className={`${classNamePrefix}__bottom-note-img`}>
              <img src={bottomNote} alt="" />
              <img src={viewMore} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
