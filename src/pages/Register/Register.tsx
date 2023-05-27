import {
  AuthCart,
  AuthCartHeader,
} from "../../components/AuthPagesComps/AuthCart";
import AuthLayout from "../../layout/Auth/AuthLayout";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  password: string;
  fullName: string;
  roles: boolean;
};
function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <AuthLayout>
      <AuthCart>
        <AuthCartHeader header="ثبت‌نام در کوئرا تسک منیجر" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[29px]"
        >
          <div className="w-full flex flex-col gap-1 items-end">
            <span className="text-[14px] font-[400]">نام کامل</span>
            <input
              {...register("fullName", { required: true })}
              className={`bg-white border-solid border-[1px] border-[#AAAAAA] rounded-[6px] outline-none w-full`}
            />
            {errors["fullName"] && (
              <span className="text-red-700">{`${errors["fullName"]?.message}`}</span>
            )}
          </div>
          <div className="w-full flex flex-col gap-1 items-end">
            <span className="text-[14px] font-[400]">ایمیل</span>
            <input
              {...register("email", {
                required: true,
              })}
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
          <div dir="rtl" className="w-full flex items-center gap-1  ">
            <input
              {...register("roles", { required: true })}
              type="radio"
              {...register("password", {
                required: true,
              })}
              className={`rounded-[4px] border-solid border-[1px] border-[#999999]`}
            />
            <span className="text-[14px] font-[400]">
              قوانین و مقررات را می‌پذیرم.
            </span>
          </div>
          <button
            className="p-[10px] bg-[#208D8E] rounded-[6px] text-white font-[700] text-[14px] "
            type="submit"
          >
            ثبت نام
          </button>
        </form>
      </AuthCart>
    </AuthLayout>
  );
}

export default Register;
