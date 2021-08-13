
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import {server} from "../config";
import { useRouter } from "next/router";

const Nav = ({ author }) => {
    console.log(author)
    const router = useRouter()
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.divineImg}>
                <img src="/divine_dube.jpeg" alt="Divine Dube" />
            </div>
            <p className={navStyles.authorName}> Divine Dube  </p>
            <p className={navStyles.boldDesc}>Documenting my journey in Mobile Development, mainly Flutter, iOS and Android</p>
            <ul>
                <li className={router.pathname === "/" ? navStyles.active: ""}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={router.pathname === "/about" ? navStyles.active: ""} >
                    <Link href='/about'>About</Link>
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