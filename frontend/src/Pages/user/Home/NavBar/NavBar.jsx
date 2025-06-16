import React from 'react';
import "./NavBar.scss";
import { NavLink } from 'react-router-dom';
import grec from "../../../../assets/Images/grec.png"
import { motion } from "framer-motion";
import { LuHouse, LuCamera, LuSettings, LuActivity, LuShoppingCart } from "react-icons/lu";
import ThemeToggle from "../../../../ui/switchMode/themeToggle";


const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
            setIsScrolled(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    const menuItems = [
    { path: "", label: "Accueil", icon: LuHouse },
    { path: "live", label: "Live", icon: LuCamera },
    { path: "#", label: "Solution", icon: LuSettings },
    { path: "prediction", label: "Prédire", icon: LuActivity },
    { path: "#", label: "Espace achat", icon: LuShoppingCart },
];
const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.15, duration: 0.5, ease: "easeOut" },
    }),
};
    return (
        <nav className={`nav-container ${isScrolled ? 'blurred' : ''}`}>
            {isScrolled && (
                <>
                    <motion.img variants={menuItemVariants} src={grec} alt="logo" className="grec-logo left" />
                    <motion.img variants={menuItemVariants} src={grec} alt="logo" className="grec-logo right" />
                </>
            )}
            <div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {menuItems.map((item, index) => {
                        const   Icon = item.icon;
                        return (
                            <li key={index}>
                                <NavLink to={`/edden-app/${item.path}`} className="nav-link" end>
                                    {Icon && <Icon className="nav-icon" />}
                                    {item.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>


            </div>
        </nav>

    )

}
export default NavBar;