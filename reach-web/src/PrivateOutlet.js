import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import PageLayout from "./components/PageLayout";

const PrivateOutlet = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};

export default PrivateOutlet;
