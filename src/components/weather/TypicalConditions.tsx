import React from 'react';

import { typicalConditions } from '../../data/fakeData';
import { dimaColors } from '../../inlineCss/colors';
import { InStylesType } from '../../types';
import StyledCheckbox from '../common/StyledCheckbox';
import WeatherPlayer from './WeatherPlayer/index';

export default function TypicalConditions() {
    const renderItems = (items: string[]) => {
        return items.map(item => {
            return (
                <div style={styles.flexColumn0} key={item}>
                    <div style={styles.flexRow}>
                        <StyledCheckbox boxSize={12} radius={2} />
                        {item}
                    </div>
                </div>
            );
        });
    };

    const renderlist = () => {
        return typicalConditions.map(({ title, items }) => {
            return (
                <div style={styles.flexColumn30} key={title}>
                    <div>{title}</div>
                    {renderItems(items)}
                </div>
            );
        });
    };

    return (
        <>
            <div style={styles.flexRowWithBorder}>{renderlist()}</div>
            <WeatherPlayer />
        </>
    );
}

const styles: InStylesType = {
    flexColumn30: {
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 30px',
        fontSize: '14px',
    },
    flexColumn0: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px 0',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        color: dimaColors.palette.text.primary,
    },
    flexRowWithBorder: {
        display: 'flex',
        flexDirection: 'row',
        color: dimaColors.palette.text.primary,
        width: '100%',
        border: '1px solid #fff',
    },
};
