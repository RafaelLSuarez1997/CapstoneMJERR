import api from "../../store/api";

const itemsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => "/items",
      providesTags: ["Items"],
    }),
    getItem: builder.query({
      query: (id) => `/items/${id}`,
      providesTags: ["Items"],
    }),
    createItem: builder.mutation({
      query: (item) => ({
        url: "/items",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["Items"],
    }),
    editItem: builder.mutation({
      query: (item) => ({
        url: `/items/${item.id}`,
        method: "PUT",
        body: item,
      }),
      invalidatesTags: ["Items"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Items"],
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetItemQuery,
  useCreateItemMutation,
  useEditItemMutation,
  useDeleteItemMutation,
} = itemsApi;
