import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/course.css";

const Breadcrumb = () => {
  const location = useLocation();

  // Phân tích đường dẫn URL
  const pathnames = location.pathname.split("/").filter((x) => x);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="detail-banner-main">
      <div className="breadcrump">
        <span>
          {/* Link về trang chủ */}
          <span className="breadcrump-link">
            <Link to="/">Home</Link>
          </span>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={to}>
                <span className="breadcrump-separator">&gt;</span>
                <span className="breadcrump-link">
                  {isLast ? (
                    <span>{capitalizeFirstLetter(value)}</span> // Không tạo link cho phần tử cuối
                  ) : (
                    <Link to={to}>{value}</Link>
                  )}
                </span>
              </React.Fragment>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Breadcrumb;
