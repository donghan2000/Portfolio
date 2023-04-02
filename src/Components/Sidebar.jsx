import { useState } from "react";

export default function Sidebar() {
    return <>
        <NavBar />
    </>
}


function NavBar() {
    const sidebar = document.querySelector('.sidebar');
    const navItems = ["Home", "About Me", "Works", "Skills", "Contact Me"]; // replace with your own navItems
    const navIcons = ["home", "user-pin", "briefcase-alt-2", "terminal", "megaphone"]
    const toggle = document.querySelector('.sidebar .toggle');

    const [navOpen, setNavOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(0);

    const navToggle = () => {
        setNavOpen(!navOpen)
    };

    const handleNavItemClick = (index) => {
        setActiveNavItem(index);
    };

    return (
        <div className={navOpen ? 'sidebar open' : 'sidebar'}>
            <div className="logo">
                <img src="./img/logo.svg" />
                <h3>Dong Han</h3>
            </div>
            <nav>
                <div onClick={navToggle} className="toggle">
                    <i className='bx bx-chevrons-right'></i>
                    <span>Show less</span>
                </div>
                <div className="nav-title">Content</div>
                <ul>
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className={`nav-item ${activeNavItem === index ? "active" : ""}`}
                            onClick={() => handleNavItemClick(index)}
                        >
                            <i className={`bx bxs-${navIcons[index]}`}></i>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <div className="nav-title">Resume</div>
                <ul>
                    <li className="nav-item resume-back">
                        <i className='bx bxs-download' ></i>
                        <span>Download Resume</span>
                        {/* <i className='bx bxs-download' ></i> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
}