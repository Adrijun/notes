import { Outlet } from "react-router";
import "./structure.css";

export function Structure() {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
}
