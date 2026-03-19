'use client'

import React, { useState } from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'

const inputClass =
  'w-full rounded-lg border border-gray-500 bg-[#212020] px-4 py-3 text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 transition-colors'

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <FullContainer className="bg-white ">
      <Container className="">
        <div className="">
          <div className="bg-[#212020] rounded-xl shadow-xl p-6 lg:p-16">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                10% Off Total Price For Online Booking
                <br />
                Ask For A Quote Here
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  className={inputClass}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email (abc@gmail.com)"
                  className={inputClass}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="(123)-456-7890"
                  className={inputClass}
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP CODE"
                  className={inputClass}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary text-white font-bold uppercase py-3.5 px-4 hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>

            {submitted && (
              <p className="text-center text-green-400 mt-4 text-sm">
                Thank you! We&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}
