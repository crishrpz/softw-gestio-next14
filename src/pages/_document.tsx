import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="it">
      <Head>   
      <link rel="icon" href="/favicon.jpeg" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N869445');         
        `}
      </Script>

       </Head>
  
      <body>
       
        <Main />
        <div className='fixed bottom-10 right-4 p-3 z-10 text-right'>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=393920739435" className="p-2 fa-3x w-ic green-text pr-3" >
              <Image
                alt="Whatsapp "
                src="/whatsapp-240.png"
                width={60}
                height={60}
               />
                </a>
               </div>
        <NextScript />
        <noscript
    dangerouslySetInnerHTML={{
      __html: `iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N869445"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
    }}
  />
      </body>

    </Html>
  )
}
