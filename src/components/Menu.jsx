import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Product', href: '/product', current: false },
    { name: 'About Us', href: '/about', current: false },
    { name: 'Teams', href: '/teams', current: false },
]

export default function Menu({className}){

    const pathname = usePathname();

    return (
        <ul className={className}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                key={item.name}
                href={item.href}
                className={
                classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-lg font-medium',
                (pathname === item.href ? "active" : "")
                )}
                aria-current={item.current ? 'page' : undefined}
                style={{cursor:'pointer', marginRight:'2px'}}
              >
                  {item.name}
                </Link>
              </li> 
            ))}
        </ul>
    )
}