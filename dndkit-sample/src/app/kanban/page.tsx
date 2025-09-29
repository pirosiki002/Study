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
  DragOverEvent,
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
  status: 'todo' | 'in-progress' | 'done';
}

const initialTasks: Task[] = [
  { id: '1', title: 'プロジェクト企画書の作成', status: 'todo' },
  { id: '2', title: 'データベース設計', status: 'todo' },
  { id: '3', title: 'フロントエンド実装', status: 'in-progress' },
  { id: '4', title: 'API開発', status: 'in-progress' },
  { id: '5', title: 'テストケース作成', status: 'done' },
  { id: '6', title: 'デプロイ準備', status: 'done' },
];

const columns = [
  { id: 'todo', title: 'To Do', color: 'bg-gray-100' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-blue-100' },
  { id: 'done', title: 'Done', color: 'bg-green-100' },
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
        p-3 mb-2 bg-white border border-gray-200 rounded-lg shadow-sm cursor-grab active:cursor-grabbing
        ${isDragging ? 'opacity-50 shadow-lg' : 'hover:shadow-md'}
        transition-all duration-200
      `}
    >
      <div className="text-sm text-gray-800">{task.title}</div>
    </div>
  );
}

function Column({
  id,
  title,
  color,
  tasks,
}: {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}) {
  return (
    <div className={`${color} rounded-lg p-4 min-h-[400px]`}>
      <h3 className="font-semibold text-gray-800 mb-4 text-center">{title}</h3>
      <SortableContext
        items={tasks.map(task => task.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {tasks.map(task => (
            <SortableTask key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default function KanbanPage() {
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

  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // タスクを別のタスクの上にドラッグしている場合
    const activeTask = tasks.find(task => task.id === activeId);
    const overTask = tasks.find(task => task.id === overId);

    if (activeTask && overTask && activeTask.status !== overTask.status) {
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(task => task.id === activeId);
        const overIndex = tasks.findIndex(task => task.id === overId);

        const newTasks = [...tasks];
        newTasks[activeIndex] = { ...activeTask, status: overTask.status };

        return arrayMove(newTasks, activeIndex, overIndex);
      });
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // カラムにドロップした場合
    if (['todo', 'in-progress', 'done'].includes(overId)) {
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(task => task.id === activeId);
        const newTasks = [...tasks];
        newTasks[activeIndex] = {
          ...newTasks[activeIndex],
          status: overId as Task['status'],
        };
        return newTasks;
      });
      return;
    }

    // タスクを別のタスクの上にドロップした場合
    const activeTask = tasks.find(task => task.id === activeId);
    const overTask = tasks.find(task => task.id === overId);

    if (activeTask && overTask && activeTask.status === overTask.status) {
      setTasks(tasks => {
        const activeIndex = tasks.findIndex(task => task.id === activeId);
        const overIndex = tasks.findIndex(task => task.id === overId);
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }
  }

  const tasksByStatus = {
    todo: tasks.filter(task => task.status === 'todo'),
    'in-progress': tasks.filter(task => task.status === 'in-progress'),
    done: tasks.filter(task => task.status === 'done'),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          DnD Kit サンプル - カンバンボード
        </h1>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map(column => (
              <div key={column.id} className="space-y-4">
                <Column
                  id={column.id}
                  title={column.title}
                  color={column.color}
                  tasks={tasksByStatus[column.id as keyof typeof tasksByStatus]}
                />
              </div>
            ))}
          </div>

          <DragOverlay>
            {activeTask ? (
              <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-lg cursor-grabbing">
                <div className="text-sm text-gray-800">{activeTask.title}</div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">使い方</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• タスクをドラッグして別のカラムに移動できます</li>
            <li>• 同じカラム内でタスクの順序を変更できます</li>
            <li>
              • カラムのタイトル部分にドロップすると、そのカラムに移動します
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <a
            href="/"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ← ソートリストサンプルに戻る
          </a>
        </div>
      </div>
    </div>
  );
}
