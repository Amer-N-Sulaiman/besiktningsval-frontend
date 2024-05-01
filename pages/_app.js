import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src={'https://www.googletagmanager.com/gtag/js?id=G-E2NNV9CKYC'}/>
      <Script id='googleanalytics2'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-E2NNV9CKYC');
          `}
      </Script>
      <div className="App d-flex flex-column min-vh-100">
      

        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </div>
    
    </>
    
   
  )
  
  
}

export default MyApp
