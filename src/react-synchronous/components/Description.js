import React from 'react';
import { getDescription } from '../../services/TweetService';
import { Card, Spin } from 'antd';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Description () {

    const [description, setDescription] = React.useState('');
    React.useEffect(() => {
        getDescription(getRandomInt(2000, 5000)).then(data => {
            setDescription(data);
        });
    }, []);

    if (!description) {
        return <Spin className='align-spinner-center' />;
    }

    return (
        <div>
          <Card title="About me" bordered={false}>
            <p>{description}</p>
         </Card>
        </div>
    );
}