import '@/styles/globals.css'
import "tailwindcss/tailwind.css"
import { CartProvider } from '../../context/cartContext'

export default function App({ Component, pageProps }) {
  return(
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}