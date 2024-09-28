"use client";

import List from "./List";

// const items = ["name", "file image", "alt", "status"];
const items = [
  {
    name: "Stamp 1",
    status: "active",
    images: [
      { fileImage: "image1.png", alt: "Image 1" },
      { fileImage: "image2.png", alt: "Image 2" },
    ],
  },
];

export default function PageClient() {
  return (
    <div>
      <h1>Stamps detail</h1>
      <br />
      <List items={items} />
    </div>
  );
}
