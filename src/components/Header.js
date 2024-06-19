import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../img/LOGOHOME.svg";


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  useEffect(()=>{
     window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive (true) :setIsActive (false);
     })
  })
  return (
  <header className={`${isActive? 'bg-white py-2 shadow-md' : 'bg-red-500 py-3'} fixed w-full z-10 transition-all`}>
    <div className="container mx-auto flex items-center justify-between h-full">
      <Link to={'/'}> 
    <div>
      <img className=" w-[30px]" src={Logo} alt=""/>
    </div>
    </Link>
    <div className=" ml-2 font-semibold drop-shadow-custom2">
      Maquinaria Agrícola
    </div>
    <div onClick={() => setIsOpen(!isOpen)} className ="cursor-pointer flex relative items-center"> 
      <TbCategory  className='text-2x1'/> <span className=" ml-2 font-semibold drop-shadow-custom2 ">Productos</span>
    </div>
   </div> 
  </header>
  )
};

export default Header;