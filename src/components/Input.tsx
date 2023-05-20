type InputData = {
  id: string
  label: string
  type: string
  register: object
}

export const Input = ({ type, id, label, register }: InputData) => {
  return (
    <div className="flex flex-col mt-5">
      {type !== 'checkbox' && <>
        <label className="mb-2" htmlFor={id}>
          {label}
        </label>
        <input className="border border-gray-400 rounded-md h-10 outline-none pr-1" type={type} id={id} {...register} /> </>}

      {type === 'checkbox' && <div className="flex "><input type="checkbox" className="ml-2" /><span>قوانین و مقررات را می‌پذیرم</span></div>}
    </div>
  )
}
