interface BaseResponse<T> {
  data: T;
  error: boolean;
  status: number;
  message: string;
}
