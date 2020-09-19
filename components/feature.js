export default function Feature() {
  return (
    <section id="feature" className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Scaasの特徴</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div>
                <img src="/images/b0592.png" alt="" />
              </div>
              <div className="mb-3">
                <h2 className="text-gray-900 text-lg title-font font-bold">いますぐ使えるシンプル設計</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  ScaasはパラメータをつけたURLにアクセスするだけで画像を返す、超シンプルなサービスです。
                  ライブラリやAPIの面倒な設定も必要ありません。
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div>
                <img src="/images/b0139.png" alt="" />
              </div>
              <div className="mb-3">
                <h2 className="text-gray-900 text-lg title-font font-bold">日本語フォント対応</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  海外のサービスにありがちな日本語フォントが表示できない問題もありません。
                  安心して日本語サイトにもお使いください。
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div>
                <img src="/images/b0313.png" alt="" />
              </div>
              <div className="mb-3">
                <h2 className="text-gray-900 text-lg title-font font-bold">縦長画面のキャプチャにも対応</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  縦長の画面でも、パラメータを指定すると全画面キャプチャにすることが可能です。
                  また画面サイズを指定してキャプチャすることもできます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
