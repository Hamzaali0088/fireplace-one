import React from 'react'
import FullContainer from '@/components/common/FullContainer'
import Container from '@/components/common/Container'
import { ShieldCheck } from 'lucide-react'
import ContactButton from '@/components/Ui/ContactButton'
export default function Plan() {
    return (
        <FullContainer>
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-[3fr_3.5fr_3fr] items-center justify-between gap-6'>
                    {/* Left: Why Choose Us - Key Advantages */}
                    <div className='bg-white text-gray-900 p-4 py-10 rounded-[20px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] flex flex-col'>
                        <h2 className='text-2xl lg:text-3xl font-extrabold uppercase w-full text-center'>Why Choose Us?</h2>
                        <p className='text-gray-900 text-xl lg:text-[28px] font-bold w-full text-center'>Key Advantages</p>
                        <div className='flex flex-col items-start gap-1.5 leading-5 text-[17px] mt-4 flex-1'>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Keep your fireplace clean and safe</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Boost heating efficiency.</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>5 Star Rated On Google</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p className=''>Ensure safe operation of gas and wood fireplaces.</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Save on energy with optimal airflow.</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center mt-6'>
                            <ContactButton variant='secondary-large-light' className='mt-4' />
                        </div>
                    </div>
                    {/* Middle: Monthly Promotion */}
                    <div className='bg-[#1a1515] text-white p-5 rounded-[20px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] flex flex-col'>
                        <h2 className='text-2xl lg:text-4xl py-3 font- bg-primary text-center rounded-t-xl capitalize'>Monthly Promotion</h2>
                        <div className='text-white text-2xl lg:text-3xl font-bold text-center py-4'>Full Fireplace Cleaning & System Sanitization</div>
                        <div className='flex flex-col items-start gap-1.5 leading-5 text-[17px] mt-4 flex-1'>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Per Fireplace</p>
                            </div>
                                    <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Complete Fireplace Cleaning</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Soot & Debris Removal</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Smoke Flow Optimization</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Flue & Damper Inspection</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Component Safety Check</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <ContactButton variant='primary-large-light' className='mt-4' />
                        </div>
                    </div>
                    {/* Right: Full Fireplace Inspection */}
                    <div className='bg-white text-gray-900 p-3 py-10 rounded-[20px] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] flex flex-col'>
                        <h2 className='text-2xl lg:text-[28px] font-bold w-full text-center'>Full Fireplace Inspection</h2>
                        <div className='flex flex-col items-start gap-1.5 leading-5 text-[17px] mt-4 flex-1 tracking-tight'>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Visual Fireplace Inspection</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                        <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Smoke Draft Efficiency Check</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Blockage Detection</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Soot & Debris Buildup Analysis</p>
                            </div>
                                    <div className='flex flex-row items-center gap-0'>
                                <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Component Condition Check</p>
                            </div>
                            <div className='flex flex-row items-center gap-0'>
                                        <ShieldCheck className='w-7 h-7 text-primary shrink-0' strokeWidth={1.8} />
                                <p>Firebox & Damper Assessment</p>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <ContactButton variant='secondary-large-light' className='mt-4' />
                        </div>
                    </div>
                </div>
            </Container>
        </FullContainer>
    )
}
