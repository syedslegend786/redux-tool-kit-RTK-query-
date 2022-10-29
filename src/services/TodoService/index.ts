import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IForm } from "../../components/Todo/TodoForm/types";
interface ITodo {
  title: string;
  description: string;
}

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/todos" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    fetchAllTodos: builder.query<any, any>({
      query: () => `/`,
      providesTags: [`Todos`],
    }),
    createTodo: builder.mutation<void, IForm>({
      query: (todo) => ({
        url: "/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: [`Todos`],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [`Todos`],
    }),
  }),
});
