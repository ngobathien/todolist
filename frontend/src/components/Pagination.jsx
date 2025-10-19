import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onNext, onPrev }) {
  return (
    <>
      <div className="pagination">
        <button onClick={onPrev} className="btn_pagination">
          Trước
        </button>

        <h1>
          {currentPage} / {totalPages}
        </h1>
        <button onClick={onNext} className="btn_pagination">
          Sau
        </button>
      </div>
    </>
  );
}

export default Pagination;
