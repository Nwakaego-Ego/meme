import DashboardLayout from "../dashboardLayout/dashboardLayout";
import DashboardButton from "../DashboardButton/page";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">AFCON Meme Hub Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <DashboardButton text="View Memes" link="/components/meme" />
        <DashboardButton text="Upload Meme" link="/components/upload" />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
