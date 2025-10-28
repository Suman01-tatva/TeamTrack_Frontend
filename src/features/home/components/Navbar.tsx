import { FaBars, FaTimes, FaSearch, FaUser, FaBell } from "react-icons/fa";
import { useState } from "react";
import MenuDropdown from "../../../common/components/menuDropdown/MenuDropdown";
import { useDispatch } from "react-redux";
import { logoutAllThunk } from "../../auth/authThunk";
import type { AppDispatch } from "../../../app/store";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <nav className="bg-gray-850/80 border-b border-gray-700 sticky top-0 z-50 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-gray-850/50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FaFolder className="w-5 h-5 text-white" />
                </div> */}
              <span className="ml-2 text-xl font-bold text-blue-400">
                TeamTrack
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-10 md:flex md:space-x-1">
              {["overview", "projects", "tasks", "team", "reports"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-blue-800 text-blue-300"
                        : "text-gray-400 hover:bg-blue-700 hover:text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative MT-5">
              <MenuDropdown
                content={<FaBell className="w-5 h-5" />}
                dropdownList={[
                  <p>Notification1</p>,
                  <p>Notification2</p>,
                  <p>Notification3</p>,
                ]}
              />
            </div>

            {/* Profile Icon with Tooltip */}
            <div className="relative group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <MenuDropdown
                  content={<FaUser className="w-5 h-5 text-white" />}
                  dropdownList={[<p>Profile</p>, <p  onClick={() => dispatch(logoutAllThunk())}>LogOut</p>]}
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:bg-blue-800"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-700 bg-gray-850">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {["overview", "projects", "tasks", "team", "reports"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${
                  activeTab === tab
                    ? "bg-blue-800 text-blue-300"
                    : "text-gray-300 hover:bg-blue-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
