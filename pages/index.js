import Example from '../components/example'
import Feature from '../components/feature'
import Howto from '../components/howto'
import Price from '../components/price'

export default function Index() {
  return (
    <div>

      <header className="absolute w-full text-gray-700 body-font z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/images/logo.png" alt="" style={{width: 40}} />
            <span className="ml-3 text-xl">ScaaS</span>
            <small className="text-xs">（スキャース）</small>
          </a>
          <nav className="md:ml-auto hidden sm:flex flex-wrap items-center text-base justify-center">
            <a href="#feature" className="mr-5 hover:text-gray-900">特徴</a>
            <a href="#option" className="mr-5 hover:text-gray-900">使い方</a>
            <a href="#price" className="mr-5 hover:text-gray-900">料金</a>
            <a href="mailto:info@notsobad.jp" className="mr-5 hover:text-gray-900">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700 body-font relative">
        <div className="container mx-auto flex px-5 pt-24 pb-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              スクリーンショットを、シンプルに。
            </h1>
            <p className="mb-4 sm:mb-8 leading-relaxed">
              <ruby>
                ScaaS
                <rp>(</rp><rt>スキャース</rt><rp>)</rp>
              </ruby>
              はライブラリ不要、URLのパラメータを指定するだけで使える、シンプルなスクリーンショットAPIサービスです。
              <br />
              縦長の画面でも全画面キャプチャ可能、また日本語フォントの表示にも対応しています。
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
            <img className="object-cover object-center rounded" alt="hero" src="/images/b0312.png" />
          </div>
        </div>
        <div className="absolute w-full h-full opacity-25 top-0 left-0" style={{zIndex: '-1', backgroundImage: 'url(/images/memphis-colorful.png)'}}></div>
      </section>

      <Example />
      <Feature />
      <Howto />
      <Price />

      <footer className="text-gray-700 body-font mt-24">
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 ScaaS -
              powered by
              <a href="https://notsobad.jp" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">NOT SO BAD, LLC.</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
