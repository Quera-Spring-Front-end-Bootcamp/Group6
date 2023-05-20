type InputData = {
  id: string
  label: string
  type: string
  register: object
}

export const Input = ({ type, id, label, register }: InputData) => {
  return (
    <div className="flex flex-col mt-4">
      <label className="mb-2" htmlFor={id}>
        {label}
      </label>
      <input className="border border-gray-400 rounded-md mb-5 h-10 outline-none pr-1" type={type} id={id} {...register} />
    </div>
  )
}
