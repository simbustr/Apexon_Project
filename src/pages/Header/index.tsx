type HeaderPageProps = {
  handleLogout: any;
  title: string;
};

const HeaderPage = ({ handleLogout, title }: HeaderPageProps) => {
  return (
    <div className="flex items-center p-3 bg-[#00000091] justify-between">
      <div className="text-white text-xl font-semibold">{title}</div>
      <div>
        <div className="bg-white px-4 py-1 rounded-full cursor-pointer" onClick={handleLogout}>Logout</div>
      </div>
    </div>
  );
};

export default HeaderPage;
