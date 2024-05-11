import Layout from "@/components/layout/Layout";
import { Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
