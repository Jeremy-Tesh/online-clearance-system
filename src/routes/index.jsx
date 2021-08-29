import Officer from "./Officer";
import Staff from "./Staff";
import Student from "./Student";
import Admin from "./Admin";

import { useAuth } from "../contexts/AuthContext";

const IndexRoute = () => {
  const {
    currentUser: { email },
  } = useAuth();

  const renderAppBasedOnRole = () => {
    switch (email) {
      case "none":
        return <Staff />;
      case "jermitesh20@gmail.com":
        return <Student />;
      case "officer@officer.com":
        return <Officer />;
      case "e@gmail.com":
        return <Admin />;
      default:
        return null;
    }
  };

  return renderAppBasedOnRole();
};

export default IndexRoute;
