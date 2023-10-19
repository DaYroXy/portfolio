import Link from "next/link"

interface INavLink {
    href: string,
    title: string
}

const NavLink = ({ href, title }: INavLink) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-xl rounded md:p-0 hover:text-white transition-all">{title}</Link>
    )
}

export default NavLink