import {MdHomeFilled} from 'react-icons/md';
import {CiForkAndKnife} from 'react-icons/ci';
import {AiOutlineStar, AiOutlineShoppingCart} from 'react-icons/ai';
export const FooterMenu = () => {
  return (
    <footer className='fixed bottom-0 w-full px-4 py-2 drop-shadow-2xl bg-white'>
        <ul className="flex justify-between">
            <li>
                <a className='flex flex-col items-center' href="#"><MdHomeFilled className='text-[30px]'/> Inicio</a>
            </li>
            <li>
                <a className='flex flex-col items-center' href="#"><CiForkAndKnife className='text-[30px]'/> Carta</a>
            </li>   
            <li> 
                <a className='flex flex-col items-center' href="#"><AiOutlineStar className='text-[30px]'/> Promos</a>
            </li>
            <li>
                <a className='flex flex-col items-center' href="#"><AiOutlineShoppingCart className='text-[30px]'/> Carrito</a>
            </li>
            
        </ul>
    </footer>
  )
}