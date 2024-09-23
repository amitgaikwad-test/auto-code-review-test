import React from 'react'
import type { TimePickerProps } from 'antd'
import { Space, TimePicker } from 'antd'

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} style={{marginBottom: '10px'}} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} style={{marginBottom: '10px'}} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} style={{marginBottom: '10px'}} />
  </Space>
)

export default App