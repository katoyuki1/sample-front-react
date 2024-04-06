// ReactライブラリからReact本体と、useStateというフック（特定の機能をコンポーネントに「ひっかける」ための関数）をインポート（読み込み）しています。
// useStateは、コンポーネント内で状態管理をするために使われます。
import React, {useState} from 'react'

const Basic2 = () => {
  // useStateフックを使って、productという状態と、その状態を更新するためのsetProducts関数を定義しています。
  // 初期状態として、name（名前）とprice（価格）のプロパティを持つオブジェクトを設定しています。これらは最初は空文字列で初期化されています。
  const [product, setProducts] = useState({name: '', price: ''})

  // このコンポーネントが画面に表示する内容を返します。return以下にJSX（JavaScriptを拡張したマークアップ言語）を記述
  return (
    // Reactのフラグメント（<>と</>で囲まれた部分）を使っています。複数の要素を返す場合、Reactでは一つの要素にまとめる必要がありますが、余計なDOMノードを追加せずにそれを実現するためにフラグメントを使用します。
    <>
      <form>
        {/* 商品の名前を入力するためのテキストフィールドです。
        ユーザーが入力するたびに、onChangeイベントが発生し、setProducts関数が呼び出されてproduct状態が更新されます。
        evt.target.valueにより、入力された値にアクセスしています */}
        <input type='text' value={product.name}
        onChange={evt => setProducts({...product, name: evt.target.value})}/>

        <input type='text' value={product.price}
        onChange={evt => setProducts({...product, price: evt.target.value})}/>

      </form>

      <h3>Product name is { product.name }</h3>
      <h3>Product price is { product.price }</h3>
    </>
  )
}
// Basic2コンポーネントをデフォルトエクスポート（外部のファイルから利用できるように公開）しています。
// これにより、他のファイルでこのコンポーネントをインポートして使用することができます
export default Basic2
