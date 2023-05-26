import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { RegisterType } from "../types/Input";

export const Input: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & RegisterType
> = forwardRef((props, ref) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  if (props.register) {
    return (
      <div className="w-full flex flex-col gap-1 items-end">
        <span className="text-[14px] font-[400]">{props.placeholder}</span>
        <input
          {...register(props?.register.name, { ...props?.register })}
          {...props}
          className={`bg-white border-solid border-[1px] border-[#AAAAAA] rounded-[6px] outline-none ${props.className}`}
          placeholder=""
        />
        {errors[props.register.name] && (
          <InputOnError message={errors[props.register.name]?.message} />
        )}
      </div>
    );
  } else {
    return <input {...props} />;
  }
});
export const InputOnSuccess = ({ message }: { message: any }) => {
  return <span className="text-green-700">{message}</span>;
};
export const InputOnError = ({ message }: { message: any }) => {
  return <span className="text-red-700">{message}</span>;
};
