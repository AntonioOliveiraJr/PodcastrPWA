import { AppProps } from 'next/app'
import { useEffect } from 'react'

import { PageTransition } from '@/components/PageTransition/index'
import Context from '@/contexts'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  return (
    <Context>
      {/* <PageTransition>
        {({ Component, pageProps }) => {
          return Component ? (
            <Component {...pageProps} />
          ) : (
            <SsrComponent {...ssrPageProps} />
           )
         }}
       </PageTransition>
      */}

      <SsrComponent {...ssrPageProps} />
    </Context>
  )
}
