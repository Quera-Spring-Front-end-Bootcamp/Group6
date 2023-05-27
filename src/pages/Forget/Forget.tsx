import {
  AuthCart,
  AuthCartHeader,
} from "../../components/AuthPagesComps/AuthCart";
import AuthLayout from "../../layout/Auth/AuthLayout";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
};

function Forget() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <AuthLayout>
      <AuthCart>
        <AuthCartHeader header="فراموشی رمز عبور" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-[29px]"
        >
          <div className="w-full flex flex-col gap-1 items-end">
            <span className="text-[14px] font-[400]">
              ایمیل خود را وارد کنید
            </span>
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

          <button
            className="p-[10px] bg-[#208D8E] rounded-[6px] text-white font-[700] text-[14px] "
            type="submit"
          >
            دریافت ایمیل بازیابی رمز عبور
          </button>
        </form>
      </AuthCart>
    </AuthLayout>
  );
}

export default Forget;
