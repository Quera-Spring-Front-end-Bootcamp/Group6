import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormTypes } from "../types/Form";
export const Form: React.FC<FormTypes> = ({
  children,
  onSuccess,
  onError,
  action,
  ...props
}) => {
  const methods = useForm();
  const onSubmit: SubmitHandler<any> = (data) => Fetch(data);
  const Fetch = (data: JSON) => {
    fetch(action, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
