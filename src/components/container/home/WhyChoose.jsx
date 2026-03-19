import React from 'react'
import Container from '@/components/common/Container'
import ContactButton from '@/components/Ui/ContactButton'
import { Check } from 'lucide-react'
import FullContainer from '@/components/common/FullContainer'

const advantages = [
  'Keep your fireplace clean and safe',
  'Boost heating efficiency.',
  '5 Star Rated On Google',
  'Ensure safe operation of gas and wood fireplaces.',
  'Save on energy with optimal airflow.',
]

const backgroundImage =
  '/st-images/whychoose.png'

export default function WhyChoose() {
  return (
    <FullContainer className="relative w-full min-h-[520px] flex-col justify-center lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 object-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content: white card on the left */}
      <Container className="relative z-10">
        <div className="max-w-xl">
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 uppercase tracking-tight">
              Why Choose Us?
            </h2>
            <p className="text-gray-900 text-lg mt-1">Key Advantages</p>

            <ul className="mt-6 space-y-4">
              {advantages.map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white">
                    <Check className="h-4 w-4 text-primary stroke-[2.5]" />
                  </span>
                  <span className="text-gray-900 text-base">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ContactButton variant="secondary-large-dark" />
              <ContactButton variant="primary-large-light" />
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}
