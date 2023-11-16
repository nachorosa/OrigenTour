import "../css/nav.css"
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon,  } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'

const navigation = [
  { name: 'Inicio', href: '/', },
  { name: 'Destinos', href: '/destinos', },
  { name: 'Experiencias', href: '/experiencias', },
  { name: 'Nosotros', href: '/nosotros', },
  { name: 'Contacto', href: '/contacto', },
]

export default function Nav() {
  return (

      
    <Disclosure as="nav" className="bg-white sticky top-0	z-10">
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
                <a href="/"><img className="hidden md:block md:p-4 md:h-20 w-full lg:w-auto" src="/src/img/logo-desktop.svg" alt="ORIGEN TOUR"/></a>
                  <div className='sm:hidden flex w-full lg:w-auto'>
                  <a href="/"><img className="h-12" src="/src/img/logo-mobile-1.svg" alt="ORIGEN TOUR"/></a>
                  <a href="/"><img className="h-12 w-full" src="/src/img/logo-mobile-2.svg" alt="ORIGEN TOUR"/></a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex gap-20 md:gap-12 lg:gap-20">
                  {navigation.map((item) => ( 
                      // <a
                      //   key={item.name}
                      //   href={item.href}
                      //   className={item.current ? "text-blue-300" : "text-red-400"}
                      //   aria-current={item.current ? 'page' : undefined}
                      // >
                      //   {item.name}
                      // </a>
                    <NavLink key={item.name} to={item.href} className={({isActive}) => isActive ? "text-blue-300" : "text-red-400"}>{item.name} </NavLink>
                    ))}
                    

                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={item.current ? "" : ""}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    

  )
}
