"use client";
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Draggable from "../conponents/Draggable";

import "../styles/styles.css";

const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState(["1", "2", "3", "4"]);

  return (
    <DndContext>
      <div className="App">
        <SortableContext items={items}>
          {items.map((item) => (
            <Draggable key={item} num={item} />
          ))}
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default App;
