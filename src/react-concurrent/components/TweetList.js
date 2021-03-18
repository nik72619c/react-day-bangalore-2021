import React from 'react';
import Tweet from './Tweet';
import wrapPromise from '../wrapPromise';
import { getTweet } from '../../services/TweetService';
import { Spin } from 'antd';

let resource = wrapPromise(getTweet(0, 3000));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function TweetList (props) {
    const [tweet, setTweet] = React.useState(resource);
    const [id, setId] = React.useState(1);
    const [startTransition, isPending] = React.useTransition({
        timeoutMs: 2000
      });

function getNextId(id) {
    return id === 3 ? 0: id + 1;
}

    return (
        <div>
            <button disabled={isPending} onClick={() => {
                  startTransition(() => {
                    let nextTweetId = getNextId(id);
                    let tweetPromise = wrapPromise(getTweet(nextTweetId, 1000));
                    setTweet(tweetPromise);
                    setId(nextTweetId);
                  });
            }}>
                next tweet
            </button>
            <React.Suspense fallback={<Spin />}>
              <Tweet value={tweet} />
            </React.Suspense>
        </div>
    );
}