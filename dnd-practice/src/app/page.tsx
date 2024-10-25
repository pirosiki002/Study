"use client"; // Next.jsのクライアントサイドで実行されることを示す

import React, { useState } from "react"; // ReactとuseStateフックをインポート
import { DndContext, DragOverEvent } from "@dnd-kit/core"; // DndContextをインポート
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { SortableContext } from "@dnd-kit/sortable"; // SortableContextをインポート
import Draggable from "../conponents/Draggable"; // Draggableコンポーネントをインポート

import "../styles/styles.css"; // スタイルシートをインポート

const App = () => {
  // useStateフックを使用してitemsの状態を管理
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState(["1", "2", "3", "4"]);

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
      setItems((prevItems) =>
        reorderArray(prevItems, String(active.id), String(over.id))
      );
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
            <Draggable key={item} num={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default App; // Appコンポーネントをエクスポート
