import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { EccomInitialStateProps, ProductDataTypes } from "@/Types/ECommerce.type";

export const fetchProductData = createAsyncThunk<ProductDataTypes[], void, {}>("/api/productapi", async () => {
    const response = await axios.get("/api/productapi");
    return response.data;
});

const initialState: EccomInitialStateProps = {
    productItem: [],
    cartData: [],
    filterValue: {
        brand: ["Diesel", "Hudson", "Lee"],
        color: "pink",
        value: { min: 25, max: 100 },
        sortBy: "",
        searchBy: "",
        category: ["Woman T-shirt", "Cyclamen", "Dream Beauty Fashion", "VOXATI"],
    },
};

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addCartData: (state, action) => {
            let flag = true;
            state.cartData?.map((item, index) => {
                if (item.id === action.payload.id) {
                    state.cartData[index] = { ...action.payload.item, quantity: state.cartData[index].quantity + action.payload.increment };
                    flag = false;
                }
            });
            if (flag === true) {
                state.cartData.push({ ...action.payload.item, quantity: action.payload.increment });
            }
        },
        decrementCart: (state, action: PayloadAction<number>) => {
            const cartItem = state.cartData?.[action.payload];
            if (cartItem && cartItem.quantity !== undefined && cartItem.quantity > 1) {
                cartItem.quantity -= 1;
            }
        },
        incrementCart: (state, action: PayloadAction<number>) => {
            const cartItem = state.cartData?.[action.payload];
            if (cartItem && cartItem.quantity !== undefined) {
                cartItem.quantity += 1;
            }
        },
        filterCategoryState: (state, action) => {
            if (!state.filterValue.category.includes(action.payload.categoryChecked)) {
                state.filterValue.category.push(action.payload.categoryChecked);
            }
        },
        deleteCategoryState: (state, action) => {
            state.filterValue.category = state.filterValue.category.filter((item) => {
                return item !== action.payload.categoryUnChecked;
            });
        },
        filterBrandState: (state, action) => {
            if (!state.filterValue.brand.includes(action.payload.brandChecked)) {
                state.filterValue.brand.push(action.payload.brandChecked);
            }
        },
        deleteBrandState: (state, action) => {
            state.filterValue.brand = state.filterValue.brand.filter((item) => {
                return item !== action.payload.brandUnChecked;
            });
        },
        setColorState: (state, action) => {
            state.filterValue.color = action.payload;
        },
        setPrizeRange: (state, action) => {
            state.filterValue.value = { min: action.payload[0], max: action.payload[1] };
        },
        setSearchInput: (state, action) => {
            state.filterValue.searchBy = action.payload;
        },
        sortBy: (state, action) => {
            state.filterValue.sortBy = action.payload;
        },
        removeFromCart: (state, action) => {
            state.cartData = state.cartData.filter((item) => item.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.fulfilled, (state, action) => {
            state.productItem = action.payload;
        });
    },
});

export default ProductSlice.reducer;
export const { sortBy, setSearchInput, deleteBrandState, setPrizeRange, setColorState, filterBrandState, deleteCategoryState, filterCategoryState, addCartData, decrementCart, incrementCart, removeFromCart } = ProductSlice.actions;