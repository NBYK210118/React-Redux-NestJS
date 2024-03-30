import { createAsyncThunk } from '@reduxjs/toolkit';
import BoardApi from '../../services/board_api';

export const fetchBoardsList = createAsyncThunk('blog/fetchBoardList', async (_, { rejectWithValue }) => {
  try {
    const response = await BoardApi.fetchBoards();
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBoard = createAsyncThunk('blog/addBoard', async (data, { rejectWithValue }) => {
  try {
    const response = await BoardApi.postBoard(data);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updateBoard = createAsyncThunk('blog/updateBoard', async (data, { rejectWithValue }) => {
  try {
    const { id } = data;
    console.log('진행 순서 thunk');
    const response = await BoardApi.updateBoard(data, id);
    console.log('진행 순서 thunk2');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
