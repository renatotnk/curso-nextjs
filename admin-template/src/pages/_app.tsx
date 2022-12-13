import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../data/context/AppContext'

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App;
