import { http } from './http-common';

const fetchBoards = async () => {
  try {
    const data = await http.get('/board/all');
    if ((data === undefined) | (data.status === 400)) {
      console.log('Board 불러오기: 요청에서 문제 발생');
    }
    return data;
  } catch (error) {
    if (error) {
      console.log('Error!', error);
    }
  }
};

const postBoard = async (formData) => {
  try {
    const data = await http.post('/board/post', formData);
    if ((data === undefined) | (data.status === 400)) {
      console.log('Board 불러오기: 요청에서 문제 발생');
    }
    return data;
  } catch (error) {
    if (error) {
      console.log('postBoard reponse error: ', error);
    }
  }
};

const updateBoard = async (formData, id) => {
  try {
    console.log('진행순서 update API');
    const data = await http.put(`/board/update/${id}`, formData);
    console.log('진행순서 update API2');
    return data;
  } catch (error) {
    if (error) {
      console.log('postBoard reponse error: ', error);
    }
  }
};

const BoardApi = {
  fetchBoards,
  postBoard,
  updateBoard,
};

export default BoardApi;
