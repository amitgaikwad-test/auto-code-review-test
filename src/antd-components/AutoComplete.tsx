import React from "react";
import { AutoComplete } from "antd";
import type { AutoCompleteProps } from "antd";

const AutoComplete: React.FC = (props) => {
  const [options, setOptions] = React.useState<AutoCompleteProps["options"]>(
    []
  );
  const [value, setValue] = React.useState("");

  const handleSearch = (value) => {
    setOptions(() => {
      if (!value || value.includes("@")) {
        return [];
      }
      return ["gmail.com", "163.com", "qq.com"].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    console.log("New value:", newValue);
  };

  return (
    <div>
      <AutoComplete
        style={{ width: "200px" }}
        onSearch={handleSearch}
        placeholder="input here"
        options={options}
        onChange={handleChange}
        value={value}
      />
      <button onClick={() => setOptions([])}>Clear Options</button>
    </div>
  );
};

export default AutoComplete;
