if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
