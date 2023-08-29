import "./styles.scss";

interface IRegisterButtonProps {
  value?: string;
}

const classNamePrefix = "register-button";

const RegisterButton: React.FC<IRegisterButtonProps> = (props) => {
  const { value } = props;

  return <div className={classNamePrefix}>
    <div className={`${classNamePrefix}__text`}>ĐĂNG KÝ <span>+{value}K</span></div>
    <div className={`${classNamePrefix}__layer`}></div>
  </div>;
};

export default RegisterButton;
