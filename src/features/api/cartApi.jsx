import { apiSlice } from "./apiSlice";

const cartApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getmyCartMenus: builder.query({
      query: () => ({
        url: "getmyCartMenus",
      }),
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (data) => ({
        url: "addToCart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateMenuQuantity : builder.mutation({
      //here data is specific id and quantity which is must be wrap an object for send with as body
      query : (data) => ({
        url : "updateMenuQuantity",
        method : "PUT",
        body : data
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteFromCart : builder.mutation({
      query : (id) =>({
        url:`deleteFromCart/${id}`,
        method:"DELETE",
      }),
      invalidatesTags: ["Cart"],
    })
  }),
});

export const {
  useGetmyCartMenusQuery,
  useAddToCartMutation,
  useUpdateMenuQuantityMutation,
  useDeleteFromCartMutation
} = cartApi;
