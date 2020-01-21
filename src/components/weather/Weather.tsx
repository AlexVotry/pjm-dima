import React, { useState } from 'react';

import PjmTabs from '../common/Tabs';
import TypicalConditions from './TypicalConditions';
import { dimaColors } from '../../inlineCss/colors';
import { inStylesType } from '../../types';

export default function LineOutages() {
  const [tab, setTab] = useState(0);

  const chooseTab = (val: number) => {
    setTab(val);
  }

  const renderList = () => {
    return tab === 0 ? <TypicalConditions /> : null;
  }

  return (
    <>
      <PjmTabs tabs={["Typical Conditions", "Severe Conditions", "Forecasting"]} chooseTab={chooseTab} />
      <div style={styles.boxOutline}>
        {renderList()}
      </div>
    </>
  );
}

const styles: inStylesType = {
  boxOutline: {
    width: '100%',
    border: '1px solid #fff'
  },
}