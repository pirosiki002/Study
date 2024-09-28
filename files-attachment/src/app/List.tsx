"use client";

interface Image {
  fileImage: string;
  alt: string;
}

interface Item {
  name: string;
  status: string;
  images: Image[];
}

interface ListProps {
  items: Item[];
}

export default function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <h2>{item.name}</h2>
          <p>Status: {item.status}</p>
          <ul>
            {item.images.map((image, imgIndex) => (
              <li key={imgIndex}>
                {/* <img src={image.fileImage} alt={image.alt} /> */}
                <p>FileImage: {image.fileImage}</p>
                <p>alt: {image.alt}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
