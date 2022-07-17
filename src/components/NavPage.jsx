import React from "react";

const NavPage = ({ page, setPage }) => {
  const minusPage = () => {
    if (page === 1) return;
    setPage((prevPage) => {
      return prevPage - 1;
    });
  };

  const plusPage = () => {
    setPage((prevPage) => {
      return prevPage + 1;
    });
  };

  return (
    <header className="d-flex justify-content-between align-items-center mt-5">
      <p>Page: {page}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary btn-sm" onClick={minusPage}>
          Previous
        </button>
        <button
          style={{ width: "70px" }}
          className="btn btn-primary  btn-sm btn-block"
          onClick={plusPage}
        >
          Next
        </button>
      </div>
    </header>
  );
};

export default NavPage;
