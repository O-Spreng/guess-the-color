import '@/core/styles/globals.css'
import type {AppProps} from 'next/app'
import {GameContextProvider} from "@/core/context/GameContext";

export default function App({Component, pageProps}: AppProps) {
  return (
    <GameContextProvider>
      <Component {...pageProps} />
    </GameContextProvider>
  )
}
