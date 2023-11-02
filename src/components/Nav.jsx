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
    <Disclosure as="nav" className="bg-white w-screen ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between flex-row-reverse">
              <div className="inset-y-0 left-0 flex items-center sm:hidden ">
                <Disclosure.Button className="relative inline-flex items-center justify-between rounded-md p-2 text-orange-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className=" -inset-0.5" />
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto  hidden sm:block" src="/src/img/logo-desktop.svg" alt="ORIGEN TOUR"/>
                  <div className='sm:hidden flex'>
                    <img className="h-8" src="/src/img/logo-mobile-1.svg" alt="ORIGEN TOUR"/>
                    <img className="h-8" src="/src/img/logo-mobile-2.svg" alt="ORIGEN TOUR"/>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-orange-500 underline' : 'text-orange-800 hover:text-orange-500 hover:underline',
                          'rounded-md px-3 py-2 text-sm font-medium',
                          item.name === 'Contacto' ? 'bg-orange-500 text-white hover:text-white' : ''
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
                    item.current ? 'text-orange-500' : 'text-orange-800 hover:text-orange-500',
                    'block rounded-md px-3 py-2 text-base font-medium',
                    item.name === 'Contacto' ? 'bg-orange-500 text-white text-center hover:text-white' : ''
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
