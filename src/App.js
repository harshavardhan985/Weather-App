import React, { useState } from 'react';
import { Layout, Form, Input, Button } from 'antd';
import Weather from './components/Weather';

const { Header, Content } = Layout;

const App = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (values) => {
    setLocation(values.location);
  };

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>Simple Weather App</h1>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
          <Form layout="inline" onFinish={handleSubmit}>
            <Form.Item label="Location" name="location">
              <Input placeholder="Enter location" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Set Location
              </Button>
            </Form.Item>
          </Form>
          {location && <Weather location={location} />}
        </div>
      </Content>
    </Layout>
  );
};

export default App;
