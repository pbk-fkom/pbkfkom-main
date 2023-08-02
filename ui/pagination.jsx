import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationArea = ({ handlePageClick, pageCount }) => {
  return (
      <ReactPaginate
        nextLabel={<><i className="far fa-angle-right"></i></>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<><i className="far fa-angle-left"></i></>}
        pageClassName="page-items"
        pageLinkClassName="page-links"
        previousClassName="page-items"
        previousLinkClassName="page-links"
        nextClassName="page-items"
        nextLinkClassName="page-links"
        breakLabel="..."
        breakClassName="page-items"
        breakLinkClassName="page-links"
        containerClassName="paginasstionss"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
  );
};

export default PaginationArea;