import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5244/api" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: (dbName: string) => `projects/get-projects?dbName=${dbName}`,
    }),
  }),
});

export const { useGetProjectsQuery } = projectApi;
