import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { paths } from '../routes/paths';
import "../css/nav.css"

const hiddenLinks = ['destinoDetalle', 'admin'];

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="px-4 md:p-4">
            <div className="relative flex flex-row-reverse h-20">
              <div className="flex items-center md:hidden">
                <Disclosure.Button>
                  <span className="-inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center items-center md:justify-between md:px-8">
                <div className="flex items-center w-full lg:w-auto">
                  <div className="hidden md:block md:p-4 md:h-20 w-full lg:w-60">
                    <Link to="/">
                      <img src="/src/img/logo-desktop.svg" alt="ORIGEN TOUR" />
                    </Link>
                  </div>
                  <div className="sm:hidden flex w-full lg:w-auto">
                    <Link to="/">
                      <img className="h-12" src="/src/img/logo-mobile-1.svg" alt="ORIGEN TOUR" />
                    </Link>
                    <Link to="/">
                      <img className="h-12 w-full" src="/src/img/logo-mobile-2.svg" alt="ORIGEN TOUR" />
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-20 md:gap-12 lg:gap-20">
                    {Object.keys(paths).map((key) => (
                      !hiddenLinks.includes(key) ? (
                        <Link
                          key={key}
                          to={paths[key]}
                          className={
                            window.location.pathname === paths[key]
                              ? key === 'contacto'
                                ? 'navContactActive'
                                : 'navActive'
                              : key === 'contacto'
                                ? 'navContact'
                                : 'navInactive'
                          }
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Link>
                      ) : null
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {Object.keys(paths).map((key) => (
                !hiddenLinks.includes(key) ? (
                  <Link
                    key={key}
                    to={paths[key]}
                    className={
                      window.location.pathname === paths[key]
                        ? key === 'contacto'
                          ? 'navContactActive'
                          : 'navActive'
                        : key === 'contacto'
                          ? 'navContact'
                          : 'navInactive'
                    }
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                ) : null
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;