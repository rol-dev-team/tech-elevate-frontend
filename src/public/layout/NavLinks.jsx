import React from 'react';

const NavLinks = ({ mobile, setIsOpen }) => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Diploma', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Logic for different styles based on view
  const listStyles = mobile 
    ? "flex flex-col gap-4 px-2 font-bold text-gray-700" 
    : "hidden lg:flex items-center gap-6 xl:gap-10 font-bold text-gray-700 text-[15px] xl:text-[17px]";

  const itemStyles = mobile 
    ? "block py-2 hover:text-[#01a79d]" 
    : "hover:text-[#01a79d] transition-all duration-300 relative group";

  return (
    <ul className={listStyles}>
      {links.map((link) => (
        <li key={link.name}>
          <a 
            href={link.href} 
            className={itemStyles}
            onClick={mobile ? () => setIsOpen(false) : undefined}
          >
            {link.name}
            {!mobile && (
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#01a79d] transition-all duration-300 group-hover:w-full"></span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;