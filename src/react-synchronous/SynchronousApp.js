import React from 'react';
import { Tabs } from 'antd';
import TweetList from './components/TweetList';
import Description from './components/Description';
import UserInfo from './components/UserInfo';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function SynchronousApp () {
    return (
      <div className='card-container'>
      <Tabs defaultActiveKey="1" onChange={callback} type='card'>
        <TabPane tab="Profile" key="1">
          <UserInfo />
        </TabPane>
        <TabPane tab="About me" key="2">
          <Description />
        </TabPane>
        <TabPane tab="Tweets" key="3">
         <TweetList />
        </TabPane>
      </Tabs>
      </div>
    );
}