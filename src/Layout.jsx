import { Outlet } from "react-router-dom";
import Header from "./components/Header";
export default function Layout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <Outlet></Outlet>
    </div>
  );
}
