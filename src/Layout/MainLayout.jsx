import Nav from "../component/Nav";

const MainLayout = (props) => {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
};

export default MainLayout;
