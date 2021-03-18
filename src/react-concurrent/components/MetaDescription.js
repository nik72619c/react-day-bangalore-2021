import React from 'react';
import wrapPromise from '../wrapPromise';
import { getMetaDescription } from '../../services/TweetService';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const resource = wrapPromise(getMetaDescription(getRandomInt(2000, 5000)));

export default function MetaDescription () {

    let data = resource.read();

    return (
        <div>{data}</div>
    );
}