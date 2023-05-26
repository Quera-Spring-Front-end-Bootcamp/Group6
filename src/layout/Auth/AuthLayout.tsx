import { Children } from "../../types/Children";
import AuthHeader from "./AuthHeader";

export default function AuthLayout({ children }: Children) {
  return (
    <div className="w-screen h-screen">
      <AuthHeader />
      <div className="w-screen h-screen absolute top-0 left-0 bg-gradient-[269.55deg] from-[#06846F] from-[0.35%] to-[#54BEE8] to-[103.4%] z-0 clip" />
      <div className="w-full h-fit mt-10 flex  justify-center relative z-10">
        {children}
      </div>
    </div>
  );
}
