/* layout created for common header and footer to be called once for all pages*/
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      {/* header component */}
      <Header />
      {/* pages components */}
      {props.children}
    </>
  );
};
export default Layout;
