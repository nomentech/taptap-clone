import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#15c5ce',
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
