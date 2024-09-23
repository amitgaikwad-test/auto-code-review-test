import React, { useState } from 'react'
import { Form, Input, Button, DatePicker, Select, Checkbox } from 'antd'

const { Option } = Select

const RegistrationForm = () => {
  const [form] = Form.useForm()
  const [agreeTerms, setAgreeTerms] = useState(false)

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        name="username"
        label="Username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        label="Confirm Password"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The two passwords do not match!'))
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="dob" label="Date of Birth">
        <DatePicker />
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Select placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name="agreement" valuePropName="checked">
        <Checkbox onChange={e => setAgreeTerms(e.target.checked)}>
          I agree to the terms and conditions
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={!agreeTerms}>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegistrationForm