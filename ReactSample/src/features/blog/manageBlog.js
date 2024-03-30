import { createSlice } from '@reduxjs/toolkit';
import { addBoard, fetchBoardsList, updateBoard } from './blogSlice';

export const Blog = createSlice({
  name: 'manageBlog',
  initialState: {
    id: 1,
    title: '',
    content: '',
    boardsList: [],
    currentBoard: null,
    loading: false,
    error: '',
  },
  reducers: {
    selectBoard: (state, action) => {
      // 이미 board가 선택되어있던 경우
      if (state.currentBoard === action.payload) {
        state.currentBoard = null;
        // 아무것도 선택되어 있지 않았거나 다른 board가 선택되어있던 경우
      } else {
        state.currentBoard = action.payload;
      }
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
    updateBtn: (state, action) => {
      if (state.currentBoard) {
        state.id = state.currentBoard.id;
        state.title = state.currentBoard.title;
        state.description = state.currentBoard.content;
      } else {
        alert('변경하실 게시물을 클릭해주세요!');
      }
    },
    removeBoard: (state, action) => {
      const index = state.boardsList.findIndex((board) => board.id === action.payload);
      if (index !== -1) {
        state.boardsList.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardsList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBoardsList.fulfilled, (state, action) => {
        state.boardsList = action.payload;
      })
      .addCase(fetchBoardsList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addBoard.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boardsList.push(action.payload);
        console.log(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(updateBoard.pending, (state) => {
        state.loading = true;
        console.log('updateBoard pending');
      })
      .addCase(updateBoard.fulfilled, (state, action) => {
        console.log('진행순서 extraReducer updateBoard fulfilled');
        const index = state.boardsList.findIndex((val) => val.id === action.payload.id);
        console.log('진행순서 extraReducer updateBoard fulfilled2');
        if (index !== -1) {
          state.boardsList[index] = action.payload;
        }
      })
      .addCase(updateBoard.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setTitle, setContent, updateBtn, removeBoard, selectBoard } = Blog.actions;

export default Blog.reducer;
