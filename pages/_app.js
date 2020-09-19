import Head from 'next/head'
import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Scaas - 簡単・便利なスクリーションショットAPIサービス</title>
        <meta name="description" content="Scaas(スキャース)は、URLを指定するだけで画面キャプチャを使えるシンプルなスクリーンショット作成サービスです" />
        <meta name="keywords" content="Scaas,スキャース,スクリーンショット,画面キャプチャ,縦長画面,日本語フォント,API" />
        <meta property="og:title" content="Scaas - 簡単・便利なスクリーションショットAPIサービス" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://scaas.vercel.app" />
        <meta property="og:image" content="https://scaas.vercel.app/images/ogp.png" />
        <meta property="og:site_name" content="Scaas - 簡単・便利なスクリーションショットAPIサービス" />
        <meta property="og:description" content="Scaas(スキャース)は、URLを指定するだけで画面キャプチャを使えるシンプルなスクリーンショット作成サービスです" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="Scaas(スキャース)は、URLを指定するだけで画面キャプチャを使えるシンプルなスクリーンショット作成サービスです" />
        <meta name="twitter:image:src" content="https://scaas.vercel.app/images/ogp.png" />
        <link rel="canonical" href="https://scaas.vercel.app" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App
