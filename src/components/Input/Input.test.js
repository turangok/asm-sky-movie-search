import React from 'react';
import { render } from '@testing-library/react';
import { Input } from '.';

describe('<Input />', () => {

    test('should render without props (Empty)', () => {
        const dataId = 'inputId';
        const { getByTestId } = render(<Input />);
        expect(getByTestId(dataId)).toBeInTheDocument();
    });

})
