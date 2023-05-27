import { Children } from "../../types/Children";
export const AuthCart = ({ children }: Children) => {
  return (
    <div className="min-w-[460px] flex flex-col items-center gap-[29px] p-[24px] bg-white shadow-[0_12px_50px_rgba(0,0,0,0.18)] rounded-[20px]">
      {children}
    </div>
  );
};
type Header = {
  header: string;
};
export const AuthCartHeader = ({ header }: Header) => {
  return <h1 className="not-italic font-[680] text-[32px]">{header}</h1>;
};
