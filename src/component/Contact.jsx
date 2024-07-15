import MainLayout from "../Layout/MainLayout";

const Contact = () => {
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
        ></div>
      </section>
    </MainLayout>
  );
};

export default Contact;
