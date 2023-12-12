import api from '../../store/api';

const cartApi = api.injectEndpoints({
  endpoints: builder => ({
    getcart: builder.query({

      query: () => `/cart/${userId}`,
      providesTags: ['cart']
    }),
    getcart: builder.query({

      query: userId => `/cart/${userId}`,
      providesTags: ['cart']
    }),
    createcart: builder.mutation({

      query: cart => ({
        url: `/cart/${userId}`,
        method: 'POST',
        body: cart
      }),
      invalidatesTags: ['cart']
    }),
    editcart: builder.mutation({

      query: cart => ({
        url: `/cart/${userId}`,
        method: 'PUT',
        body: cart
      }),
      invalidatesTags: ['cart']
    }),
    deletecart: builder.mutation({

      query: userId => ({
        url: `/cart/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['cart']
    }),
  })
});

export const {
  useGetcartQuery,
  useCreatecartMutation,
  useEditcartMutation,
  useDeletecartMutation,
} = cartApi;