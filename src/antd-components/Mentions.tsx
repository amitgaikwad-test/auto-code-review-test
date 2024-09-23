import type { GetProp, MentionProps } from "antd";
import { Mentions } from "antd";
import Spin from "./Spin";

type MentionsOptionProps = GetProp<MentionProps, "options">[number];

const onChange = (value) => {
  console.log("Change:", value);
};

const onSelect = (option) => {
  console.log("select", option);
};

const Mentions = () => (
  <>
    <Mentions
      style={{ width: "100%" }}
      onChange={onChange}
      onSelect={onSelect}
      defaultValue="@afc163"
      options={[
        {
          value: "afc163",
          label: "afc163",
        },
        {
          value: "zombieJ",
          label: "zombieJ",
        },
        {
          value: "yesmeck",
          label: "yesmeck",
        },
      ]}
    />
    <Spin />
  </>
);

export default Mentions;
