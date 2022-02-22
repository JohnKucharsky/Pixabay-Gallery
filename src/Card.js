import React from "react";

export default function Card({ item }) {
  const tags = item.tags.split(",");
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img src={item.largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-700 text-xl mb-2">
          Photo by John Doe
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {item.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {item.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {item.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block mb-3 bg-gray-200 shadow rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
