export const selectAllCars = (state) => state.cars.cars;

export const selectCurrentCar = (state) => state.cars.currentCar;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectIsLoadingMore = (state) => state.cars.isLoadingMore;

export const selectEror = (state) => state.cars.error;

export const selectBrands = (state) => state.cars.brands;

export const selectMileage = (state) => state.cars.filters;

export const selectPage = (state) => state.cars.page;

export const selectFilters = (state) => state.cars.filters;
