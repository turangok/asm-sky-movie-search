import React, { useRef } from "react";

import {
    StyledKeywords
} from './SearchBar.styles';

import useOutsideClick from '../../hooks/useOutsideClick'
export default function SeachKeywords({ isShow, options, onSubmit, setIsShow }) {
    const ref = useRef();

    useOutsideClick(ref, () => {
        setIsShow(false)
    });

    return (
        <StyledKeywords ref={ref} isShow={isShow}>
            {options.map((option, i) => (
                <div key={i}
                    onClick={() => {
                        onSubmit({ searchKey: option.value });
                    }}
                >
                    {option.label}
                </div>
            ))}
        </StyledKeywords>
    )
}