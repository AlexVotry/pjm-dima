import React, { useState } from 'react';

import PjmTabs from '../common/Tabs';
import PjmTable from '../common/Table';
import { visableOutages, offMapOutages } from '../../data/fakeData';
import { ObjAnyType } from '../../types';
import KVFilter from './KVFilter';


export default function LineOutages() {
  const [tab, setTab] = useState(0);
  const tableTitles = ['Name', 'Zone', 'kV', 'Status'];

  const table1Array = parseData(visableOutages);
  const table2Array = parseData(offMapOutages);

  function parseData(data: ObjAnyType[]) {
    const tableArray: ObjAnyType[] = [];
    data.forEach(r => {
      let table1Obj: ObjAnyType = {};
      let index = 0;
      for (let i in r) {
        table1Obj[`column${index}`] = r[i];
        index++;
      }
      tableArray.push(table1Obj);
    })
    return tableArray;
  }

  const chooseTab = (val: number) => {
    setTab(val);
  }

  const renderTable = () => {
    const currentRows = tab === 0 ? table1Array : table2Array;
    return <PjmTable rows={currentRows} titles={tableTitles} />
  }

  return (
    <>
      <KVFilter />
      <PjmTabs tabs={["Visible Outages", "Outages Off Map"]} chooseTab={chooseTab} />
      {renderTable()}
    </>
  );
}