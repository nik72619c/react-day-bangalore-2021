import React from 'react';
import { Comment, Avatar, Tooltip } from 'antd';
import ProfilePic from '../../assets/profiletwitterimg.jpg'
import { LikeFilled, DislikeFilled } from '@ant-design/icons';

export default function Tweet ({ value }) {
    let tweetData = value.read();

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={() => {}}>
            {React.createElement(LikeFilled)}
            <span className="comment-action">{10}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={() => {}}>
            {React.createElement(DislikeFilled)}
            <span className="comment-action">{0}</span>
          </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
      ];

    return (
        <Comment
        actions={actions}
      author={<a>Nikhil Sharma</a>}
      avatar={
        <Avatar
          src={ProfilePic}
          alt="Nikhil Sharma"
        />
      }
      content={
        <p>
          {tweetData.tweet}
        </p>
      }
      datetime={
          <span>Few seconds ago</span>
      }
    />
    );
}