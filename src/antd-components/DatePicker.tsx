import React from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Flex } from "antd";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const defaultValue = [
  dayjs("2000-01-01"),
  dayjs("2000-01-03"),
  dayjs("2000-01-05"),
];

const DatePicker = () => (
  <Flex vertical gap={10}>
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
      size="small"
    />
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
    />
    <DatePicker
      multiple
      onChange={onChange}
      maxTagCount="responsive"
      defaultValue={defaultValue}
      size="large"
    />
    <button onClick={() => console.log("Dates cleared")}>Clear Dates</button>
  </Flex>
);

export default DatePicker;
