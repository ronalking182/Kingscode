import '../styles/globals.css'

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-CPJRZ6NMFY"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-CPJRZ6NMFY');
// </script>


function MyApp({ Component, pageProps }) {
  return<>
     <script
     strategy="lazyOnload" 
     src="https://www.googletagmanager.com/gtag/js?id=G-CPJRZ6NMFY"
     />
     <script 
     strategy="lazyOnload" 
     >
       {
         `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-CPJRZ6NMFY');
         `
       }
     </script>
   <Component {...pageProps} />
   </>
}

export default MyApp
