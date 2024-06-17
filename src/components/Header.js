import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import Logo from "../img/LOGOHOME.svg"

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
  <header className="bg-red-500">
    <div className="container mx-auto flex items-center justify-between h-full">
      <Link to={'/'}> 
    <div>
      <img className="w-[30px]" src={Logo} alt=""/>
    </div>
    </Link>
    <div onClick={() => setIsOpen(!isOpen)} className ="cursor-pointer flex relative max-w-[50px]"> 
      <TbCategory  className='text-2x1'/>
    </div>
   </div> 
  </header>
  )
};

export default Header;