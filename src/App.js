import React, {useState} from 'react'
import { Layout, Button, Space, Table, Form, Input, Checkbox } from 'antd'

import 'antd/dist/antd.css'
import './App.css'
import './index.js'

const { Header, Content, Footer } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const columns = [
  {
    title: 'Srno',
    dataIndex: 'Srno',
    key: 'Srno',
  },
  {
    title: 'Word',
    dataIndex: 'Word',
    key: 'Word',
  },
  {
    title: 'Count',
    dataIndex: 'Count',
    key: 'Count',
  },
];



function App() {
  const [dataSource, updateDataSource] = React.useState([]);

  const onClick = (event) => {
    const url = "https://raw.githubusercontent.com/invictustech/test/main/README.md"
    
    
    fetch(url)
       .then( r => r.text() )
       
       .then( t => {var array = t.split(' ');
       var obj = {};
    for (var i = 0; i < array.length; i++) {
      obj[array[i]] = (obj[array[i]] || 0) + 1;
    }
    const obj_sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
     //console.log(obj_sorted)
    var data = [];
      for (var i = 0; i < event.count; i++) {
        data.push({
          Srno: i + 1,
          Word: obj_sorted[i][0],
          Count: obj_sorted[i][1],
        });
      } //console.log(data)
      updateDataSource(data);
      } )
      
    }


    return(
      <Layout className="layout">
    <Header style={{color:'white',textAlign:'center'}}>Invictus Assignment</Header>
    <Content style={{ padding: '0 50px' }}>
      <div className="site-layout-content"><br></br><br></br>
      <Form
      
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
       onFinish={onClick}
    >
      <Form.Item
        label="input"
        name="count"
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>

    <Table dataSource={dataSource} columns={columns} />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>made by ayushi</Footer>
  </Layout>
    )
}

export default App