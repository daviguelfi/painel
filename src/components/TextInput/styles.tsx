import styled from 'styled-components';

export const Container = styled.input`
	background: #1616160A;
	border-radius: 4px 4px 0 0;
	border: 0;
	box-shadow: inset 0px -1px 0px #4B4B4B;
	color: #4B4B4B;
	font-size: 14px;
	font-weight: 400;
	line-height: 170%;
	min-width: 300px;
	padding: 4px 8px;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: #4B4B4B;
	}
`;
