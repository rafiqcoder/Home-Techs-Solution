import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link,NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const { user, LogOut } = useContext(UserContext);
  const handleLogout = () => {
    LogOut()
    .then((result) => {
      toast.success("Logged Out Successfully");
    })
  }
  console.log(user);
  return (
    <header className="">
      <div className=" hidden sm:flex navbar bg-base-100 h-[50px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Item 1</NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink to="/" className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </NavLink>
                <ul className="p-2">
                  <li>
                    <NavLink to="/">Submenu 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">Submenu 2</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/">Item 3</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            HomeTech
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active:" : undefined)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/technicians">Technicians</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Admin Dash</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/login"
            className="btn-outline btn-warning border rounded-r-full rounded-l-full py-[2px] px-3"
          >
            Login
          </NavLink>
          <div className=" content-center justify-center items-center flex">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className=" btn-ghost btn-circle p-2 m-2">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className=" btn-primary btn-block p-2">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img alt="" src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="justify-between">
                   {user?.displayName}
                  </span>
                </li>
                <li>
                  <span>Settings</span>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** Header for Mobile */}
      <MobileHeader></MobileHeader>
    </header>
  );
};

export default Header;
