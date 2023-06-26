import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from "../scss/Applet.module.scss"
import rehypeRaw from "rehype-raw"

function Image(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles["image-container"]}>
            <div className={`${styles.image} ${styles.closed}`} onClick={() => setOpen(!open)}>
                <img src={props.src} alt={props.alt} />
                {open && (
                    <div className={`${styles.image} ${styles.open}`} onClick={() => setOpen(!open)}>
                        <img src={props.src} alt={props.alt} />
                    </div>
                )}
            </div>
        </div>
    );
}

function Table(props) {
    return (
        <div className={styles["table-container"]}>
            <table {...props}>
                {props.children}
            </table>
        </div>
    )
}

export default function Article(props) {
    return (
        <div className={styles.container}>
            {props.children}
            <div className={styles.markdown}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                    img: Image,
                    table: Table
                }} rehypePlugins={[rehypeRaw]} children={props.content}/>
            </div>
        </div>
    )
}
