import '../styles/globals.css'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
