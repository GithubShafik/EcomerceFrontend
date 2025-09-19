import { GuestGuard } from "@/guard";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GuestGuard>{children}</GuestGuard>
    </>
  );
};

export default AuthLayout;
