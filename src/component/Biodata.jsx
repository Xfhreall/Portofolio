import MainLayout from "../Layout/MainLayout";
import { Link } from "react-router-dom";
import "../style/Bio.css";

const Biodata = () => {
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
          <div
            className="content"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div className="left">
              <img
                draggable="false"
                src="https://i.pinimg.com/originals/82/0a/31/820a31ebc7a75832858aed4f0db952fb.jpg"
                alt="gambar"
                data-aos="zoom-in"
                data-aos-duration="1000"
                // data-aos-delay="500"
              ></img>
              <div
                className="text"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="300"
              >
                <p style={{ fontWeight: "bolder", fontSize: "24px" }}>
                  Risqi Achmad Fahreal
                </p>
                <p
                  style={{
                    letterSpacing: ".8px",
                    fontSize: "18px",
                    color: "#8d96a0",
                  }}
                >
                  Farel · he/him
                </p>
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <div className="text-subhead" style={{ lineHeight: "1" }}>
                <h1 style={{ fontSize: "34px", letterSpacing: "1px" }}>
                  Front End
                </h1>
                <h1
                  style={{ fontSize: "34px", letterSpacing: "8px" }}
                  className="line"
                >
                  Developer
                </h1>
                <h2 style={{ letterSpacing: "-2px", fontWeight: "600" }}>
                  _____________________________
                </h2>
              </div>
              <div
                className="desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <p>
                  A software engineer based in Malang, Indonesia. I specialize
                  in front end development. i use technologies such as react,
                  vite, astro, scss, and other technologies and tools to add
                  attractiveness, integrate systems, deploy, and maintain
                  applications. Additionaly, i'm an{" "}
                  <strong>Computer Science</strong> student at{" "}
                  <strong>Brawijaya University</strong>.
                </p>
                <div
                  className="icon"
                  style={{ display: "flex", flexDirection: "row" }}
                >
                  <a
                    href="https://github.com/Xfhreall"
                    class="fa fa-github"
                    target="blank"
                  ></a>
                  <a
                    href="https://www.instagram.com/arfah.real_"
                    class="fa fa-instagram"
                    target="blank"
                  ></a>
                  <a
                    href="https://x.com/ursnctuary"
                    class="fa fa-twitter"
                    target="blank"
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/risqi-fahreal-a2b7a4289/"
                    class="fa fa-linkedin"
                    target="blank"
                  ></a>
                </div>
                <Link className="home-button" to={"/Portofolio"}>
                  <a className="fa fa-download"></a>
                  <p style={{ fontSize: "14px" }} className="home-desc">
                    Resume
                  </p>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
          <p style={{ fontSize: "12px" }}>
            © 2024 Risqi Achmad Fahreal, All Right Reserved
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Biodata;
