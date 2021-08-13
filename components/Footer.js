import Head from "next/head";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";

const Layout = () => {
    return (
        <footer>
            <p>Copyright &copy; Divine Dube {new Date().getFullYear()} </p>
            <p> 🦄 Happy coding 🚀️ </p>
            <p>Follow me on Twitter: <a href="https://twitter.com/divinedube" target="_blank" > @dubedivine</a></p>
        </footer>
    )
}

export default Layout