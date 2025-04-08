import React from "react";
import { useSearchParams } from "react-router-dom";
import "./css/panination.css";

const Pagination = ({ totalItems, itemsPerPage = 10 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        page: page.toString(),
      });
    }
  };

  // Tạo mảng các số trang hiển thị
  const getPageNumbers = () => {
    const delta = 2; // Số trang hiển thị ở hai bên trang hiện tại
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="paninate-pure">
      <ul className="panination-main">
        {/* Về đầu */}
        <li>
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            «
          </button>
        </li>

        {/* Trang trước */}
        <li>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            ⟨
          </button>
        </li>

        {/* Số trang */}
        {getPageNumbers().map((page, index) => (
          <li key={index} className={currentPage === page ? "active" : ""}>
            {typeof page === "number" ? (
              <button
                onClick={() => goToPage(page)}
                className={`pagination-button ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page}
              </button>
            ) : (
              <span className="pagination-dots">{page}</span>
            )}
          </li>
        ))}

        {/* Trang sau */}
        <li>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            ⟩
          </button>
        </li>

        {/* Về trang cuối */}
        <li>
          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            »
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
