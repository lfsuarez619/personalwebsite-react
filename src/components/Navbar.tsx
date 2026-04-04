import { NavLink } from "react-router";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/photography", label: "Photography" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Primary">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to === "/"}
                        className={({ isActive }) =>
                            isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}