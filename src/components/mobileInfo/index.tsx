import "./styles.scss";
import mobileAds from "../../assets/images/mobileAd.png";
import downloadButton from "../../assets/images/downloadButton.png";
import mobileNote from "../../assets/images/mobileNote.png";
import fireWallText from "../../assets/images/fire-wall.png";
import fireWallButton from "../../assets/images/fire-wall-btn.png";
import mobileFb from "../../assets/images/mobileFb.png";
import mobileTele from "../../assets/images/mobileTele.png";
import mobileChat from "../../assets/images/mobileChat.png";

const classNamePrefix = "mobile-info";

const MobileInfo = () => {
  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__left-icon`}>
        <img src={mobileFb} alt="" />
        <img src={mobileTele} alt="" />
      </div>

      <div className={`${classNamePrefix}__right-icon`}>
        <img src={mobileChat} alt="" />
      </div>

      <img src={mobileAds} alt="" />
      <img src={downloadButton} alt="" />
      <img src={mobileNote} alt="" />
      <img src={fireWallText} alt="" style={{ margin: "15px 0" }} />
      <img src={fireWallButton} alt="" style={{ marginBottom: 20 }} />
    </div>
  );
};

export default MobileInfo;
