import React, { useEffect, useState } from "react";
import "./pagination.css";

const CertificateList = () => {
  const [certificates, setCertificates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 5;

  const fetchCertificates = async (page) => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/certificates?page=${page}&pageSize=${pageSize}`
      );
      const data = await res.json();
      setCertificates(data.data);
      setTotalPages(data.totalPages);
      setCurrentPage(page);
    } catch (err) {
      console.error("Lỗi khi load certificate:", err);
    }
  };

  useEffect(() => {
    fetchCertificates(1);
  }, []);

  const changePage = (page) => {
    if (page >= 1 && page <= totalPages) {
      fetchCertificates(page);
    }
  };

  return (
    <div>
      <h2>Danh sách chứng chỉ của tôi</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.id}>
            <strong>{cert.title}</strong> - {cert.issuedBy} ({cert.year})
          </li>
        ))}
      </ul>

      <ul className="pagination">
        <li>
          <button onClick={() => changePage(1)} disabled={currentPage === 1}>
            «
          </button>
        </li>
        <li>
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ⟨
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className={currentPage === i + 1 ? "active" : ""}>
            <button onClick={() => changePage(i + 1)}>{i + 1}</button>
          </li>
        ))}

        <li>
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ⟩
          </button>
        </li>
        <li>
          <button
            onClick={() => changePage(totalPages)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CertificateList;
