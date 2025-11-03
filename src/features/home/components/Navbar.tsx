import { FaBars, FaTimes, FaSearch, FaUser, FaBell } from "react-icons/fa";
import { useState } from "react";
import MenuDropdown from "../../../common/components/menuDropdown/MenuDropdown";
import { useDispatch } from "react-redux";
import { logoutAllThunk } from "../../auth/authThunk";
import type { AppDispatch } from "../../../app/store";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className="bg-white/5 border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl shadow-lg shadow-black/5">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/dashboard"
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TeamTrack
              </span>
            </NavLink>
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-1 mx-2">
              {["projects", "tasks", "team", "reports"].map((tab) => (
                <NavLink
                  key={tab}
                  to={`/${tab}`}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white/20 backdrop-blur-xl text-white shadow-lg shadow-white/10 border border-white/20"
                        : "text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl"
                    }`
                  }
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </NavLink>
              ))}
            </div>
            {/* Notifications */}
            <div className="relative me-0">
              <MenuDropdown
                content={
                  <div className="p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <FaBell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </div>
                }
                dropdownList={[
                  <p className="text-gray-300">Notification 1</p>,
                  <p className="text-gray-300">Notification 2</p>,
                  <p className="text-gray-300">Notification 3</p>,
                ]}
              />
            </div>

            {/* Profile */}
            <div className="relative">
              <MenuDropdown
                content={
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-xl">
                    <FaUser className="w-4 h-4 text-white" />
                  </div>
                }
                dropdownList={[
                  <p className="text-gray-300">Profile</p>,
                  <p
                    onClick={() => dispatch(logoutAllThunk())}
                    className="text-gray-300 hover:text-red-400 transition-colors"
                  >
                    Logout
                  </p>,
                ]}
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl transition-all"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="px-4 pt-4 pb-4 space-y-2">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-11 pr-4 py-2.5 border border-white/10 rounded-xl bg-white/5 backdrop-blur-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-white/20"
              />
            </div>

            {/* Mobile Navigation Links */}
            {["projects", "tasks", "team", "reports"].map((tab) => (
              <NavLink
                key={tab}
                to={`/${tab}`}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-white/20 backdrop-blur-xl text-white shadow-lg shadow-white/10 border border-white/20"
                      : "text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl"
                  }`
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </NavLink>
            ))}

            {/* Mobile Menu Actions */}
            <div className="pt-4 mt-4 border-t border-white/10 space-y-2">
              <button className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl transition-all">
                <FaBell className="inline w-4 h-4 mr-3" />
                Notifications
              </button>
              <button className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-xl transition-all">
                <FaUser className="inline w-4 h-4 mr-3" />
                Profile
              </button>
              <button
                onClick={() => dispatch(logoutAllThunk())}
                className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-gray-400 hover:text-red-400 hover:bg-white/10 backdrop-blur-xl transition-all"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
