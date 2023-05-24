import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Children } from "../types/Children";
export const Form = ({ children }: Children) => {
  const methods = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};
