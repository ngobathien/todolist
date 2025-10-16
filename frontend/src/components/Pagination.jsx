import React, { useState } from "react";

function Pagination({ currentPage, totalPages, onNext, onPrev }) {
  //   const [currentPage, setCurrentPage] = useState(0);
  //   const [page, setPage] = useState(1);

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
