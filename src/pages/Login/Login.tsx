import {
  AuthCart,
  AuthCartHeader,
} from "../../components/AuthPagesComps/AuthCart";
import AuthLayout from "../../layout/Auth/AuthLayout";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
};
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthLayout>
      <AuthCart>
        <AuthCartHeader header="(: به کوئرا تسک منیجر خوش برگشتی " />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[29px]"
        >
          <div className="w-full flex flex-col gap-1 items-end">
            <span className="text-[14px] font-[400]">ایمیل</span>
            <input
              {...register("email", { required: true })}
              className={`bg-white border-solid border-[1px] border-[#AAAAAA] rounded-[6px] outline-none w-full`}
            />
            {errors["email"] && (
              <span className="text-red-700">{`${errors["email"]?.message}`}</span>
            )}
          </div>
          <div className="w-full flex flex-col gap-1 items-end">
            <span className="text-[14px] font-[400]">رمز عبور</span>
            <input
              {...register("password", {
                required: true,
              })}
              className={`bg-white border-solid border-[1px] border-[#AAAAAA] rounded-[6px] outline-none w-full`}
            />
            {errors["password"] && (
              <span className="text-red-700">{`${errors["password"]?.message}`}</span>
            )}
          </div>
          <Link
            className="font-[600] text-[12px] text-[#208D8E] self-end mt-[-20px] mb-[5px]"
            to="/forget"
          >
            رمز عبور را فراموش کردهای؟
          </Link>
          <button
            className="p-[10px] bg-[#208D8E] rounded-[6px] text-white font-[700] text-[14px] "
            type="submit"
          >
            ورود
          </button>
        </form>
        <div className="flex items-center gap-2">
          <Link
            className="font-[700] text-[16px] text-[#208D8E]"
            to="/register"
          >
            ثبت نام
          </Link>
          <span className="font-[400] text-[16px] text-black">
            ثبت نام نکرده ای؟
          </span>
        </div>
      </AuthCart>
    </AuthLayout>
  );
}

export default Login;
