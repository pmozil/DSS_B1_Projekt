import * as React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const themes = [
    {
        name: "default",
        icon: <FaSun />,
        style: {
            background: "#e0e0ef",
            foreground: "#282828",
            menu: "#1a1b26",
            highlight: "#b57614",
            secondary: "#a9b1d6",
        },
    },
    {
        name: "dark",
        icon: <FaMoon />,
        style: {
            background: "#2e3440",
            foreground: "#d8dee9",
            menu: "#4c566a",
            highlight: "#a3be8c",
            secondary: "#e5e9f0",
        },
    }
];

export default themes;
