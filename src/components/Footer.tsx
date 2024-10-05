import React, { ReactNode } from 'react';
import '../styles/Footer.css';

interface FooterProps {
	children: ReactNode;
}

/**
 * Footer component that wraps around pagination or any other footer content.
 * @param {ReactNode} children - The child components passed into the footer.
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer: React.FC<FooterProps> = ({ children }): JSX.Element => {
	return <footer className='footer'>{children}</footer>;
};

export default Footer;
