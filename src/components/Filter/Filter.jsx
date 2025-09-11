import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { selectBrands } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getBrands } from "../../redux/cars/operations";
import Select, { components } from "react-select";
import MileageInput from "../MileageInput/MileageInput";
import { customSelectBrandStyles } from "./customSelectBrandStyles";
import { customSelectPriceStyles } from "./customSelectPriceStyles";
import CustomSingleValue from "../CustomSingleValue/CustomSingleValue";
import { priceOptions } from "../../constants/index";

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

  const handleBrandChange = (option) => {
    setSelectedBrand(option);
  };

  const handlePriceChange = (option) => {
    setSelectedPrice(option);
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
            SingleValue: (props) => (
              <CustomSingleValue {...props} prefix="To $" /> // тут передаю префікс "To $"" аби відображалось в селекті + виніс кастомний компонент
            ),
          }}
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </div>
      <MileageInput />
    </div>
  );
}
