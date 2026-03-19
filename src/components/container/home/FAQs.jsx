'use client'

import React, { useState } from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import { ChevronDown } from 'lucide-react'

const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const faqs = [
  {
    question: 'How to get consultation ?',
    answer:
      'You can request a consultation by calling us at (888)-249-0566 or by filling out the quote form on this page. Our team will respond within 24 hours to schedule a convenient time.',
  },
  {
    question: 'How Long Working Time ?',
    answer:
      'Most chimney cleaning and inspection appointments take 1–2 hours. Repairs and larger projects vary; we provide time estimates when you book.',
  },
  {
    question: 'Where The Office Work ?',
    answer:
      'We serve the greater area with mobile chimney services. Our team comes to your home or business—no need to visit an office. Contact us for service areas.',
  },
  {
    question: 'Office Hour Information ?',
    answer:
      'We are available Monday–Friday 8am–6pm and Saturday 9am–4pm. Emergency and after-hours support may be available; call for details.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <FullContainer className="bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            FAQs
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mt-4 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden border border-gray-200/80"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50/80 transition-colors"
                >
                  <span className="font-bold text-gray-800 text-base lg:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-0 text-gray-600 text-sm lg:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </FullContainer>
  )
}
