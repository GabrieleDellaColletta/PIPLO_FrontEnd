import React from 'react';
import '../../App.css';

function Pagination({ employeesPerPage, totalEmployees, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEmployees / employeesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul>
        <li>
            <button onClick={() => {
                currentPage > 1 && ( paginate(currentPage-1) );
                currentPage <= 1 && (paginate(currentPage))  
            }}>Precedente</button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={currentPage === number ? 'active' : 'pagination-button-horizontal'}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
            <button onClick={() => {
                currentPage < pageNumbers.length && ( paginate(currentPage + 1) ); 
                currentPage >= pageNumbers.length && ( paginate(currentPage) ) 
            }}>Successivo</button>
        </li>
        
      </ul>
    </div>
  );
}

export default Pagination;