import React from 'react';
import Tweet from './Tweet';
import { getTweet } from '../../services/TweetService';
import { Spin } from 'antd';

// let resource = wrapPromise(getTweet(0, 3000));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function TweetList (props) {
    const [tweet, setTweet] = React.useState('');
    const [id, setId] = React.useState(1);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getTweet(0, 3000).then(data => {
            setTweet(data);
            setLoading(false);
        });
    }, []);

function getNextId(id) {
    return id === 3 ? 0: id + 1;
}

    return (
        <div>
            <button onClick={() => {
                  let nextTweetId = getNextId(id);
                  setLoading(true);
                  getTweet(nextTweetId, getRandomInt(1000, 2000)).then(data => {
                      setTweet(data);
                      setLoading(false);
                      setId(nextTweetId);
                    });
            }}>
                Next tweet
            </button>
            {!isLoading ? <Tweet value={tweet} tweetId={id} /> : <Spin className='align-spinner-center' />}
        </div>
    );
}