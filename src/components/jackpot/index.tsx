import "./styles.scss";
import titleImg from "../../assets/images/jackpot-title.png";
import jackpotImg from "../../assets/images/jacpotImg.png"

interface IJackpotProps {
  data?: any;
}

const classNamePrefix = "jackpot";

const Jackpot: React.FC<IJackpotProps> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__left`}>
        {data && data.length > 0
          ? data
              .slice(0, 3)
              .map((d: any) => <img src={d.gameImg} alt="" key={d.id} />)
          : ""}
      </div>

      <div className={`${classNamePrefix}__center`}>
        <img className={`${classNamePrefix}__center-floating`} src={titleImg} alt="" />
        <img src={jackpotImg} alt="" />
      </div>

      <div className={`${classNamePrefix}__right`}>
        {data && data.length > 0
          ? data
              .slice(3, 6)
              .map((d: any) => <img src={d.gameImg} alt="" key={d.id} />)
          : ""}
      </div>
    </div>
  );
};

export default Jackpot;
