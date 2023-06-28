import * as React from "react";
import { useRef, useState } from "react";
import {
    FaBars,
} from "react-icons/fa";
import styles from "../scss/Nav.module.scss";
import Link from "next/link";
import SearchBar from "./Search";
import {
    RiSearch2Line,
} from "react-icons/ri";

function MenuItem({ hide, href, children }) {
    return (
        <Link href={href}>
            <a href={href} className={styles.navlink} onClick={hide}>
                {children}
            </a>
        </Link>
    );
}

function Bars() {
    return (
        <label htmlFor="drawer" className={styles.drawerlabel}>
            <FaBars className={`${styles.icon} ${styles.menubutton}`} />
        </label>

    )
}

export { SearchBar, MenuItem, Bars };

export default function Topbar() {
    const checkbox = useRef(null);
    const [searchOpen, setSearchOpen] = useState(false);

    const hide = () => {
        setSearchOpen(false);
        checkbox.current.checked = false;
    }
    return (
        <>
            <input className={styles.drawer} id="drawer" type="checkbox" ref={checkbox} />
            <div className={styles.titlebar}>
                <Bars />
                <Link href="/">
                    <a href="/" className={styles.name} onClick={hide}>
                        Snäpchen
                    </a>
                </Link>
                <span className={`${styles.search} ${searchOpen ? styles.open : styles.closed}`}>
                    <RiSearch2Line onClick={() => setSearchOpen(true)} />
                    <div className={searchOpen ? styles.open : styles.closed}>
                        <SearchBar hide={hide} />
                    </div>
                </span>
                <MenuItem hide={hide} href="/info/about">
                    Über  uns
                </MenuItem>
            </div>
        </>
    )
}
