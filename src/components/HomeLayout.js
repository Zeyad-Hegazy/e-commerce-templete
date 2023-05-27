import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Fragment } from "react";

const HomeLayout = () => {
	return (
		<Fragment>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</Fragment>
	);
};

export default HomeLayout;
