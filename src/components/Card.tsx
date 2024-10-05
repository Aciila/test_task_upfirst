import React, { useState } from 'react';
import '../styles/Card.css';

interface HackerNewsItem {
	title: string;
	author: string;
	objectID: string;
	created_at: string;
}

interface CardProps {
	item: HackerNewsItem;
	removeCard: (id: string) => void;
}

/**
 * Card component that displays individual item data.
 * Can be expanded or collapsed by clicking on it.
 * @param {HackerNewsItem} item - The item data to display in the card.
 * @param {Function} removeCard - Function to remove the card when the button is clicked.
 * @returns {JSX.Element} The rendered card component.
 */
const Card: React.FC<CardProps> = ({ item, removeCard }): JSX.Element => {
	const [expanded, setExpanded] = useState(false);

	/**
	 * Toggle the expanded state of the card.
	 */
	const toggleExpanded = (): void => {
		setExpanded(!expanded);
	};

	return (
		<div
			className={`card ${expanded ? 'expanded' : ''}`}
			onClick={toggleExpanded}
		>
			<div className='card-header'>
				<div className='status'>Status</div>
				<div>{item.title}</div>
				<div className='time-date'>
					{new Date(item.created_at).toLocaleDateString('en-GB', {
						timeZone: 'CET',
					})}
				</div>
			</div>
			<div className='card-subject'>{item.author}</div>
			{expanded && (
				<div className='card-body'>
					<div className='card-buttons'>
						<button onClick={() => removeCard(item.objectID)}>Remove</button>
						<button disabled>More Details</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;
