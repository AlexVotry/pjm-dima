import React, { useState } from 'react';

import { InStylesType } from 'types';
import playIcon from '../../../../public/assets/weather/play.png';
import pauseIcon from '../../../../public/assets/weather/pause.png';

interface PlayButtonType {
    onClick: Function;
}

const PlayButton = (props: PlayButtonType) => {
    const [play, setPlay] = useState(true);

    const styles: InStylesType = {
        buttonStyle: {
            display: 'inline-block',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
        },
    };

    const handleClick = () => {
        setPlay(!play);
        props.onClick();
    };

    const buttonIcon = () => {
        const currentIcon = play ? playIcon : pauseIcon;
        return <img src={currentIcon} alt="button icon" />;
    };

    return (
        <button style={styles.buttonStyle} type="button" onClick={handleClick}>
            {buttonIcon()}
        </button>
    );
};

export default PlayButton;
