import "../styles/styles.css"; // スタイルシートをインポート
import React from "react"; // Reactをインポート
import { useSortable } from "@dnd-kit/sortable"; // useSortableフックをインポート
import { CSS } from "@dnd-kit/utilities"; // CSSユーティリティをインポート

// Define an interface for the props
interface DraggableProps {
  key: string;
  num: string; // Define the expected type for 'num'
}

// Draggableコンポーネントの定義
const Draggable = (props: DraggableProps) => {
  // useSortableフックを使用してドラッグ可能な要素の属性を取得
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props.num, // 要素の一意のIDを設定
    });

  // スタイルオブジェクトを定義
  const style = {
    transform: CSS.Transform.toString(transform), // 変換プロパティを文字列に変換
    transition, // トランジションプロパティを設定
  };

  // ボタン要素を返す
  return (
    <button
      className="cards" // クラス名を設定
      ref={setNodeRef} // 要素の参照を設定
      style={style} // スタイルを適用
      {...listeners} // イベントリスナーを適用
      {...attributes} // 属性を適用
    >
      <p>{props.num}</p> {/* props.numを表示 */}
    </button>
  );
};

export default Draggable; // Draggableコンポーネントをエクスポート
