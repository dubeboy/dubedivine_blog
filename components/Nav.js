
import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = ({divine_profile_photo}) => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.divineImg}>
                <img src={divine_profile_photo.thumbnailUrl} alt={author.name} />
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

export default Nav