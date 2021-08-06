
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import {server} from "../config";

const Nav = ({ author }) => {
    console.log(author)
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.divineImg}>
                <img src="/divine_dube.jpeg" alt="Divine Dube" />
            </div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='#'>About</Link>
                </li>
                <li>
                    <Link href='#'>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

Nav.getInitialProps = async (ctx) => {
    const res = await fetch(`${server}/author`)
    const divine = await res.json()
    return {
        props: {
            divine
        }
    }
}

export default Nav