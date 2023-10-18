import React, { InputHTMLAttributes } from 'react';

import { Container, InputCheckbox, Label } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string,
	id: string,
}

const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
	return (
		<Container>
			<InputCheckbox id={id} {...props} />
			<Label htmlFor={id}>{label}</Label>
		</Container>
	);
}

export default Checkbox;