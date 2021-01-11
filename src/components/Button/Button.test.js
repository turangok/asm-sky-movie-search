import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';
import { fireEvent } from '@testing-library/react';

describe('<Button />', () => {
    const buttonDataId = 'buttonId';
    test('should render without props (Empty)', () => {
        const buttonDataId = 'buttonId';
        const { getByTestId } = render(<Button />);
        expect(getByTestId(buttonDataId)).toBeInTheDocument();
    });

    test('should render the text passed to button component', () => {
        const simpleText = 'Simple Button';
        const { getByText } = render(<Button>Simple Button</Button>);
        expect(getByText(simpleText)).toBeInTheDocument();
    });

    test('should render handleclick func passed to button component', () => {
        const handleClick = jest.fn();
        const { getByTestId } = render(<Button onClick={handleClick} />);
        const button = getByTestId(buttonDataId);

        fireEvent.click(button);

        expect(handleClick).toHaveBeenCalled();
    });
})


