import React, { useState } from 'react';

import PjmTabs from '../common/Tabs';
import TypicalConditions from './TypicalConditions';
import FutureRadar from './FutureRadar';

export default function LineOutages() {
    const [tab, setTab] = useState('Typical Conditions');

    const chooseTab = (val: string) => {
        setTab(val);
    };

    const renderList = () => {
        return tab === 'Typical Conditions' ? <TypicalConditions /> : null;
    };

    return (
        <>
            <PjmTabs
                tabs={['Typical Conditions', 'Severe Conditions', 'Forecasting']}
                chooseTab={chooseTab}
                isActive={tab}
            />
            {renderList()}
            <FutureRadar />
        </>
    );
}
