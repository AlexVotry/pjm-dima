import React from 'react';

import { dimaColors } from '../../../inlineCss/colors';
import { InStylesType } from 'types';

export default function ProgressBar() {
    const renderGradients = () => {
        const gradStyles = [styles.rectangle];
        for (let i = 0; i < 6; i++) {
            for (let y = 0; y < 3; y++) {
                gradStyles.push(styles.circle);
            }
            gradStyles.push(styles.rectangle);
        }
        return gradStyles.map((gradStyle, index) => <div key={index} style={gradStyle} />);
    };

    const animatedBall = () => {
        return <div style={styles.movingBall} />;
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.gradient}>
                {renderGradients()}
                {animatedBall()}
            </div>
        </div>
    );
}

const styles: InStylesType = {
    wrapper: {
        width: '95%',
        height: '38px',
        border: '3px solid #fff',
        borderRadius: '20px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(0, 0, 255, .2) 50%, blue)',
    },
    gradient: {
        position: 'absolute',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '7px',
    },
    rectangle: {
        width: '5px',
        height: '18px',
        backgroundColor: '#fff',
        margin: '0 13px 0 0',
    },
    circle: {
        width: '10px',
        height: '10px',
        borderRadius: '10px',
        backgroundColor: '#fff',
        margin: '0 13px 0 0',
    },
    movingBall: {
        width: '28px',
        height: '28px',
        backgroundColor: dimaColors.palette.primary.main,
        border: '2px solid #fff',
        borderRadius: '28px',
        position: 'absolute',
        left: '40%',
    },
};
