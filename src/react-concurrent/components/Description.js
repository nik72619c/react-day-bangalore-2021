import React from 'react';
import wrapPromise from '../wrapPromise';
import { getDescription } from '../../services/TweetService';
import { Card } from 'antd';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resource = wrapPromise(getDescription(getRandomInt(2000, 5000)));

export default function Description () {

    let data = resource.read();
    return (
        <div>
          <Card title="About me" bordered={false}>
            <p>{data}</p>
         </Card>
        </div>
    );
}