import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../redux/authentication/userSlice";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem("user")) || {};
  useEffect(() => {
    const desti = dispatch(authUser(token.authtoken));
    desti.then((data) => {
      if (data.error) {
        navigate("/");
      }
      console.log("useEffect triggered");
    });
  }, [dispatch, navigate, token.authtoken]);
  // Your effect logic here
  return <></>;
};

export default Auth;
