import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow px-10">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
