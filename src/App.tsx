import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Card from './components/Card';
import Pagination from './components/Pagination';
import './index.css';

interface HackerNewsItem {
	title: string;
	author: string;
	objectID: string;
	created_at: string;
}

const ITEMS_PER_PAGE = 10;

/**
 * Main application component that fetches data, handles pagination, and renders child components.
 * @returns {JSX.Element} The main structure of the application.
 */
const App: React.FC = (): JSX.Element => {
	const [items, setItems] = useState<HackerNewsItem[]>([]);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		const fetchItems = async () => {
			const response = await axios.get(
				`https://hn.algolia.com/api/v1/search?tags=front_page`
			);

			const sortedByDateArray = response.data.hits.sort(
				(a: HackerNewsItem, b: HackerNewsItem) => {
					return (
						new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
					);
				}
			);
			setItems(sortedByDateArray);
		};

		fetchItems();
	}, []);

	const currentItems = items.slice(
		currentPage * ITEMS_PER_PAGE,
		(currentPage + 1) * ITEMS_PER_PAGE
	);

	/**
	 * Function to go to the next page.
	 */
	const nextPage = (): void => {
		if ((currentPage + 1) * ITEMS_PER_PAGE < items.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	/**
	 * Function to go to the previous page.
	 */
	const prevPage = (): void => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	/**
	 * Function to remove a card from the list.
	 * @param {string} id - The unique ID of the item to remove.
	 */
	const removeCard = (id: string): void => {
		setItems(items.filter((item) => item.objectID !== id));
	};

	return (
		<div className='app-container'>
			<Sidebar />
			<div className='content-wrapper'>
				<Header />
				<main className='main-content'>
					{currentItems.map((item) => (
						<Card key={item.objectID} item={item} removeCard={removeCard} />
					))}
				</main>
				<Footer>
					<Pagination
						currentPage={currentPage}
						totalPages={Math.ceil(items.length / ITEMS_PER_PAGE)}
						nextPage={nextPage}
						prevPage={prevPage}
					/>
				</Footer>
			</div>
		</div>
	);
};

export default App;
