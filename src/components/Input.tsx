import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="block mt-1 w-full px-4 py-3 rounded bg-white border focus:border-[#5b78ff] outline-none"
    />
  )
}
