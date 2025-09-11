import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { selectBrands, selectMileage } from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import { getBrands, getCars } from "../../redux/cars/operations";
import Select, { components } from "react-select";
import MileageInput from "../MileageInput/MileageInput";
import { customSelectBrandStyles } from "./customSelectBrandStyles";
import { customSelectPriceStyles } from "./customSelectPriceStyles";
import CustomSingleValue from "../CustomSingleValue/CustomSingleValue";
import { priceOptions } from "../../constants/index";
import { setFilters } from "../../redux/cars/slice";

export default function Filter() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const filters = useSelector(selectMileage);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  const options = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const handleBrandChange = (option) => {
    dispatch(setFilters({ brand: option?.value || "" }));
  };

  const handlePriceChange = (option) => {
    dispatch(setFilters({ rentalPrice: option?.value || "" }));
  };

  const handleSearch = () => {
    dispatch(
      getCars({
        page: 1,
        limit: 12,
        brand: filters.brand,
        price: filters.rentalPrice,
        minMileage: filters.minMileage,
        maxMileage: filters.maxMileage,
      })
    );
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
          value={options.find((o) => o.value === filters.brand) || null}
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
          value={
            priceOptions.find((o) => o.value === filters.rentalPrice) || null
          }
          onChange={handlePriceChange}
        />
      </div>
      <MileageInput />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
