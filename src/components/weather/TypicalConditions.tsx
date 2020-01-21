import React from 'react';

import { typicalConditions } from '../../data/fakeData';
import { dimaColors } from '../../inlineCss/colors';
import { inStylesType } from '../../types';
import StyledCheckbox from '../common/StyledCheckbox';
import FutureRadar from './FutureRadar';

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
      )
    })
  }

  const renderlist = () => {
    return typicalConditions.map(({ title, items }) => {
      return (
        <div style={styles.flexColumn30} key={title}>
          <div>{title}</div>
          {renderItems(items)}
        </div>
      )
    })
  }

  return (
    <>
      <div style={styles.flexRow}>
        {renderlist()}
      </div>
      <FutureRadar />
    </>
  )
}

const styles: inStylesType = {
  flexColumn30: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 30px',
    fontSize: '14px'
  },
  flexColumn0: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px 0'
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    color: dimaColors.palette.text.primary,
  },
}

