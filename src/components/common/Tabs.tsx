import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    fontSize: '12px'
  },
});

interface tabProps {
  tabs: string[];
  chooseTab: Function;
}

export default function PjmTabs({ tabs, chooseTab }: tabProps) {
  const classes = useStyles({ static: true });
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    // console.log('val:', newValue)
    setValue(newValue);
    chooseTab(newValue);
  };

  // const changeTab = () => {
  //   chooseTab(value);
  // }

  const renderTabs = () => {
    return tabs.map(tab => {
      return <Tab key={tab} label={tab} />
    })
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        {renderTabs()}
      </Tabs>
    </Paper>
  );
}