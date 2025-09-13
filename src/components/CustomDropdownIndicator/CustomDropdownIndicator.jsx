import { components } from "react-select";

export default function CustomDropdownIndicator(props) {
  const { menuIsOpen } = props.selectProps;

  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="13"
        height="7"
        style={{
          transform: menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s ease",
          marginRight: "8px",
        }}
      >
        <use href="/icons.svg#icon-chevron-down" />
      </svg>
    </components.DropdownIndicator>
  );
}
