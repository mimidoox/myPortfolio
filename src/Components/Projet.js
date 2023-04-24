import React from 'react'

export default function Projet() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-3 shadow py-5 px-5 '>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-serif text-xl'>Application Bureau de gestion de stock</h1>
            </div>
            <ul className="list-disc ml-5">
                    <li>
                        <p className="text-sm text-black">
                            <span className="font-bold">Via les technologies : </span> Java
                        </p>
                    </li>
               
               </ul>
        </div>



    </div>
  )
}
