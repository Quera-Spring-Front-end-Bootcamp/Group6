import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "./Input"

type FormTypes = {
  action: string
  method: 'GET' | 'POST'
}

type FormInputsData = {
  email?: string
  password?: string
  checkbox?: boolean
}

export const Form = ({ action, method }: FormTypes) => {
  const { register, handleSubmit } = useForm()

  const onSubmit: SubmitHandler<FormInputsData> = data => {
    console.log('Form > SubmitHandler:', data)
    sendRequest(action, method)
  }

  async function sendRequest(url: string, method: string) {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const jsonData = await response.json()
      return jsonData
    } catch (error) {
      console.error('Form > sendRequest error', error);
    }
  }

  return (
    <form dir="rtl" className="flex flex-col shadow-[0_12px_50px_rgba(0,0,0,0.18)] rounded-[20px] bg-white p-6" onSubmit={handleSubmit(onSubmit)}>

      {/* example for adding email input */}
      <Input id="email" elementType="email" label="ایمیل" register={register("email", { required: true })} />

      {/* example for adding password input */}
      <Input id="password" elementType="password" label="رمز عبور" register={register("password", { required: true })} />

      {/* example for adding checkbox input */}
      <Input elementType="checkbox" id="checkbox" register={register('checkbox', { required: true })} label='قوانین و مقررات را می‌پذیرم' />
    </form>
  )
}
