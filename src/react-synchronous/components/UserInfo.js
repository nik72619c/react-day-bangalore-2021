import React from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import ProfilePic from '../../assets/profiletwitterimg.jpg';
import ProfileBackground from '../../assets/profilebg.jpeg';

const { Meta } = Card;
export default function UserInfo() {
    return (
        <div>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src={ProfileBackground}
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <MailOutlined />,
            ]}
          >
            <Meta
              avatar={<Avatar src={ProfilePic} />}
              title="Nikhil Sharma"
              description="Software Engineer at Postman"
            />
          </Card>
        </div>
    );
}