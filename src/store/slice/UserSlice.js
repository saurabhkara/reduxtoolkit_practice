import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      console.log(action.payload);
      state.users = [...state.users, action.payload];
      return state;
    },
    setUser(state, action) {
      state.users = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
  },
});

// Action creators are generated for each case reducer function
//Every action creator is a function that creates an action.
//The action creator function takes the payload and returns an action with the payload inside.
//The action creator function is named by the pattern of slice name + action name.
//The action creator function is attached to the slice.actions object.
//The action creator function is used to dispatch an action.

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersData.json();
  return users;
});

export const { addUser, setUser } = userSlice.actions;
export default userSlice.reducer;
