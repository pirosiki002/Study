"use client"; // Next.jsのクライアントサイドで実行されることを示す

import React, { useState } from "react"; // ReactとuseStateフックをインポート
import { DndContext, DragOverEvent } from "@dnd-kit/core"; // DndContextをインポート
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext, arrayMove } from "@dnd-kit/sortable"; // SortableContextをインポート
import Draggable from "../conponents/Draggable"; // Draggableコンポーネントをインポート

import "../styles/styles.css"; // スタイルシートをインポート

// アイテムのデータ型を定義
interface Item {
  id: string;
  alt: string;
  url: string;
}

// 初期データ
const itemsData: Item[] = [
  { id: "1", alt: "Alt text 1", url: "https://example.com/image1.jpg" },
  { id: "2", alt: "Alt text 2", url: "https://example.com/image2.jpg" },
  { id: "3", alt: "Alt text 3", url: "https://example.com/image3.jpg" },
  { id: "4", alt: "Alt text 4", url: "https://example.com/image4.jpg" },
];

const App = () => {
  // useStateフックを使用してitemsの状態を管理
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [items, setItems] = useState(["1", "2", "3", "4"]);
  const [items, setItems] = useState<Item[]>(itemsData);

  // 配列内の要素を並べ替える関数
  function reorderArray(
    array: string[],
    active: string,
    over: string
  ): string[] {
    // activeとoverのインデックスを取得
    const activeIndex = array.indexOf(active);
    const overIndex = array.indexOf(over);

    // 要素が配列内に存在しない場合はエラーを投げる
    if (activeIndex === -1 || overIndex === -1) {
      throw new Error("要素が配列内に存在しません。");
    }

    // 新しい配列を作成し、要素を並べ替える
    const newArray = [...array];
    newArray.splice(activeIndex, 1);
    newArray.splice(overIndex, 0, active);

    return newArray; // 並べ替えた新しい配列を返す
  }

  // ドラッグオーバーイベントを処理する関数
  function handleDragOver(event: DragOverEvent) {
    const { over, active } = event;
    // overとactiveが存在し、かつ異なる要素である場合に並べ替えを実行
    if (over && active && over.id !== active.id) {
      // setItems((prevItems) =>
      // reorderArray(prevItems, String(active.id), String(over.id))
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
      // );
    }
  }

  return (
    // DndContextでドラッグ＆ドロップのコンテキストを提供
    <DndContext
      // ドラッグ時に垂直方向にしか動かないように
      modifiers={[restrictToVerticalAxis]}
      onDragOver={handleDragOver}
    >
      <div className="App">
        {/* SortableContextでソート可能なコンテキストを提供 */}
        <SortableContext items={items}>
          {/* itemsの各要素に対してDraggableコンポーネントをレンダリング */}
          {items.map((item) => (
            // <Draggable key={item} num={item} />
            <div
              key={item.id}
              className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md"
            >
              <p className="m-0">{item.id}</p>
              <p className="m-0">{item.alt}</p>
              <img
                src={item.url}
                alt={item.alt}
                className="w-16 h-16 object-cover"
              />
            </div>
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default App; // Appコンポーネントをエクスポート
