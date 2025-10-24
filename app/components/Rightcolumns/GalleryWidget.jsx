"use client";
import { useState, useRef } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryWidget() {
  const STARTER = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400",
    "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400",
    "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400",
  ];

  const [images, setImages] = useState(STARTER);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  function handleAddClick() {
    inputRef.current?.click();
  }

  function handleFiles(e) {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const urls = files.map((f) => URL.createObjectURL(f));
    setImages((prev) => [...prev, ...urls]);
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -250, behavior: "smooth" });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: 250, behavior: "smooth" });
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h3 className="text-md font-semibold text-gray-200 bg-black px-4 py-2 rounded-xl">
          Gallery
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleAddClick}
            className="text-sm flex items-center gap-1 font-semibold py-2 px-4 rounded-xl bg-gray-800 text-gray-200 border border-gray-700/50 hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-950/50"
          >
            <Plus size={14} /> Add image
          </button>
          <button
            onClick={scrollLeft}
            className="p-2 rounded-xl bg-gray-800 text-gray-200 border border-gray-700/50 hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-950/50"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-xl bg-gray-800 text-gray-200 border border-gray-700/50 hover:bg-gray-700 transition-all duration-300 shadow-lg shadow-gray-950/50"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFiles}
      />

      <div
        ref={scrollRef}
              className="h-80 overflow-x-auto overflow-y-hidden scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-3 h-full pb-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-48 h-64 flex-shrink-0 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
            >
              <img
                src={src}
                alt={`img-${i}`}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-500">
        Tip: Click “Add image” to append more photos.
      </p>
    </div>
  );
}
