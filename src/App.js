import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/ِAbout";
import HomeLayout from "./components/HomeLayout";
import DetailsPage, {
	loader as loadProductDetails,
} from "./components/DetailsPage";

const router = createBrowserRouter([
	{
		path: "",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{ path: "about", element: <About /> },
			{
				path: "products/:productId",
				element: <DetailsPage />,
				loader: loadProductDetails,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
