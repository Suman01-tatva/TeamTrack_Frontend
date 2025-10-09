declare interface ApiResponse<T> {
  isSuccess: boolean;
  statusCode: number;
  data: T | null;
  message: string;
}
