'use client';

import { useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Task {
  id: string;
  title: string;
}

const initialTasks: Task[] = [
  { id: '1', title: 'タスク1: プロジェクトの企画書を作成する' },
  { id: '2', title: 'タスク2: データベース設計を行う' },
  { id: '3', title: 'タスク3: フロントエンドの実装' },
  { id: '4', title: 'タスク4: バックエンドAPIの開発' },
  { id: '5', title: 'タスク5: テストとデバッグ' },
];

function SortableTask({ task }: { task: Task }) {
  // ドラッグ可能な要素を作るために必要な全ての機能
  const {
    attributes, // ドラッグ可能な要素の属性
    listeners, // ドラッグイベントのリスナー（マウス・タッチイベントを検知）
    setNodeRef, // DOM要素の参照をDnD Kitに渡し、ドラッグ対象の要素を特定する
    transform, // ドラッグ中の位置情報（x, y座標）
    transition, // アニメーション遷移（要素の移動をなめらかにする）
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform), // ドラッグ中の位置変換
    transition, // スムーズなアニメーション
  };

  return (
    // 各リストの囲い線を処理
    <div
      ref={setNodeRef} // DOM要素の参照を設定
      style={style}
      {...attributes}
      {...listeners} // ドラッグイベントを設定
      className={`
        p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-grab active:cursor-grabbing
        ${isDragging ? 'opacity-50 shadow-lg' : 'hover:shadow-md'}
        transition-all duration-200
      `}
    >
      <div className="flex items-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
        {/* 各リストの内容を表示 */}
        <span className="text-gray-800">{task.title}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  // ドラッグ操作を開始するまでの最小移動距離を設定（誤クリック防止）
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // マウスを8ピクセル以上移動してからドラッグ操作を開始
        distance: 8,
      },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event; // ドラッグ開始された要素の情報を取得
    const task = tasks.find(t => t.id === active.id); // 該当するタスクを検索
    setActiveTask(task || null); // アクティブなタスクを状態に設定
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event; // active: ドラッグした要素, over: 移動先の要素
    setActiveTask(null); // ドラッグ状態をリセット（DragOverlayを非表示）

    // 移動先があり、かつ元の位置と異なる場合のみ処理
    if (over && active.id !== over.id) {
      setTasks(items => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex); // 配列内の要素をドロップした位置に移動
      });
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          DnD Kit サンプル - ソート可能なタスクリスト
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            タスクをドラッグして順序を変更できます
          </h2>
          {/* DndContentでドラッグ＆ドロップの状態管理を行う */}
          <DndContext
            sensors={sensors} // センサー設定（マウス）
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* ドラッグ可能な要素(DndContentに挟まれた処理が対象) */}
            <SortableContext
              items={tasks}
              strategy={verticalListSortingStrategy} // 上下にドラッグして順序を変更
            >
              <div className="space-y-2">
                {tasks.map(task => (
                  <SortableTask key={task.id} task={task} />
                ))}
              </div>
            </SortableContext>
            {/* ドラッグしている要素のコピーを画面上に浮かせて、マウスカーソルに追従させる */}
            <DragOverlay>
              {activeTask ? (
                <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg cursor-grabbing">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-800">{activeTask.title}</span>
                  </div>
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">使い方</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• タスクをドラッグして順序を変更できます</li>
            <li>• ドラッグ中は視覚的なフィードバックが表示されます</li>
            <li>• マウスでタスクをクリック&ドラッグしてください</li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/kanban"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            カンバンボードサンプルを見る →
          </a>
        </div>
      </div>
    </div>
  );
}
