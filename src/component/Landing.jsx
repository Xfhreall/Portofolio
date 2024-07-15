import { NavLink } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

const Landing = () => {
  return (
    <MainLayout>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "start",
            gap: "3em",
          }}
        >
          <NavLink to={"/Portofolio/home"}>GO</NavLink>
        </div>
      </section>
    </MainLayout>
  );
};

export default Landing;
