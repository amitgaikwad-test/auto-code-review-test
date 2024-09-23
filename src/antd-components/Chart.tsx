import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
import { Select, DatePicker, Button } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;
const { Option } = Select;

const ChartComponent = ({ apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dateRange, setDateRange] = useState([
    moment().subtract(7, "days"),
    moment(),
  ]);
  const [metric, setMetric] = useState("sales");

  useEffect(() => {
    fetchData();
  }, [dateRange, metric]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${apiEndpoint}?start=${dateRange[0].format(
          "YYYY-MM-DD"
        )}&end=${dateRange[1].format("YYYY-MM-DD")}&metric=${metric}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const config = {
    data,
    xField: "date",
    yField: "value",
    seriesField: "category",
    yAxis: {
      label: {
        formatter: (v) =>
          `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ["#1979C9", "#D62A0D", "#FAA219"],
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleMetricChange = (value) => {
    setMetric(value);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <RangePicker
          value={dateRange}
          onChange={handleDateChange}
          style={{ marginRight: "10px" }}
        />
        <Select
          value={metric}
          onChange={handleMetricChange}
          style={{ width: 120, marginRight: "10px" }}
        >
          <Option value="sales">Sales</Option>
          <Option value="revenue">Revenue</Option>
          <Option value="customers">Customers</Option>
        </Select>
        <Button onClick={handleRefresh}>Refresh</Button>
      </div>
      <Line {...config} loading={loading} />
    </div>
  );
};

export default ChartComponent;
