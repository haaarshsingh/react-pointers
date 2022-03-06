import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import '@components/Loader.css'
import globalStyle from '@css/global.style'

const Groovi = ({ Component, pageProps }: AppProps) => {
  globalStyle()

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default Groovi
