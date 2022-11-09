import { ActiveLink } from './ActiveLink';
import styles from './Navbar.module.css';


const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];

export const Navbar = () => { // Menu semi-dinamico
    return (

        <nav className={styles.nav}>
        {
            menuItems.map( ({text, href}) => (
                <ActiveLink key={href} text={text}  href={href} />
            ))
        }
        </nav>
    );
}
