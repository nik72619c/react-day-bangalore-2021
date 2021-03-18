import React, { Suspense, SuspenseList } from 'react';
import { Spin, Tabs } from 'antd';
import TweetList from './components/TweetList';
import Description from './components/Description';
import UserInfo from './components/UserInfo';
import MetaDescription from './components/MetaDescription';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ConcurrentApp () {
    return (
      <div className='card-container'>
      <Tabs defaultActiveKey="1" onChange={callback} type='card'>
        <TabPane tab="Profile" key="1">
          <UserInfo />
        </TabPane>
        <TabPane tab="About me" key="2">
          <SuspenseList revealOrder="forwards">
          <Suspense fallback={<Spin />}>
            <Description />
          </Suspense>
          <Suspense fallback={<Spin />}>
            <MetaDescription />
          </Suspense>
          </SuspenseList>
        </TabPane>
        <TabPane tab="Tweets" key="3">
          <Suspense fallback={<div>this is a fallback...</div>}>
         <TweetList />
         </Suspense>
        </TabPane>
      </Tabs>
      </div>
    );
}