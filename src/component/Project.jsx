import MainLayout from "../Layout/MainLayout";

const Project = () => {
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
          <h1> resume</h1>
        </div>
      </section>
    </MainLayout>
  );
};

export default Project;
