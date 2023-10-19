import NavLink from "./NavLink"

interface INavLink {
    navLinks: {
        title: string,
        href: string
    }[];
}

const MenuOverlay = ({ navLinks }: INavLink) => {
    return (
        <ul className="flex flex-col pb-4 items-center">
            {navLinks.map(({ title, href }, index) => (
                <li key={index} className="py-4">
                    <NavLink title={title} href={href} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay