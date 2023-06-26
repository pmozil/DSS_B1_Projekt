import React, { useState, useEffect } from "react";
import themes from "./themes.js";
import { FaBrush } from "react-icons/fa";
import styles from "../scss/Themeswitcher.module.scss";

export default function Switcher(props) {
    const [gtheme, setTheme] = useState(0);

    const selectTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));

        const root = document.documentElement;
        const current = themes[theme];
        const vars = {
            background: "background",
            foreground: "foreground",
            menu: "menu-bg",
            highlight: "highlight",
            secondary: "secondary",
        };

        for (let [name, value] of Object.entries(current.style)) {
            root?.style.setProperty(`--${vars[name]}`, value);
        }
    };

    useEffect(() => {
        const previous = localStorage.getItem("theme");
        selectTheme(previous ? JSON.parse(previous) : 0);
    }, []);

    return (
        <div className={styles.themeswitcher}>
            <div className={styles.current}>
                <FaBrush />
            </div>
            <div className={styles.dropdown}>
                <ul className={styles.options}>
                    {themes.map((theme, index) => (
                        <li key={`${theme}${index}`}
                            className={gtheme === index ? `${styles.themeOption} ${styles.selected}` : styles.themeOption}
                            onClick={() => selectTheme(index)}
                        >
                            {theme.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
