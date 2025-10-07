import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
}
