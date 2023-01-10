import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('카운터 컴포넌트 테스트', () => {
	let counterElement: HTMLElement;
	let plusButtonElement: HTMLElement;
	let minusButtonElement: HTMLElement;
	let onOffButtonElement: HTMLElement;

	beforeEach(() => {
		render(<App />);
		counterElement = screen.getByTestId('counter');
		plusButtonElement = screen.getByTestId('plus-button');
		minusButtonElement = screen.getByTestId('minus-button');
		onOffButtonElement = screen.getByTestId('on-off-button');
	});

	it('카운터의 초기값은 0인가?', () => {
		expect(counterElement).toHaveTextContent('0');
	});

	describe('카운터 컴포넌트 스타일 테스트', () => {
		it('플러스 버튼 텍스트가 올바른가?', () => {
			expect(plusButtonElement).toHaveTextContent('+');
		});
		it('마이너스 버튼 텍스트가 올바른가?', () => {
			expect(minusButtonElement).toHaveTextContent('-');
		});
		it('on/off 버튼 텍스트가 올바른가?', () => {
			expect(onOffButtonElement).toHaveTextContent('on/off');
		});
		it('on/off 버튼 색상이 파란색인가?', () => {
			expect(onOffButtonElement).toHaveStyle({ backgroundColor: 'blue' });
		});
	});

	describe('카운터 컴포넌트 기능 테스트', () => {
		it('플러스 버튼 클릭시 숫자가 1증가 하는가?', () => {
			fireEvent.click(plusButtonElement);
			expect(counterElement).toHaveTextContent('1');
		});
		it('마이너스 버튼 클릭시 숫자가 1감소 하는가?', () => {
			fireEvent.click(minusButtonElement);
			expect(counterElement).toHaveTextContent('-1');
		});
		it('on/off 버튼 클릭시 플러스 마이너스 버튼이 비활성화 되는가?', () => {
			fireEvent.click(onOffButtonElement);
			expect(plusButtonElement).toBeDisabled();
			expect(minusButtonElement).toBeDisabled();
			fireEvent.click(onOffButtonElement);
			expect(plusButtonElement).toBeEnabled();
			expect(minusButtonElement).toBeEnabled();
		});
	});
});
// test('카운터의 초기값은 0인가?', () => {
// 	render(<App />);
// 	const counterElement = screen.getByTestId('counter');
// 	expect(counterElement).toHaveTextContent('0');
// });

// test('마이너스 버튼 텍스트가 올바른가?', () => {
// 	render(<App />);
// 	const buttonElement = screen.getByTestId('minus-button');
// 	expect(buttonElement).toHaveTextContent('-');
// });

// test('플러스 버튼 텍스트가 올바른가?', () => {
// 	render(<App />);
// 	const buttonElement = screen.getByTestId('plus-button');
// 	expect(buttonElement).toHaveTextContent('+');
// });

// test('플러스 버튼 클릭시 숫자가 1증가 하는가?', () => {
// 	render(<App />);
// 	const buttonElement = screen.getByTestId('plus-button');
// 	expect(buttonElement).toHaveTextContent('+');
// 	fireEvent.click(buttonElement);
// 	const counterElement = screen.getByTestId('counter');
// 	expect(counterElement).toHaveTextContent('1');
// });

// test('마이너스 버튼 클릭시 숫자가 1감소 하는가?', () => {
// 	render(<App />);
// 	const buttonElement = screen.getByTestId('minus-button');
// 	expect(buttonElement).toHaveTextContent('-');
// 	fireEvent.click(buttonElement);
// 	const counterElement = screen.getByTestId('counter');
// 	expect(counterElement).toHaveTextContent('-1');
// });

// test('on/off 버튼 색상이 파란색인가?', () => {
// 	render(<App />);
// 	const onOffButtonElement = screen.getByTestId('on-off-button');
// 	expect(onOffButtonElement).toHaveTextContent('on/off');
// 	expect(onOffButtonElement).toHaveStyle({ backgroundColor: 'blue' });
// });

// test('on/off 버튼 클릭시 플러스 마이너스 버튼이 비활성화 되는가?', () => {
// 	render(<App />);
// 	const onOffButtonElement = screen.getByTestId('on-off-button');
// 	fireEvent.click(onOffButtonElement);
// 	const plusButtonElement = screen.getByTestId('plus-button');
// 	const minusButtonElement = screen.getByTestId('minus-button');
// 	expect(plusButtonElement).toBeDisabled();
// 	expect(minusButtonElement).toBeDisabled();
// 	fireEvent.click(onOffButtonElement);
// 	expect(plusButtonElement).toBeEnabled();
// 	expect(minusButtonElement).toBeEnabled();
// });
