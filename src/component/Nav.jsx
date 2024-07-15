import { NavLink } from "react-router-dom";
import "../style/Nav.css";
const Nav = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <nav className="navbar">
        <ul className="list">
          <li>
            <NavLink className={"nav_link"} to="/Portofolio/">
              Biodata
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav_link"} to="/Portofolio/project">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink className={"nav_link"} to="/Portofolio/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
