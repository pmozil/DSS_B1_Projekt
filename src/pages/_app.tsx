import "../scss/App.scss";
import "../index.scss";
import Menu from "../components/Bar.js";
import Footer from "../components/Footer.js";

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="App">
            <div className="main">
                <Menu />
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}
