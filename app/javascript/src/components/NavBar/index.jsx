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
		<nav className="bg-white">
			<div className="flex items-center justify-between h-20">
				<div className="flex items-center ml-6">
					<Link to="/">
						<img
							className="block"
							src="https://i.ibb.co/Bf9QDw4/Screenshot-2021-03-01-at-4-17-44-PM-removebg-preview.png"
							alt="myPoll logo"
							width="160"
						/>
					</Link>
				</div>
				<div className="flex items-center justify-between">
					<Link
						to="/create"
						className="px-5 py-3 bg-poll-green text-sm font-medium text-white rounded focus:outline-none cursor-pointer"
					>
						Create Poll
					</Link>
				</div>
				<div className="flex items-center justify-between w-1/12 mr-5">
					{username !== "null" ? (
						<h2 className="text-base pt-1 pr-3 leading-5 text-poll-blue font-medium	border-bb-border border-r">
							{username}
						</h2>
					) : (
						""
					)}
					{isUserLoggedIn ? (
						<a
							onClick={handleLogout}
							className="inline-flex items-center pl-3 pt-1 
							transition duration-150 ease-in-out font-medium	text-base leading-5
							text-black cursor-pointer"
						>
							LogOut
						</a>
					) : (
						<Link
							to="/login"
							className="inline-flex items-center pl-3 pt-1
												transition duration-150 ease-in-out
												font-semibold text-base leading-5
												text-black cursor-pointer"
						>
							Login
						</Link>
					)}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
