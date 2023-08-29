import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { useEffect } from "react";

const classNamePrefix = "home-page";

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const localAuth = localStorage.getItem("accessToken")

    if(localAuth){
      navigate("/")
    } else (
      navigate("/auth")
    )
  },[])
  return <div className={`${classNamePrefix}`}>Home Page</div>;
};

export default HomePage;
