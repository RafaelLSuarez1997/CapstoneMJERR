import { Outlet } from "react-router-dom";


import "./Root.less";

export default function Root() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
