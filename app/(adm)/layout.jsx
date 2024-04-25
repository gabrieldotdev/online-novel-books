import React from "react";

export default function AdminLayout({ children }) {
  return (
    <>
      <h1 className="text-4xl font-bold text-center">Admin Layout</h1>
      {children}
    </>
  );
}
