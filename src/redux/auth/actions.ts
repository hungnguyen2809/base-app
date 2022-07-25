import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getMessageError } from 'src/utils/common';
import { AuthLogin } from './type';

//Viết fake tạm ở đây
const fakeApi = (data: AuthLogin): Promise<BaseResponse<AuthLogin>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === 'hungnv@gmail.com' && data.password === '123456') {
        resolve({ data: data, status: 200, error: false, message: 'sucess' });
      } else {
        reject({
          data: [],
          status: 200,
          error: true,
          message: 'Thông tin tài khoản hoặc mật khẩu không chính xác',
        });
      }
    }, 3000);
  });
};

export const actionAuthLogin = createAsyncThunk('auth/actionAuthLogin', async (data: AuthLogin) => {
  try {
    const response = await fakeApi(data);
    if (response.error) {
      throw new Error(response.message);
    }

    return response.data;
  } catch (error) {
    throw new Error(getMessageError(error));
  }
});

export const actionAuthSetToken = createAction<AuthLogin>('auth/actionAuthSetToken');
