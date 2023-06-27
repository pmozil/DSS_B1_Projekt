import * as React from "react";
import styles from "../scss/main.module.scss";

export default function MainPage({ scrollRef }) {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        Title here
                    </div>
                    <span className={styles.separator} />
                    <div className={styles.text}>
                        More info...
                    </div>
                </div>
            </div>
            <div className={styles.intro}>
                <div className={styles.image}>
                    <span className={styles.overlay} />
                </div>
            </div>
        </div>
    );
}
