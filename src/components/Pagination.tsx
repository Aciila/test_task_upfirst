import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	nextPage: () => void;
	prevPage: () => void;
}

/**
 * Pagination component that allows navigation between pages.
 * Displays the current page and buttons to move to the next or previous page.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 * @param {Function} nextPage - Function to go to the next page.
 * @param {Function} prevPage - Function to go to the previous page.
 * @returns {JSX.Element} The rendered pagination component.
 */
const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	totalPages,
	nextPage,
	prevPage,
}): JSX.Element => {
	return (
		<div className='pagination'>
			<button onClick={prevPage} disabled={currentPage === 0}>
				Previous
			</button>
			<span>
				Page {currentPage + 1} of {totalPages}
			</span>
			<button onClick={nextPage} disabled={currentPage + 1 === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
