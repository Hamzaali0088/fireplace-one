import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import React from 'react'
import Image from 'next/image'
import img1 from '../../../../public/st-images/about.png'

export default function About() {
    return (
        <FullContainer>
            <Container className="mt-20 md:mt-0">
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-center text-gray-900'>
                        About Chimney Services
                    </h1>
                    <p className='text-gray-700 text-center py-4 max-w-[900px]'>
                        With over 18 years of experience, Chimney Sweep Services delivers professional chimney
                        sweeping, inspections, and repairs backed by certified technicians and industry-leading
                        safety standards.
                    </p>

                    {/* Desktop / tablet layout */}
                    <div className='hidden md:flex flex-row items-stretch justify-between max-w-[960px] w-full mt-8 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)] bg-white'>
                        <div className='bg-primary text-white px-8 py-8 lg:py-10 flex flex-col justify-center gap-3 lg:gap-4 max-w-[60%]'>
                            <h2 className='text-xl lg:text-2xl font-semibold'>
                                Trusted, Local Chimney Experts
                            </h2>
                            <p className='text-sm lg:text-base leading-relaxed'>
                                Our team is fully licensed and insured, combining hands-on expertise with
                                detailed safety checks so your fireplace, flue, and venting systems work
                                efficiently all year long.
                            </p>
                            <p className='text-sm lg:text-base leading-relaxed opacity-90'>
                                From routine sweeps to complex repairs, we focus on clear communication,
                                honest recommendations, and workmanship you can rely on.
                            </p>
                        </div>
                        <div className=' w-[340px] lg:w-[380px]'>

                        <Image
                            src={img1}
                            alt="Technician providing chimney services"
                            width={1500}
                            height={1500}
                            className=' w-full h-full object-cover'
                        />
                        </div>

                    </div>

                    {/* Mobile layout */}
                    <div className='md:hidden relative w-full max-w-[420px] mt-4 rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.18)]'>
                        <Image
                            src={img1}
                            alt="Technician providing chimney services"
                            width={1500}
                            height={1500}
                            className='w-full h-[360px] object-cover'
                        />
                        <div className='absolute inset-0 bg-black/50' />
                        <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white'>
                        <h2 className='text-xl lg:text-2xl font-semibold'>
                                Trusted, Local Chimney Experts
                            </h2>
                            <p className='text-sm lg:text-base leading-relaxed'>
                                Our team is fully licensed and insured, combining hands-on expertise with
                                detailed safety checks so your fireplace, flue, and venting systems work
                                efficiently all year long.
                            </p>
                            <p className='text-sm lg:text-base leading-relaxed opacity-90'>
                                From routine sweeps to complex repairs, we focus on clear communication,
                                honest recommendations, and workmanship you can rely on.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}
