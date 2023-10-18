import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	current?: boolean;
	action?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, current, action, ...props }) => {
	return (
		<Container {...props} current={current} action={action}>{children}</Container>
	);
}

export default Button;