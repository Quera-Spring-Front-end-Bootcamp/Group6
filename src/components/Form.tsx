import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { FormTypes } from "../types/Form";
const API_URL = "";
export const Form: React.FC<FormTypes> = ({
  children,
  onSuccess,
  onError,
  action,
  ...props
}) => {
  const methods = useForm();
  const onSubmit: SubmitHandler<any> = (data) => Fetch(data);
  const Fetch = async (data: JSON) => {
    const value = await fetch(API_URL + action, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (value.ok) {
      const response = await value.json();
      onSuccess(response);
    } else {
      const error = await value.json();
      onError(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
};
