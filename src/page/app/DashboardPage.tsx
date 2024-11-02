import { Button } from "components/button";
import MainLayout from "layout/MainLayout";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
	const navigate = useNavigate();

	return (
		<MainLayout>
			<div className="flex gap-5 content-layout">
				<Button onClick={() => navigate('/learning/video?vid=123')}>Video Learning Page</Button>
				<Button onClick={() => navigate('/learning/online?vid=123')}>Online Learning Page</Button>
				<Button onClick={() => navigate('/profile')}>Profile</Button>
			</div>
		</MainLayout>
	);
};

export default DashboardPage;
