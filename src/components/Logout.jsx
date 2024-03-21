import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/authentication/userSlice";
import "../stylesheets/logout.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.authtoken;
  console.log(token);
  const handleLogout = () => {
    dispatch(logoutUser(token)).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="logout-bg">
      <button className="logout" type="button" onClick={handleLogout}>
        Press again to Logout
      </button>
    </div>
  );
};

export default Logout;
