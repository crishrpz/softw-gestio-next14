import Image from "next/image";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const animation = {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    initial: ["hidden"],
    whileInView: ["visible"],
    exit: ["hidden"],
    viewport: {
      amount: 0.8,
      // once: true
    },
    // onViewportEnter: () => console.log("enter"),
    // onViewportLeave: () => console.log("leave"),
    transition: { type: "spring", duration: 4, bounce: 0.1 },
  };

  return (
    <>
      <main className="w-full bg-white ">
        <NextSeo
          title="Sviluppo software gestionale aziendale personalizzato"
          description="Siamo un team di programmatori incentrato allo sviluppo di gestionali aziendali di tipo SAAS, SAP o ERP. Creiamo soluzioni per aziende. Sviluppiamo Crm, Saas e gestionali in cloud personalizzati."
        />

        <div className="grid lg:grid-cols-2 gap-2 text-center">
          <div className=" w-full mt-12 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center md:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Sviluppo Software </span>
                <span className="block text-green-600 xl:inline">
                  {" "}
                  gestionale aziendale 
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Un team digitale incentrato sullo sviluppo del software in cloud
                con le migliori tecnologie attuali. Il nostro software viene
                progettato per soddisfare le esigenze specifiche di ogni
                cliente, offrendo una flessibilità senza eguali e una
                scalabilità garantita. Chiedi info subito!
              </p>
            </div>
            <div className="my-5 sm:mt-8 sm:flex lg:flex md:flex sm:justify-center lg:justify-center">
              <button className="rounded-md shadow">
                {" "}
                <a
                  href="mailto:gestionalepersonalizzato@gmail.com"
                  className=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-green-500 md:py-4 md:text-lg md:px-10"
                >
                  Scrivici @
                </a>{" "}
              </button>
            </div>
          </div>

          <div className="w-full mt-6 mb-6 max-w-9xl px-4 sm:mt-8 sm:px-6 sm:text-center md:text-center">
            <Image
              src="/office.jpeg"
              alt="office"
              width={700}
              height={500}
              className="rounded-md w-full object-cover sm:h-90 md:h-full lg:w-full lg:h-full"
            />
          </div>
        </div>

        <div className="py-8  bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10">
              <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <motion.div {...animation}>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.div {...animation}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Gestionale totalmente personalizzabile
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        La nostra soluzione è ideale per aziende che desiderano
                        un sistema di gestione dei dati e delle attività in modo
                        totalmente personalizzato.
                      </dd>
                    </motion.div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <motion.div {...animation}>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.div {...animation}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        CRM - ERP personalizzati
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Realizziamo CRM (Customer relationship management) , ERP
                        (Enterprise resource planning) per ogni tipo di esigenza
                        e business. Super performante con autenticazione
                        multi-livello, archiviazione dati sicura , il tutto
                        comodamente in cloud.
                      </dd>
                    </motion.div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <motion.div {...animation}>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.div {...animation}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Software e Mobile
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Se vuoi tenere sotto controllo ovunque il tuo gestionale
                        , offriamo soluzioni complete e connesse alla tua App
                        mobile.
                      </dd>
                    </motion.div>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <motion.div {...animation}>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <motion.div {...animation}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        UI & UX
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Con una interfaccia intuitiva e facile da usare, il
                        nostro software è stato progettato per consentire alle
                        aziende di gestire i loro dati e le loro attività in
                        modo semplice e efficiente.
                      </dd>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 bg-gray-100">
          <div className="sm:text-center md:text-center lg:text-center">
            <div className="text-center block text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <h1 className="mt-10">I NOSTRI CLIENTI</h1>
            </div>
          </div>

          <div className="justify-items-center grid lg:grid-cols-2 gap-2 px-4 mt-4">
            
            <div className="max-w-lg py-4 px-8 sm:px-4 bg-white shadow-lg rounded-lg my-12 ">
              <div className="flex justify-center md:justify-end -mt-16">
                <Image
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-2 border-green-500"
                  src="/NO-LOOP.png"
                  alt="mcm"
                ></Image>
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-bold">
                  No Loop
                </h2>
                <p className="mt-2 text-gray-600">
                  Agenzia di comunicazione per eventi . Per il nostro cliente
                  abbiamo sviluppato un gestionale in cloud , connesso alla
                  propria App nativa .{" "}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a
                  target="_blank"
                  href="https://www.noloop.eu/"
                  rel="noreferrer"
                  className="text-xl font-bold text-green-600"
                >
                  No Loop
                </a>
              </div>
            </div>

            <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-12">
              <div className="flex justify-center md:justify-end -mt-16">
                <Image
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-full border-2 border-green-500"
                  src="/farma.png"
                  alt="pharma"
                ></Image>
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-bold">CloudFarma</h2>
                <p className="mt-2 text-gray-600">
                  Abbiamo sviluppato un gestionale personalizzato dedicato alle
                  farmacie .{" "}
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a
                  target="_blank"
                  href="https://www.cloud-farma.it/cfportal/"
                  rel="noreferrer"
                  className="text-xl font-bold text-green-600"
                >
                  CloudFarma
                </a>
              </div>
            </div>
            </div>


            <div className="justify-items-center grid lg:grid-cols-2 gap-2 px-4 ">

              <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-8">
                <div className="flex justify-center md:justify-end -mt-16">
                  <Image
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-full border-2 border-green-500"
                    src="/sseni.png"
                    alt="cloudfarma"
                  ></Image>
                </div>
                <div>
                  <h2 className="text-gray-800 text-3xl font-bold">SSSenior</h2>
                  <p className="mt-2 text-gray-600">
                    Cliente internazionale dal Brasile. Abbiamo sviluppato una
                    gestionale in cloud , per controllare il flusso e la
                    profilazione dei clienti.{" "}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    target="_blank"
                    href="https://www.sssenior.com.br/"
                    rel="noreferrer"
                    className="text-xl font-bold text-green-600"
                  >
                    Sssenior
                  </a>
                </div>
              </div>

              <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-8">
                <div className="flex justify-center md:justify-end -mt-16">
                  <Image
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover rounded-full border-2 border-green-500"
                    src="/signore.png"
                    alt="cloudfarma"
                  ></Image>
                </div>
                <div>
                  <h2 className="text-gray-800 text-3xl font-bold">Studio Signore & Airaghi</h2>
                  <p className="mt-2 text-gray-600">
                     Abbiamo sviluppato una
                    gestionale in cloud ,personalizzato, per la gestione fiscale , legale e consulenza del lavoro.{" "}
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <a
                    target="_blank"
                    href="https://www.studiosignore.com/"
                    rel="noreferrer"
                    className="text-xl font-bold text-green-600"
                  >
                    Studio Signore
                  </a>
                </div>
              </div>
            </div>
          </div>
     
      </main>

      <footer className="footer bg-white relative  ">
        <div className=" w-full mx-auto px-2">
          <div className=" shadow-2xl border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-black font-bold mb-2">
                © {new Date().getFullYear()} - Made with love for a better web
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
