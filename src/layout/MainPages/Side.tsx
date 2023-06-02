import SideBar from "../../components/BoardPagesComps/SideBar";
import Title from "../../components/Title";
import { useLocation } from "react-router-dom";
export default function Side() {
  const location = useLocation();
  return (
    <div
      dir="rtl"
      className="w-[340px] pl-4 border-l-[0.5px] border-l-[#AAAAAA] py-10"
    >
      <div className="pb-5">
        <Title />
      </div>
      {!location.pathname.includes("profile") ? (
        <SideBar />
      ) : (
        <div>profile side bar</div>
      )}
    </div>
  );
}
