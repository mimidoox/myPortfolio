import React from 'react'

export default function Formation() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>

        <div className='flex flex-col space-y-3 shadow py-5 px-5'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-serif text-xl'>2éme année cycle d'ingenieur</h1>
                <p className='text-bblack font-mono'>Oct2021 - En cours</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                Ecole Marocaine des Sciences de l'Ingénieur Marrakech - EMSIM
                </p>
                <span className=' font-bold text-sm'>Ingénierie Informatique et Réseaux</span>
            </div>
        </div>

        
    </div>
  )
}
