import "../css/nav.css"
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon,  } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '#', current: true },
  { name: 'Destinos', href: '#', current: false },
  { name: 'Experiencias', href: '#', current: false },
  { name: 'Nosotros', href: '#', current: false },
  { name: 'Contacto', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (

      
    <Disclosure as="nav" className="clase1">
      {({ open }) => (
        <>
          <div className="clase2">
            <div className="clase3">
              <div className="clase4 ">
                <Disclosure.Button className="clase5">
                  <span className=" -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="clase6">
                <div className="clase7">
                <img className="clase8" src="/src/img/logo-desktop.svg" alt="ORIGEN TOUR"/> 
                  <div className='sm:hidden flex'>
                    <img className="h-10" src="/src/img/logo-mobile-1.svg" alt="ORIGEN TOUR"/>
                    <img className="h-10" src="/src/img/logo-mobile-2.svg" alt="ORIGEN TOUR"/>
                  </div>
                </div>
                <div className="clase9">
                  <div className="clase10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'clase20' : '', 'clase22',
                          item.name === 'Contacto' ? 'clase23' : ''
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
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
                  className={classNames(
                    item.current ? 'clase24' : 'clase24',
                    'clase26',
                    item.name === 'Contacto' ? 'clase27' : ''
                  )}
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
