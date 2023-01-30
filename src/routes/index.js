/* routes page to create routes of all pages here */
import { Routes, Route } from "react-router-dom";
import HomePage from "../container/home";
import Layout from "../shared/layout";

const RoutesComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};
export default RoutesComponent;
