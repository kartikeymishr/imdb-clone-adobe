import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/search.scss";
import "../styles/userhistory.scss";
import "../styles/movie.scss";
import "../styles/synopsis.scss";
import "../styles/spinner.scss";
import { Provider } from "react-redux";

import Navbar from "../components/Navbar";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;