import { apiSlice } from "./apiSlice";

const USERS_URL = "/api/admin";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    getUsers: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/usersList`,
        method: "get",
      }),
    }),
    deleteUser: builder.mutation({
      query: (data) =>({
        url: `${USERS_URL}/deleteUser`,
        method: "POST",
        body: data,
      })
    }),
    editUser: builder.mutation({
      query:(data)=>({
        url: `${USERS_URL}/editUser`,
        method:'POST',
        body:data
      })
    }),
  }),
});

export const { useAdminLoginMutation, useLogoutMutation, useGetUsersMutation, useDeleteUserMutation, useEditUserMutation } =
  userApiSlice;
