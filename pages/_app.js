import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/search.scss";
import "../styles/userhistory.scss";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;