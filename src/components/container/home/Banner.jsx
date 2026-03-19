import Container from '@/components/common/Container'
import FullContainer from '@/components/common/FullContainer'
import React from 'react'
import Image from 'next/image'
import ContactButton from '@/components/Ui/ContactButton'
import { Check } from 'lucide-react'

const leftFeatures = [
    'Chimney Sweep & Repair',
    'Same Day Service',
    '5 Star Rated On Google',
    'Licensed And Insured',
    '10+ Years Of Experience',
]

export default function Banner() {
    return (
        <FullContainer className="relative mb-90 md:mb-0">
            <Image src="/st-images/homebanner.png" width={1600} height={1600} className='absolute top-0 left-0 h-[560px] w-full object-cover' alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0' />
            <Container className="relative z-10 h-[560px] py-8 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className='text-white max-w-xl'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
                        <span className='text-4xl md:text-5xl lg:text-6xl'>#1</span>{' '}
                        Chimney Sweep Service In Your Area
                    </h1>
                    <ul className='mt-6 space-y-3'>
                        {leftFeatures.map((item, i) => (
                            <li key={i} className='flex items-center gap-3'>
                                <Check className='w-5 h-5 text-primary shrink-0' strokeWidth={2.5} />
                                <span className='text-base md:text-lg'>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className='mt-8'>
                        <ContactButton variant="primary-large-light" />
                    </div>
                </div>
                <div className='shrink-0 w-full max-w-[390px]'>
                    <ContactForm />
                </div>
            </Container>
        </FullContainer>
    )
}

const ContactForm = () => {
    return (
        <div className="w-full max-w-[390px] ">
            <div class="bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div class="bg-gradient-to-l to-[#1a0203] from-[#850001] px-8 py-2 text-center rounded-t-2xl">
                    <h1 class="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Claim Chimney <br /> Sweep  Offer Today
                    </h1>
                </div>
                <p class="mt-1 text-xl text-gray-800 font-medium w-full text-center">
                    Offer ends in just a few hours!
                </p>
                <div class="px-2 py-3 bg-white">
                    <form class="space-y-3">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    class="block w-full rounded-xl placeholder:text-gray-400 focus:outline-none border border-gary-100 border-gray-300 focus:border-primary text-base py-3 px-4"
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    class="block w-full rounded-xl placeholder:text-gray-400 focus:outline-none border border-gary-100 border-gray-300 focus:border-primary text-base py-3 px-4"
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                class="block w-full rounded-xl placeholder:text-gray-400 focus:outline-none border border-gary-100 border-gray-300 focus:border-primary text-base py-3 px-4"
                                placeholder="(123) 456-7890"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="block w-full rounded-xl placeholder:text-gray-400 focus:outline-none border border-gary-100 border-gray-300 focus:border-primary text-base py-3 px-4"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                class="block w-full rounded-xl  placeholder:text-gray-400 max-h-[80px] resize-none focus:outline-none border border-gary-100 border-gray-300 focus:border-primary text-base py-3 px-4"
                                placeholder="How can we help you today?"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full bg-primary hover:bg-primary/80 cursor-pointer text-white font-bold py-4 px-6 rounded-full text-lg  transform transition focus:ring-2 focus:ring-primary "
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}