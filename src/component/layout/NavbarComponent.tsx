import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

interface NavListItemProps {
  href: string;
  children: React.ReactNode;
}

function NavListItem({ href, children }: NavListItemProps) {
  return (
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-1 font-medium"
    >
      <a
        href={href}
        className="flex items-center hover:text-blue-500 transition-colors text-gray-800 text-lg"
      >
        {children}
      </a>
    </Typography>
  );
}

function NavList() {
  return (
    <ul className="my-2 flex flex-col  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NavListItem href="#portfolio">Projects</NavListItem>
      <NavListItem href="#about">About</NavListItem>
      <NavListItem href="#contact">Contact</NavListItem>
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="sticky max-w-screen-2xl w-full top-0 z-50">
      <Navbar className="mx-auto max-w-screen-xl rounded-none shadow-2xl w-full border-none px-6 py-3 bg-white">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 text-xl cursor-pointer py-1.5 text-purple-500 font-bold hover:animate-pulse"
          >
            Paul Abakada
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <AiOutlineClose
                className="h-6 w-6 text-black font-bold"
                strokeWidth={2}
              />
            ) : (
              <HiOutlineMenu
                className="h-6 w-6 text-black font-bold"
                strokeWidth={2}
              />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>{openNav && <NavList />}</Collapse>
      </Navbar>
    </header>
  );
}
