import React, { useState } from 'react';
import { Layout, Input, List, Button } from 'antd';

const { Header, Content } = Layout;

const Home = () => {
  const [messages, setMessages] = useState([    {      author: 'bot',      text: 'Hi there! How can I help you today?'    },  ]);

  const [input, setInput] = useState('');

  const handleSubmit = () => {
    setMessages([      ...messages,      {        author: 'user',        text: input,      },    ]);
    setInput('');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ backgroundColor: '#fff', padding: 0 }}>
        <h2 style={{ margin: '16px 24px' }}>ChatGPTDemo</h2>
      </Header>
      <Content style={{ margin: '24px 16px 0', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <List
          dataSource={messages}
          renderItem={(item) => (
            <List.Item style={{ padding: '24px' }}>
              <strong style={{ color: item.author === 'bot' ? '#1890ff' : '#f5222d' }}>
                {item.author}:
              </strong>
              {' '}
              {item.text}
            </List.Item>
          )}
        />
        <div style={{ display: 'flex', marginTop: '24px' }}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onPressEnter={handleSubmit}
            style={{ flex: 1 }}
          />
          <Button type="primary" onClick={handleSubmit} style={{ marginLeft: '16px' }}>
            Send
          </Button>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;