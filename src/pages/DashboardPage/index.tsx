import HeaderPage from "../Header";
import SideBarPage from "../SideBar";
import TaskManagement from "../TaskManagement";
import { useNavigate } from "react-router-dom";

interface DashboardPageProps {
  onLogout: () => void; // Explicitly typing onLogout prop
}

const DashboardPage = ({ onLogout }: DashboardPageProps) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="flex">
      <div>
        <SideBarPage />
      </div>

      <div className="bg-[#e3e3e3] w-full flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen">
        <HeaderPage
          title="Task Management Application"
          handleLogout={handleLogout}
        />

        <div className="p-5">
          <TaskManagement />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
