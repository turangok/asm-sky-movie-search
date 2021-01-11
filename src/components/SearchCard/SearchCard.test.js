import React from 'react';
import { render } from '@testing-library/react';
import { SearchCard } from '.';

describe('<SearchCard />', () => {

    test('should render without props (Empty)', () => {
        const dataId = 'searchCardId';
        const { getByTestId } = render(<SearchCard />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

    test('should have subcomponents', () => {
        const dataId = 'searchCardId';
        const { getByTestId } = render(<SearchCard />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });
})


