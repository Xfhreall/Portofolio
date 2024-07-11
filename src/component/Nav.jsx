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
            <a href="#">Biodata</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
