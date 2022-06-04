import NavBar from "../Nav";
import "./layout.scss";
/**
 * Layout component for the application
 * @param {object} param0
 */

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="app">{children}</div>
    </div>
  );
};

export default Layout;
