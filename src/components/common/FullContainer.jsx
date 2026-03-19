import React from 'react'

export default function FullContainer({children, className  }) {
  return (
    <div className={`w-full flex flex-col items-center ${className}`}>
      {children}
    </div>
  )
}
