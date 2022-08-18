import Nav from "./Nav";

const styles = {
  container: "w-full mx-auto h-full ",
  body: "bg-gary-100 h-screen p-10",
};

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.body}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
