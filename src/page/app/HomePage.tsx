import MainLayout from "layout/MainLayout";
import { useDocumentTitle } from "usehooks-ts";

const HomePage = () => {
	useDocumentTitle("Artify | Home");

	return <MainLayout>HomePage</MainLayout>;
};

export default HomePage;
