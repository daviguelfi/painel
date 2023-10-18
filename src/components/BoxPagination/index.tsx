import React from 'react';

import { Container } from './styles';

interface BoxPaginationProps {
	children: React.ReactNode;
}

export const BoxPagination: React.FC<BoxPaginationProps> = ({ children }) => {
	return (
		<Container>{ children }</Container>
	);
}

export default BoxPagination;