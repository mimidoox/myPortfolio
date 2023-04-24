import React from 'react'

export default function Competence() {
  return (
    <div className='grid md:grid-cols-4 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-5 shadow py-5 px-5  col-span-2'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Cblue font-serif text-xl'>Skills</h1>
            </div>
            <div className='grid grid-cols-3 gap-y-5 md:gap-y-0 justify-items-center md:justify-items-start md:grid-cols-7 md:space-x-5'>

                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/python.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Python</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/java.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Java</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/php.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Php</span>
                </div>

                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/c-.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>C++</span>
                    
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/react.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>React</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/oracle.png' className='w-13 h-10'/>
                    <span className='text-sm font-semibold'>Oracle</span>
                </div>
                <div className='flex flex-col items-center space-y-2'>
                    <img src='prg/spring.png' className='w-10 h-10'/>
                    <span className='text-sm font-semibold'>Spring Boot</span>
                </div>
            </div>
        </div>

    
    </div>
  )
}
