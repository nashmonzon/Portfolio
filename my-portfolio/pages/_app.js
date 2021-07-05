import {useEffect} from "react"
import '../styles/globals.css'
import "bootswatch/dist/cosmo/bootstrap.min.css"
// import "bootstrap/dist/css/bootstrap.min.css"
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import AOS from 'aos';
import 'aos/dist/aos.css';

config.autoAddCss = false;



function MyApp({ Component, pageProps }) {
  

  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
useEffect(() =>{
    
  AOS.init({
    duration:1000,
  })
},[])
  return <Component {...pageProps} />
}

export default MyApp
