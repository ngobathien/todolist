import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        onClick={onPrev}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded transition"
      >
        ◀ Trước
      </button>

      <span className="font-semibold text-gray-700">
        Trang {currentPage} / {totalPages}
      </span>

      <button
        onClick={onNext}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-4 py-2 rounded transition"
      >
        Sau ▶
      </button>
    </div>
  );
}

export default Pagination;
