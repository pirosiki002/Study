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
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        p-4 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm cursor-grab active:cursor-grabbing
        ${isDragging ? 'opacity-50 shadow-lg' : 'hover:shadow-md'}
        transition-all duration-200
      `}
    >
      <div className="flex items-center">
        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
        <span className="text-gray-800">{task.title}</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const task = tasks.find(t => t.id === active.id);
    setActiveTask(task || null);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (over && active.id !== over.id) {
      setTasks(items => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
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

          <DndContext
            sensors={sensors}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={tasks}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-2">
                {tasks.map(task => (
                  <SortableTask key={task.id} task={task} />
                ))}
              </div>
            </SortableContext>

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
