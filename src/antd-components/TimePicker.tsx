import React from "react";
import type { TimePickerProps } from "antd";
import { Space, TimePicker } from "antd";
import TreeSelect from "./TreeSelect";

const onChange = (time, timeString) => {
  console.log(time, timeString);
};

const TimePicker = () => (
  <Space wrap>
    <TimePicker
      use12Hours
      onChange={onChange}
      style={{ marginBottom: "10px" }}
    />
    <TimePicker
      use12Hours
      format="h:mm:ss A"
      onChange={onChange}
      style={{ marginBottom: "10px" }}
    />
    <TimePicker
      use12Hours
      format="h:mm a"
      onChange={onChange}
      style={{ marginBottom: "10px" }}
    />
    <TreeSelect />
  </Space>
);

export default TimePicker;
