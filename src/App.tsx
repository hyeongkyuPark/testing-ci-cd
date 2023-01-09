import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
	const [count, setCount] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);

	const handleClickMinus = (): void => {
		setCount((prev) => prev - 1);
	};

	const handleClickPlus = (): void => {
		setCount((prev) => prev + 1);
	};

	const toggleDisabled = (): void => {
		setIsDisabled((prev) => !prev);
	};

	return (
		<div className="App">
			<h3 data-testid="counter">{count}</h3>
			<button
				data-testid="minus-button"
				onClick={handleClickMinus}
				disabled={isDisabled}
			>
				-
			</button>
			<button
				data-testid="plus-button"
				onClick={handleClickPlus}
				disabled={isDisabled}
			>
				+
			</button>
			<button
				style={{ backgroundColor: 'blue' }}
				data-testid="on-off-button"
				onClick={toggleDisabled}
			>
				on/off
			</button>
		</div>
	);
};

export default App;
