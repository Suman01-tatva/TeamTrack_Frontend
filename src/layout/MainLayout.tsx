import { Outlet } from "react-router-dom";
import Navbar from "../features/home/components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-1 px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
