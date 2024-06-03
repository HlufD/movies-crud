import { Outlet } from "react-router-dom";
import Layout from "../layout";
import AppBar from "../components/admin/AppBar";

function AdminPage() {
  return (
    <Layout>
      <AppBar />
      <Outlet />
    </Layout>
  );
}

export default AdminPage;
