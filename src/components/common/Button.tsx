import React from 'react';

import { InStylesType } from '../../types';

interface ButtonType {
    onClick: Function;
    text: string;
    color: string;
    size: string;
    bg: string;
}

export default function PjmButton(props: ButtonType) {
    const styles: InStylesType = {
        buttonStyle: {
            display: 'inline-block',
            cursor: 'pointer',
            // borderRadius: '5px',
            background: props.bg,
            height: props.size,
            border: 'none',
            color: props.color,
        },
    };

    const handleClick = () => {
        props.onClick();
    };

    return (
        <div>
            <button style={styles.buttonStyle} onClick={handleClick}>
                {props.text}
            </button>
        </div>
    );
}
