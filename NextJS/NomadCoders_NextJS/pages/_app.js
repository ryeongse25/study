import Layout from "../components/Layout";
import "../styles/globals.css";

// Component : 렌더링 할 페이지
export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </>
    )
}