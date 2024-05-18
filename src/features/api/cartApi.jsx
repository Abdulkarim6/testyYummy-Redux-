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
      query : (data) => ({
        url : "updateMenuQuantity",
        method : "PUT",
        body : data
      }),
      invalidatesTags: ["Cart"],
    })
  }),
});

export const {
  useGetmyCartMenusQuery,
  useAddToCartMutation,
  useUpdateMenuQuantityMutation,
} = cartApi;
