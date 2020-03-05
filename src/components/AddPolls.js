import React from'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { Card } from 'antd';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!',
  },
  number: {
    range: 'Must be between ${min} and ${max}',
  },
};

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }

const onFinish = values => {
    console.log(values);
  };

const Register=() =>{

return(

<div style={{display:'flex',alignItems:'center', justifyContent:'center',margin:'0 24 0 24', marginTop:'15%'}} >
    
<Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
<Form.Item name={['user', 'name']} label="Legistative Matter" rules={[{ required: true }]}>
  <Input />
</Form.Item>
<Form.Item name={['user', 'email']} label="Description" rules={[{ type: 'email' }]}>
  <Input />
</Form.Item>
<Form.Item name={['user', 'age']} label="    " rules={[{ type: 'number', min: 0, max: 99 }]}>
<div className="site-card-border-less-wrapper">
    <Card title="Target Audience" bordered={false} style={{ width: 300 }}>
      <p>Doctors</p>
      <p>Farmers</p>
      <p>Nurses</p>
    </Card>
  </div>
</Form.Item>
<Form.Item name={['user', 'website']} label="Date">
<RangePicker
      showTime={{ format: 'HH:mm' }}
      format="YYYY-MM-DD HH:mm"
      onChange={onChange}
      onOk={onOk}
    />
</Form.Item>
<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
  <Button type="primary" htmlType="submit">
    ADD
  </Button>
</Form.Item>
</Form></div>);

};



export default Register;



