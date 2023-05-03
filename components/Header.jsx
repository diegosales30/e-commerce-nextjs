import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShowu] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
            <img src="/logo.svg" alt="logo" className="w-[40px] md:w-[60px]"/>
          
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu}/>
      </Wrapper>
    </header>
  );
};

export default Header;
