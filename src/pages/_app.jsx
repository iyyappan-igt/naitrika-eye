import Footer from "@/common/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>

    <Component {...pageProps} />
    <Footer/>
    
    </>
  );
}
