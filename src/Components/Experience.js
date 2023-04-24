import React from 'react'

export default function Experience() {
  return (
    <div className='grid md:grid-cols-2 gap-10 py-10 px-[10px] lg:px-[180px] 2xl:px-[300px] w-full '>
<div className='flex flex-col space-y-3 shadow py-5 px-5 '>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-Cblue font-serif text-xl'>Projet de stage d'initiation</h1>
                <p className='text-blue font-mono'> Sep.2022 à Oct.2022</p>
            </div>
            <div className='space-y-2 text-md'>
                <p>
                <span className='text-Cgreen font-bold'>Entreprise : </span>Eysi
                </p>
               <p>Création d'un site web pour la gestion d'une maison d'hotes.</p>
               <ul className="list-disc ml-5 ">
                    <li>
                        <p className="text-sm text-red">
                            <span className=" font-bold">Via les technologies : </span> PHP,HTML5,CSS,Bootstrap
                        </p>
                    </li>
            
               </ul>
            </div>
        </div>

        
        
    </div>
  )
}
