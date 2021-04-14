import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const isAuth = (Component) => {
  const AuthComponent = (props) => {
    const { isAuthenticated } = useContext(AuthContext);

    let history = useHistory();
    debugger;
    if (!isAuthenticated) {
      history.push("/login");
      debugger;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
};
