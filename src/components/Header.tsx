import React from 'react';
import '../styles/Header.css';

/**
 * Header component that renders a button in the header section.
 * @returns {JSX.Element} The rendered header component.
 */
const Header: React.FC = (): JSX.Element => {
	return (
		<header className='header'>
			<button disabled className='header-btn'>
				Header button
			</button>
		</header>
	);
};

export default Header;
