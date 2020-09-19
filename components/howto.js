export default function Howto() {
  return (
    <section id="option" className="text-gray-700 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">使い方</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            キャプチャしたいページのURLをパラメータにつけてアクセスするだけです。
            <br />
            またURLにオプションを追加することで、より詳細な設定が可能です。
          </p>
        </div>
        <div className="bg-gray-100 px-4 sm:px-8 py-4 rounded mb-12">
          https://scaas.vercel.app/api?url=
          <span className="text-red-600 font-bold">https://example.com</span>
        </div>

        <div className="mb-4">
          <h3 className="font-bold">▼ 詳細オプション</h3>
        </div>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap mb-8">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">パラメータ</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">型</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">デフォルト値</th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">説明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">slowMo</td>
                <td className="px-4 py-3">Integer</td>
                <td className="px-4 py-3">0</td>
                <td className="px-4 py-3 text-xs text-gray-900">指定した時間（ms）だけキャプチャ実行を遅らせます。画面描画に時間がかかる場合などにお使いください。</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">fullPage</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">Boolean</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">false</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-xs text-gray-900">全画面キャプチャする場合はtrueを指定してください。</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">viewportWidth</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">Integer</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">1200</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-xs text-gray-900">viewportのサイズ（横幅）をpxで指定します。</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">viewportHeight</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">Integer</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">800</td>
                <td className="border-t-2 border-gray-200 px-4 py-3 text-xs text-gray-900">viewportのサイズ（縦幅）をpxで指定します。</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 px-4 sm:px-8 py-4 rounded mb-12">
            例：https://scaas.vercel.app/api?url=https://example.com
            <span className="text-red-600 font-bold">
              &slowMo=200&fullPage=true
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
