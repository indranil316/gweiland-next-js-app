import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faUser, faMagnifyingGlass, faCartArrowDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { getNavLinks } from '@/libs/api-requests';

const Navbar = async () => {
  const navLinks = JSON.parse(await getNavLinks());

  return (
    <nav className="bg-black px-5 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 md:space-x-8 rtl:space-x-reverse">
        <button data-collapse-toggle="navbar-dropdown" type="button" className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
        <div className="hidden md:flex items-center space-x-4 md:w-auto" id="navbar-dropdown">
          {navLinks.map((link : NavLink) => (
            <div key={link.linkName} className="group inline-block relative">
              {link.hasSubCategory ? (
                <div className="group inline-block relative">
                  <button className="text-white focus:outline-none">
                    <FontAwesomeIcon className="mr-2" icon={faChevronDown} />
                    {link.linkName}
                  </button>
                  <div className="hidden group-hover:block absolute bg-black text-white mt-2 space-y-2">
                    {link.subCategories?.map((subLink, subIndex) => (
                      <Link key={subIndex} href={subLink.url} passHref>
                        {subLink.linkName}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={link.url} className='text-white' passHref>
                  {link.linkName}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <a href="#" className="text-yellow text-2xl font-bold text-3xl md:text-5xl">
        brava
      </a>

      <div className="hidden md:flex items-center space-x-4">
        <Link href="/facebook" className="text-white">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="/twitter" className="text-white">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link href="/instagram" className="text-white">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="/user" className="text-white">
          <FontAwesomeIcon icon={faUser} />
        </Link>
        <Link href="/search" className="text-white">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link>
        <Link href="/cart" className="text-white">
          <FontAwesomeIcon icon={faCartArrowDown} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
