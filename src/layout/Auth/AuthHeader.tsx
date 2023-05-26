import { Link, useLocation } from "react-router-dom";
export default function AuthHeader() {
  const location = useLocation();

  return (
    <div className="flex w-full h-[100px] justify-between items-center p-10 z-[1] relative">
      <div className="flex items-center gap-2">
        <Link
          to={location.pathname === "/login" ? "/register" : "/login"}
          className="p-4 flex justify-center items-center bg-[#208D8E] rounded-[6px] not-italic font-[700] text-[14px] text-white w-fit h-[22px] leading-[22px]"
        >
          {location.pathname === "/login" ? "ثبت نام" : "ورود"}
        </Link>
        <span className="not-italic font-[400] text-16px]">
          {location.pathname === "/login"
            ? "ثبت‌نام نکرده‌ای؟"
            : "قبلا ثبت‌نام کرده‌ای؟"}
        </span>
      </div>
      <span className="not-italic font-[800] text-[32px] bg-clip-text text-transparent bg-gradient-[90deg] from-[#118C80] from-0% to-[#4AB7D8] to-[120%]">
        کوئرا تسک منیجر
      </span>
    </div>
  );
}
