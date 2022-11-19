import {SlUser} from 'react-icons/sl'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {
  
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = ():void => setShowMenu(!showMenu)
  
  return (
    <nav>
        <div className='w-full flex items-center px-2 justify-between'>
            <img src="./img/logo.png" alt="Logo" />
            <div className='flex gap-4 text-2xl text-gray-500 items-center'>
                <SlUser/>
                <AiOutlineMenu onClick={handleMenu}  className='border h-[30px] w-[30px] p-1 lg:hidden'/>
            </div>
            
        </div>
        <ul className={`lg:flex lg:justify-center lg:translate-x-0 bg-white absolute w-full z-50 transition-transform duration-500 ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}>
            <li><a className='block p-3' href="#">INICIO</a></li>
            <li><a className='block p-3 bg-primary  text-white' href="#">ORDENA AQUI</a></li>
            <li><a className='block p-3' href="#">PROMOCIONES</a></li>
            <li><a className='block p-3' href="#">LOCALES</a></li>
            <li><a className='block p-3' href="#">RESERVAS</a></li>
     
        </ul>
    </nav>
  )
  }