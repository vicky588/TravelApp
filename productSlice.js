// const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// export const fetchDogData = createAsyncThunk(() => {
//   return fetch("https://dog.ceo/api/breeds/image/random")
//     .then((res) => res.json())
//     .then((result) => result);
// });

// const DogData = createSlice({
//   name: "Dog Data",
//   initialState: {
//     data:null,
//     isLoader: false,
//     isError: false,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchDogData.pending, (state, action) => {
//       state.isLoader = true;
//     });

//     builder.addCase(fetchDogData.fulfilled, (state, action) => {
//       state.isLoader = false;
//       state.data = action.payload;
//     });

//     builder.addCase(fetchDogData.error, (state, action) => {
//       state.isLoader = false;
//       state.isError = true;
//     });
//   },
// });

// export default DogData.reducer;