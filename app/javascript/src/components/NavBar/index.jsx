import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import authApi from "apis/auth";
import { resetAuthTokens } from "apis/axios";
import { setToLocalStorage, getFromLocalStorage } from "helpers/storage";

const NavBar = ({ isUserLoggedIn }) => {
	const username = getFromLocalStorage("authUsername");

	const handleLogout = async (event) => {
		event.preventDefault();
		try {
			await authApi.logout();
			setToLocalStorage({
				authToken: null,
				authUsername: null,
				authUserId: null,
			});
			resetAuthTokens();
			window.location.href = "/login";
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav className="bg-white shadow">
			<div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex px-2 lg:px-0">
						<div className="hidden md:flex">
							<Link
								to="/"
								className="inline-flex items-center px-1 pt-1 mr-3
                          font-semibold text-sm leading-5
                          text-indigo-500 hover:text-indigo-500"
							>
								Dashboard
							</Link>
							<Link
								to="/create"
								className="inline-flex items-center px-1 pt-1 mr-3
                          font-semibold text-sm leading-5
                          text-indigo-500 hover:text-indigo-500"
							>
								CreatePoll
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-end">
						<p
							className="inline-flex items-center px-1 pt-1 mr-3
                          font-semibold text-sm leading-5
                          text-indigo-500 hover:text-indigo-500 capitalize"
						>
							{username !== "null" ? username : ""}
						</p>

						{isUserLoggedIn ? (
							<a
								onClick={handleLogout}
								className="inline-flex items-center px-1 pt-1 text-sm
					      font-semibold leading-5 text-bb-gray-600 text-opacity-50
					      transition duration-150 ease-in-out border-b-2
					      border-transparent hover:text-bb-gray-600 focus:outline-none
					      focus:text-bb-gray-700 cursor-pointer"
							>
								LogOut
							</a>
						) : (
							<Link
								to="/login"
								className="inline-flex items-center px-1 pt-1 mr-3
												font-semibold text-sm leading-5
												text-indigo-500 hover:text-indigo-500"
							>
								Login
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
