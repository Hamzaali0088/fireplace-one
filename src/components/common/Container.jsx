import React from 'react'

export default function Container({children, className}) {
  return (
    <div className={` w-full max-w-[1110px] py-10 px-5 lg:py-16 lg:px-10 ${className}`}>{children}</div>
  )
}
