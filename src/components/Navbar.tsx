import { NavLink, useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation();

    const mediaIsActive =
        location.pathname === "/photography" ||
        location.pathname === "/videography";

    return (
        <header className="site-header">
            <nav className="site-nav" aria-label="Primary">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                    }
                >
                    About
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                    }
                >
                    Projects
                </NavLink>

                <div className="site-nav__dropdown">
                    <button
                        type="button"
                        className={
                            mediaIsActive
                                ? "site-nav__link site-nav__toggle site-nav__link--active"
                                : "site-nav__link site-nav__toggle"
                        }
                    >
                        Media
                    </button>

                    <div className="site-nav__submenu">
                        <NavLink
                            to="/photography"
                            className={({ isActive }) =>
                                isActive
                                    ? "site-nav__submenu-link site-nav__submenu-link--active"
                                    : "site-nav__submenu-link"
                            }
                        >
                            Photography
                        </NavLink>

                        <NavLink
                            to="/videography"
                            className={({ isActive }) =>
                                isActive
                                    ? "site-nav__submenu-link site-nav__submenu-link--active"
                                    : "site-nav__submenu-link"
                            }
                        >
                            Videography
                        </NavLink>
                    </div>
                </div>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "site-nav__link site-nav__link--active" : "site-nav__link"
                    }
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}