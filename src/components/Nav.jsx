import "../css/nav.css"
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon,  } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inicio', href: '/', current: false },
  { name: 'Destinos', href: '/destinos', current: false },
  { name: 'Experiencias', href: '/experiencias', current: false },
  { name: 'Nosotros', href: '/nosotros', current: false },
  { name: 'Contacto', href: '/contacto', current: false },
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
                    <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="clase6">
                <div className="clase7 w-full lg:w-auto">
                <a href="/"><img className="clase8 w-full lg:w-auto" src="/src/img/logo-desktop.svg" alt="ORIGEN TOUR"/></a>
                  <div className='sm:hidden flex w-full lg:w-auto'>
                  <a href="/"><img className="h-12" src="/src/img/logo-mobile-1.svg" alt="ORIGEN TOUR"/></a>
                  <a href="/"><img className="h-12 w-full" src="/src/img/logo-mobile-2.svg" alt="ORIGEN TOUR"/></a>
                  </div>
                </div>
                <div className="clase9">
                  <div className="clase10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'clase20' : 'clase21', 'clase22',
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
                    item.current ? 'clase24' : '',
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
