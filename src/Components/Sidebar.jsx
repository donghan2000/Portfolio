import { useState } from "react";
import { Link } from 'react-scroll'

export default function Sidebar() {
    return <>
        <NavBar />
    </>
}


function NavBar() {
    // const sidebar = document.querySelector('.sidebar');
    // const toggle = document.querySelector('.sidebar .toggle');
    const navItems = ["Home", "Portfolio", "My Story", "Skills", "Contact Me"]; // replace with your own navItems
    const navIcons = ["home", "briefcase-alt-2", "user-pin", "terminal", "megaphone"]
    const navTo = ["hero", "portfolio", "story", "skills", "contact"]




    const [navOpen, setNavOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(0);

    const navToggle = () => {
        setNavOpen(!navOpen)
    };

    const handleNavItemClick = (index) => {
        setActiveNavItem(index);
        setNavOpen(false)
    };

    const handleChange = (e) => {
        e.preventDefault();
        window.open("http://donghan.co/Resume.pdf", '_blank');
    };



    return (
        <div className={navOpen ? 'sidebar open' : 'sidebar'}>
            <div className="logo">
                <img src="./img/logo.svg" alt="logo" />
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

                        <Link to={`${navTo[index]}`} spy={true} smooth={true} offset={-10} duration={500} >
                            <li
                                key={index}
                                className={`nav-item ${activeNavItem === index ? "active" : ""}`}
                                onClick={() => handleNavItemClick(index)}
                            >

                                <i className={`bx bxs-${navIcons[index]}`}></i>
                                <span >{item}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
                <div className="nav-title">Resume</div>
                <ul>
                    <li onClick={handleChange} className="nav-item resume-back">
                        <i className='bx bxs-download' ></i>
                        <span className="second-set-nav" >Download Resume</span>
                        {/* <i className='bx bxs-download' ></i> */}
                    </li>
                </ul>
            </nav>
        </div>
    );
}