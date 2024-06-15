import Link from "next/link";
import { FaXTwitter, FaInstagram, FaDiscord, FaEnvelope } from "react-icons/fa6";

const logoX = <FaXTwitter/>
const logoIg = <FaInstagram/>
const logoDiscord = <FaDiscord/>
const logoEmail = <FaEnvelope/>

const social = [
    { name: 'Twitter', href: 'https://x.com/amplopduit/', logo: logoX},
    { name: 'Instagram', href: 'https://www.instagram.com/amplopduit/', logo: logoIg},
    { name: 'Discord', href: 'https://discord.gg/xxxx', logo: logoDiscord},
    { name: 'Email', href: 'mailto:timamplopduit@gmail.com', logo: logoEmail},
]

export default function Social(){
    return (
        <ul id="social" className='flex flex-row relative'>
            {social.map((item) => (
            <li 
                key={item.name}
                style={{width:('32px')}}
                className="p-1 my-2 mr-16 rounded-xl"
            >
                <Link href={item.href} target="_blank" className='hover:text-gray-400'>
                    {item.logo}
                </Link>
            </li>
        ))}  
        </ul>
    )
}