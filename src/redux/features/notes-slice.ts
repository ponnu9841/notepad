import { getAllNotes } from "@/services/noteService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  loading: boolean;
  notes: Note[] | null;
  currentNote: null;
  error: any; //eslint-disable-line
} = {
  loading: true,
  notes: [],
  error: "",
  currentNote: null,
};

export const fetchNotes = createAsyncThunk(
  "fetchNotes",
  async (controller?: AbortController) => {
    const response = await getAllNotes()
    return response;
  }
);

export const NoteSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.notes = action.payload;
    });
    builder.addCase(fetchNotes.rejected, (state, action) => {
      state.loading = false;
      if (action.error.name === "TypeError") return;
      state.error = action.error.message as string;
    });
  },
});

export default NoteSlice.reducer;
