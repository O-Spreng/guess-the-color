import '@/App/styles/globals.css'
import type {AppProps} from 'next/app'
import {GameContextProvider} from "@/App/context/GameContext";

export default function App({Component, pageProps}: AppProps) {
  return (
    <GameContextProvider>
      <Component {...pageProps} />
    </GameContextProvider>
  )
}
