import Applet from "./Applet.js";
import styles from "../scss/main_page_news.module.scss";
import Link from "next/link";

export default function NewsPage({ articles, scrollRef }) {
    return (
        <div className={styles.news} id="articles_grid_applet" ref={scrollRef}>
            <Link href="/news">
                <h1 className={styles.title}>
                    Nachrichten
                </h1>
            </Link>
            <Applet link="tmp" articles={articles} />
        </div>
    );
}
