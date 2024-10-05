import React from 'react';
import '../styles/Sidebar.css';

/**
 * Sidebar component displaying a dummy menu with disabled items and a logout button.
 *
 * @component
 * @returns {JSX.Element}
 */
const Sidebar: React.FC = () => {
	return (
		<aside className='sidebar'>
			<h2>Main Menu</h2>
			<ul>
				<li>
					<a href='#item1'>Active Item 1</a>
				</li>
				<li>
					<a href='#item2'>Active Item 2</a>
				</li>
				<li>
					<span className='disabled-text'>Disabled Item 3</span>
				</li>
				<li>
					<span className='disabled-text'>Disabled Item 4</span>
				</li>
				<li>
					<a href='#item3'>Active Item 5</a>
				</li>
			</ul>
			<div className='logout-container'>
				<button className='logout-button'>Logout</button>
			</div>
		</aside>
	);
};

export default Sidebar;
