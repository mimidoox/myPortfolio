import { useEffect } from 'react';
import './App.css';
import Competence from './Components/Competence';
import Experience from './Components/Experience';
import Formation from './Components/Formation';
import Home from './Components/Home';
import Projet from './Components/Projet';
import './index.css';
import { Link } from 'react-router-dom' 
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Certificat from './Components/Certificat';


function App() {

  const currentRoute = window.location.pathname;
  
 
  const navlink = () => {
    const navlink = document.querySelector('.navlink')
    navlink.classList.toggle('flex')
    navlink.classList.toggle('hidden')
  }

  
  const activeAcceuil= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat = document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.add('bg-main')
    formation.classList.remove('bg-main')
    competence.classList.remove('bg-main')
    experience.classList.remove('bg-main')
    projet.classList.remove('bg-main')
    certificat.classList.remove('bg-main')

    acceuilnav.classList.add('bg-main')
    formationnav.classList.remove('bg-main')
    competencenav.classList.remove('bg-main')
    experiencenav.classList.remove('bg-main')
    projetnav.classList.remove('bg-main')
    certificatnav.classList.remove('bg-main')


    navlink()
  }

  const activeFormation= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat= document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.remove('bg-main')
    formation.classList.add('bg-main')
    competence.classList.remove('bg-main')
    experience.classList.remove('bg-main')
    projet.classList.remove('bg-main')
    certificat.classList.remove('bg-main')

    acceuilnav.classList.remove('bg-main')
    formationnav.classList.add('bg-main')
    competencenav.classList.remove('bg-main')
    experiencenav.classList.remove('bg-main')
    projetnav.classList.remove('bg-main')
    certificatnav.classList.remove('bg-main')

    navlink()

  }

  const activeCompetence= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat = document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.remove('bg-main')
    formation.classList.remove('bg-main')
    competence.classList.add('bg-main')
    experience.classList.remove('bg-main')
    projet.classList.remove('bg-main')
    certificat.classList.remove('bg-main')

    acceuilnav.classList.remove('bg-main')
    formationnav.classList.remove('bg-main')
    competencenav.classList.add('bg-main')
    experiencenav.classList.remove('bg-main')
    projetnav.classList.remove('bg-main')
    certificatnav.classList.remove('bg-main')

    navlink()

  }

  const activeExperience= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat = document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.remove('bg-main')
    formation.classList.remove('bg-main')
    competence.classList.remove('bg-main')
    experience.classList.add('bg-main')
    projet.classList.remove('bg-main')
    certificat.classList.remove('bg-main')

    acceuilnav.classList.remove('bg-main')
    formationnav.classList.remove('bg-main')
    competencenav.classList.remove('bg-main')
    experiencenav.classList.add('bg-main')
    projetnav.classList.remove('bg-main')
    certificatnav.classList.remove('bg-main')


    navlink()

  }

  const activeProjet= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat = document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.remove('bg-main')
    formation.classList.remove('bg-main')
    competence.classList.remove('bg-main')
    experience.classList.remove('bg-main')
    projet.classList.add('bg-main')
    certificat.classList.remove('bg-main')

    acceuilnav.classList.remove('bg-main')
    formationnav.classList.remove('bg-main')
    competencenav.classList.remove('bg-main')
    experiencenav.classList.remove('bg-main')
    projetnav.classList.add('bg-main')
    certificatnav.classList.remove('bg-main')

    navlink()

  }
   const activeCertificat= () =>{
    const acceuil = document.querySelector('.acceuil')
    const formation = document.querySelector('.formation')
    const competence = document.querySelector('.competence')
    const experience = document.querySelector('.experience')
    const projet = document.querySelector('.projet')
    const certificat = document.querySelector('.certificat')

    const acceuilnav = document.querySelector('.acceuilnav')
    const formationnav = document.querySelector('.formationnav')
    const competencenav = document.querySelector('.competencenav')
    const experiencenav = document.querySelector('.experiencenav')
    const projetnav = document.querySelector('.projetnav')
    const certificatnav = document.querySelector('.certificatnav')

    acceuil.classList.remove('bg-main')
    formation.classList.remove('bg-main')
    competence.classList.remove('bg-main')
    experience.classList.remove('bg-main')
    projet.classList.remove('bg-main')
    certificat.classList.add('bg-main')

    acceuilnav.classList.remove('bg-main')
    formationnav.classList.remove('bg-main')
    competencenav.classList.remove('bg-main')
    experiencenav.classList.remove('bg-main')
    projetnav.classList.remove('bg-main')
    certificatnav.classList.add('bg-main')

    navlink()

  }
  useEffect(()=>{
    if(currentRoute == '/projet')
    {
      activeProjet()
    }
    else if(currentRoute == '/')
    {
      activeAcceuil()
    }
    else if(currentRoute == '/formation')
    {
      activeFormation()
    }
    else if(currentRoute == '/competence')
    {
      activeCompetence()
    }
    else if(currentRoute == '/projet')
    {
      activeProjet()
    }
    else if(currentRoute == '/experience')
    {
      activeExperience()
    }
    else if(currentRoute == '/certificat')
    {
      activeCertificat()
    }
   })
  return (
    <BrowserRouter>
        <div className="w-full flex flex-col items-center justify-center font-poppins">
            <div className="w-full py-14 flex space-y-3 lg:space-y-0  items-center flex-col lg:flex-row gradient  lg:space-x-5 justify-center">
                <img src='mimid.jpg' className='w-[200px] h-[200px] rounded-full'/>
                <div className="flex items-center lg:items-start flex-col space-y-4">
                    <h1 className="font-serif text-3xl md:text-5xl text-white">ARRAJ Mohamed</h1>
                    <p className='font-sans text-center lg:text-left text-white text-xl md:text-3xl'>
                      Futur Ingénieur en Informatique et Réseaux
                    </p>
                    <div className='grid md:grid-cols-2 justify-items-center lg:justify-items-start  w-max gap-2 md:gap-5 text-white'>

                      <div className='flex items-center space-x-2'>
                        <i className='bx bxl-gmail text-lg'></i>
                        <p className='text-sm'>arrajmohamed@gmail.com</p>
                      </div>

                      <div className='flex items-center space-x-2'>
                        <i className='bx bxs-phone text-lg' ></i>
                        <p className='text-sm'>06 26 30 36 86</p>
                      </div>

                      <div className='flex items-center space-x-2'>
                        <i className='bx bxl-github text-lg' ></i>
                        <a href='https://github.com/mimidoox' className='text-sm'>@mimidoox</a>
                      </div>



                    </div>
                </div>
            </div>
            <div className='lg:flex items-center uppercase text-sm bg-[#233abc] text-white rounded-b-xl hidden'>
              <Link to="/" onClick={activeAcceuil} className='py-3 px-4 hover:bg-main bg-main rounded-bl-xl cursor-pointer duration-100 transition ease-in-out acceuil'>
                  Home

              </Link>
              <Link to="/formation" onClick={activeFormation} className='py-3 px-4 hover:bg-main cursor-pointer duration-100 transition ease-in-out formation'>
                Qualifications 
              </Link>
              <Link to="/competence" onClick={activeCompetence} className='py-3 px-4 hover:bg-main cursor-pointer duration-100 transition ease-in-out competence'>
                Skills

              </Link>
              <Link to="/experience" onClick={activeExperience} className='py-3 px-4 hover:bg-main cursor-pointer duration-100 transition ease-in-out experience'>
                Professional Experiences

              </Link>
              <Link to="/projet" onClick={activeProjet} className='py-3 px-4 hover:bg-main cursor-pointer duration-100 transition ease-in-out projet'> 
                Projects
              </Link>
              <Link to="/certificat" onClick={activeCertificat} className='py-3 px-4 hover:bg-main rounded-br-xl cursor-pointer duration-100 transition ease-in-out certificat'> 
                Certificates
              </Link>
              
            </div>

            <i onClick={navlink} className='top-5 right-5 fixed lg:hidden bx bx-menu cursor-pointer text-2xl text-white bg-main rounded-full w-8 h-8 flex items-center justify-center'></i>
          
            <div className='navlink hidden fixed top-0  flex-col shadow bg-[#233abc] text-white w-full text-xs lg:hidden'>
            <i onClick={navlink} className='bx bx-menu-alt-right text-2xl absolute cursor-pointer top-2 right-5' ></i>
               <Link to="/" onClick={activeAcceuil} className='py-3 px-4 hover:bg-main bg-main  cursor-pointer duration-100 transition ease-in-out acceuilnav'>
                  Home 
                </Link>
                <Link to="/formation" onClick={activeFormation} className='py-3 px-4    cursor-pointer duration-100 transition ease-in-out formationnav'> 
                Qualifications
                </Link>
                <Link to="/competence" onClick={activeCompetence} className='py-3 px-4 hover:bg-main   cursor-pointer duration-100 transition ease-in-out competencenav'> 
                Skills
                </Link>
                <Link to="/experience" onClick={activeExperience} className='py-3 px-4 hover:bg-main   cursor-pointer duration-100 transition ease-in-out experiencenav'> 
                Professional Experiences
                </Link>
                <Link to="/projet" onClick={activeProjet} className='py-3 px-4 hover:bg-main   cursor-pointer duration-100 transition ease-in-out projetnav'> 
                Projects
                </Link>
                <Link to="/certificat" onClick={activeCertificat} className='py-3 px-4 hover:bg-main   cursor-pointer duration-100 transition ease-in-out certificatnav'> 
                Certificates
                </Link>
            </div>
        <Routes >
          <Route path="/" element={<Home/>}></Route>
          <Route path="/formation" element={<Formation/>}></Route>
          <Route path="/competence" element={<Competence/>}></Route>
          <Route path="/experience" element={<Experience/>}></Route>
          <Route path="/projet" element={<Projet/>}></Route>
          <Route path="/certificat" element={<Certificat/>}></Route>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
