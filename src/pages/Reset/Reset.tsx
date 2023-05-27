import {
  AuthCart,
  AuthCartHeader,
} from "../../components/AuthPagesComps/AuthCart";
import AuthLayout from "../../layout/Auth/AuthLayout";

function Reset() {
  return (
    <AuthLayout>
      <AuthCart>
        <AuthCartHeader header="فراموشی رمز عبور" />
        <span className="font-[400] text-[14px] text-black">
          .لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
        </span>
      </AuthCart>
    </AuthLayout>
  );
}

export default Reset;
