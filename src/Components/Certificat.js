import React from 'react'

export default function Certificat() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>



    <div className='flex flex-col space-y-3 shadow py-5 px-5 '>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-Cblue font-serif text-xl'>DevOps, Cloud, and Agile Foundations</h1>
        </div>
            <p className=' font-bold'>
            <span className='text-Cgreen'>Coursera</span> - IBM Skills Network
            </p>
    </div>

    <div className='flex flex-col space-y-3 shadow py-5 px-5 '>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-Cblue font-serif text-xl'>Data Collection and Processing with Python</h1>
        </div>
            <p className='font-semibold'>
            <span className='text-Cgreen'>Coursera</span> - Université du Michigan
            </p>
    </div>


    <div className='fflex flex-col space-y-3 shadow py-5 px-5 '>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-Cblue font-serif text-xl'>Python : Fonctions, Fichiers, et Dictionnaires</h1>
        </div>
            <p className=' font-bold'>
            <span className='text-Cgreen'>Coursera</span> - Université du Michigan
            </p>
    </div>
    <div className='flex flex-col space-y-3 shadow py-5 px-5 '>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-Cblue font-serif text-xl'>Developing Back-End Apps with Node.js and Express</h1>
        </div>
            <p className='font-bold'>
            <span className='text-Cgreen'>Coursera</span> - IBM Skills Network
            </p>
    </div>

    <div className='flex flex-col space-y-3 shadow py-5 px-5 '>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <h1 className='text-Cblue font-serif text-xl'>Front-End Web UI Frameworks and Tools: Bootstrap 4</h1>
        </div>
            <p className=' font-bold'>
            <span className='text-Cgreen'>Coursera</span> -  Université des sciences et technologies de Hong Kong
            </p>
    </div>



</div>
  )
}
