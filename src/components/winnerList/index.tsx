import { formatMoney } from "../../utils/commonFunctions";
import "./styles.scss";

interface IWinnerListProps {
  data?: any;
}

const classNamePrefix = "winner-list";

const WinnerList: React.FC<IWinnerListProps> = (props) => {
  const { data } = props;

  return (
    <div className={classNamePrefix}>
      {data && data.length > 0
        ? data.map((d: any) => <div className={`${classNamePrefix}__item`} key={d.id}>
          <img src={d.avatar} alt="" />
          <div className={`${classNamePrefix}__item-text`} style={{color: d.id === 1 ? "#ffffff" : "#dedada"}}>
            <span>{d.name}</span>
            <div>{`Vừa thắng ${formatMoney(d.prize)} tại ${d.pool}`}</div>
          </div>
        </div>)
        : ""}
    </div>
  );
};

export default WinnerList;
