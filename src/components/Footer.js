import styles from "../scss/Footer.module.scss";
import Switcher from "./Themeswitcher.js";
import Link from "next/link";

function FooterLink({ href, children }) {
    return (
        <Link href={href}>
            <a href={href} className={styles.link}>
                {children}
            </a>
        </Link>
    );
}

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.column}>
                <div className={styles.links}>
                    <FooterLink href="/info/about">
                        Über uns
                    </FooterLink>
                </div>
            </div>
            <div className={styles.column}>
                <Switcher />
            </div>
        </div>
    );
}
