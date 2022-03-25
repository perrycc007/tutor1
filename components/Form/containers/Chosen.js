import React from 'react';

import ChosenItem from '../../Input/ChooseItem'
import { useStore } from '../../../hooks-store/store'
import classes from './Chosen.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';





const Chosen = props => {
  const state = useStore()[0];
  const oral = state.subjects.filter((subject)=>{
    return subject.group == "oral"
  });
  
  const common = state.subjects.filter((subject)=>{
    return subject.group == "common"
  });
  return (
  <Tabs>
    <TabList>
      <Tab>補習</Tab>
      <Tab>會話</Tab>
    </TabList>

    <TabPanel>
      {common.map(box => (
        <ChosenItem
          key={box.id}
          id={box.id}
          title={box.title}
          description={box.description}
          isChosen={box.isChosen}
        />
      ))}
    </TabPanel>
    <TabPanel>
    {oral.map(box => (
        <ChosenItem
          key={box.id}
          id={box.id}
          title={box.title}
          description={box.description}
          isChosen={box.isChosen}
        />
      ))}
    </TabPanel>
  </Tabs>
  );
};

export default Chosen;
