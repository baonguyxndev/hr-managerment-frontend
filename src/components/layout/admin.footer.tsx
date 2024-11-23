"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        HR Managerment © {new Date().getFullYear()} Create By Bao Nguyxn
      </Footer>
    </>
  );
};

export default AdminFooter;
