import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { selectAllCars, selectBrands } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getBrands } from "../../redux/cars/operations";
import Select, { components } from "react-select";

export default function Filter() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const options = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = [
    { value: 30, label: "30" },
    { value: 40, label: "40" },
    { value: 50, label: "50" },
    { value: 60, label: "60" },
    { value: 70, label: "70" },
    { value: 80, label: "80" },
    { value: 90, label: "90" },
    { value: 100, label: "100" },
    { value: 110, label: "110" },
    { value: 120, label: "120" },
  ];

  const handleBrandChange = (option) => {
    setSelectedBrand(option);
  };

  const handlePriceChange = (option) => {
    setSelectedPrice(option);
  };

  const customSelectBrandStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
      width: "204px",
      height: "44px",
      background: "#f7f7f7",
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
      boxShadow: "none",
      cursor: "pointer",
      border: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: state.isSelected ? "#101828" : "#8d929a",
      backgroundColor: "#fff",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#fff",
      },
      padding: "0 18px",
      marginBottom: "12px",
      ":last-child": {
        marginBottom: 0,
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      width: "204px",
      border: "1px solid #f7f7f7",
      boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provider) => ({
      ...provider,
      padding: "14px 0",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
    }),
  };

  const customSelectPriceStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "12px",
      width: "196px",
      height: "44px",
      background: "#f7f7f7",
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
      boxShadow: "none",
      cursor: "pointer",
      border: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: state.isSelected ? "#101828" : "#8d929a",
      backgroundColor: "#fff",
      cursor: "pointer",
      ":active": {
        backgroundColor: "#fff",
      },
      marginBottom: "8px",
      padding: "0 18px",
      ":last-child": {
        marginBottom: 0,
      },
    }),
    menu: (provided) => ({
      ...provided,
      padding: "14px 0",
      borderRadius: "12px",
      width: "196px",
      border: "1px solid #f7f7f7",
      boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: "160px",
      width: "196px",
      overflowY: "auto",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: "Manrope, sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: 1.25,
      color: "#101828",
    }),
  };

  const CustomSingleValue = (props) => (
    <components.SingleValue {...props}>
      To ${props.data.value}
    </components.SingleValue>
  );

  return (
    <div className={css.wrapper}>
      <div className={css.selectBrandWrap}>
        <label className={css.label}>Car brand</label>
        <Select
          options={options}
          placeholder="Choose a brand"
          styles={customSelectBrandStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
          value={selectedBrand}
          onChange={handleBrandChange}
        />
      </div>
      <div className={css.selectWrap}>
        <label className={css.label}>Price/ 1 hour</label>
        <Select
          options={priceOptions}
          placeholder="Choose a price"
          styles={customSelectPriceStyles}
          components={{
            IndicatorSeparator: () => null,
            SingleValue: CustomSingleValue,
          }}
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}
