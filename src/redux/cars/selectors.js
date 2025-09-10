export const selectCurrentCar = (state) => {
  state.cars.currentCar;
};

export const selectIsLoading = (state) => {
  state.cars.isLoading;
};

export const selectEror = (state) => {
  state.cars.error;
};
