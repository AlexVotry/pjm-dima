import React from 'react';

import { dimaColors } from '../../inlineCss/colors';
import { InStylesType } from '../../types';
import PjmButton from '../common/Button';

interface TabType {
    onClick: Function;
    isActive: string;
    label: string;
}
export default function Tab(props: TabType) {
    let tabBackground = dimaColors.palette.background.default;
    let tabText = dimaColors.palette.text.disabled;
    let tabHighlight = styles.highlight;

    if (props.isActive == props.label) {
        tabText = dimaColors.palette.text.primary;
        tabBackground = dimaColors.palette.background.light;
        tabHighlight = styles.activeHighlight;
    }

    const handleClick = () => {
        props.onClick(props.label);
    };

    return (
        <div className="tab" style={styles.flexColumn}>
            <div className="highlight" style={tabHighlight} />
            <PjmButton onClick={handleClick} text={props.label} color={tabText} bg={tabBackground} size={'30px'} />
        </div>
    );
}

const styles: InStylesType = {
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        marginRight: '2px',
    },
    highlight: {
        width: '100%',
        height: '7px',
        background: dimaColors.palette.background.light,
    },
    activeHighlight: {
        width: '100%',
        height: '7px',
        background: dimaColors.palette.primary.main,
    },
};
