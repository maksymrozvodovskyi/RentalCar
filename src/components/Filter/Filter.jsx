import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { selectAllCars, selectBrands } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getBrands } from "../../redux/cars/operations";
import Select from "react-select";

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

  const priceOptions = [];

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
      marginBottom: "-4px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      width: "204px",
      border: "1px solid #f7f7f7",
      boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
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
      marginBottom: "-4px",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "12px",
      width: "204px",
      border: "1px solid #f7f7f7",
      boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
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
          }}
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
}
