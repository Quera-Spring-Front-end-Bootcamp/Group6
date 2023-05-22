import { useState } from 'react'

type InputData = {
  id: string
  label?: string
  elementType: string
  register: object,
}

export const Input = ({ elementType, id, label, register }: InputData) => {
  const [rulesAgreed, setRulesAgreed] = useState(false)

  const handleChange = () => {
    setRulesAgreed(!rulesAgreed)
  }

  return (
    <div className="flex flex-col mt-5">
      {
        elementType !== 'checkbox' &&
        <>
          <label className="mb-2 font-normal text-sm leading-snug text-right" htmlFor={id}>
            {label}
          </label>
          <input className="border border-gray-400 rounded-md h-10 outline-none pr-1 font-normal" type={elementType} id={id} {...register} />
        </>
      }

      {elementType === 'checkbox' &&
        <div className="flex"><input type="checkbox" className="ml-2" defaultChecked={rulesAgreed} onChange={handleChange} {...register} /><span>قوانین و مقررات را می‌پذیرم</span>
        </div>
      }
    </div>
  )
}
