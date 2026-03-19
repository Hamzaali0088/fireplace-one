import React from 'react'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function ContactButton({ className = '', variant = 'primary-small-light' }) {
  const base = 'rounded-full cursor-pointer flex items-center justify-center gap-2 w-fit transition-all duration-200 cursor-pointer'

  switch (variant) {
    case 'secondary-large-light':
      return (
        <div className={`${base} min-w-[150px] group bg-primary text-white px-10 py-4 text-base h-[48px] font-bold hover:opacity-90 hover:shadow-lg active:opacity-95 ${className}`.trim()}>
          <span>Call Us Today</span> <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-all duration-200' />
        </div>
      )
    case 'secondary-large-dark':
      return (
        <div className={`${base} group min-w-[250px]  bg-gray-900 text-white px-5 py-2.5 text-base h-[48px] font-bold hover:bg-gray-800 active:bg-gray-700 ${className}`.trim()}>
          <span>Call Us Today</span> <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-all duration-200' />
        </div>
      )
    case 'primary-small-light':
      return (
        <div className={`${base} min-w-[150px] bg-primary text-sm md:text-base text-white px-3 py-1 md:px-4.5 md:py-2.5 h-[48px] hover:opacity-90 active:opacity-95 ${className}`.trim()}>
          <PhoneCall /> <span>(888)-249-0566</span>
        </div>
      )
    case 'primary-large-light':
      return (
        <div className={`${base} min-w-[250px] bg-primary text-white px-5 py-2.5 text-[22px] font-medium hover:opacity-90 active:opacity-95 h-[48px] ${className}`.trim()}>
          <PhoneCall /> <span>(888)-249-0566</span>
        </div>
      )
    default:
      return (
        <div className={`${base} min-w-[150px] bg-primary text-white px-4.5 py-2.5 hover:opacity-90 active:opacity-95 ${className}`.trim()}>
          <PhoneCall /> <span>(888)-249-0566</span>
        </div>
      )
  }
}
