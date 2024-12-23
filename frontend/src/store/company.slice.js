import { createSlice } from  "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompanyName : null,
        companies: []
    },

    reducers: {
        setCompany: (state, action) => {
            state.singleCompanyName = action.payload;
        },
        setCompanies: (state, action) =>{
            state.companies = action.payload;
        }
    }
})



export const { setCompany, setCompanies } = companySlice.actions;
export default companySlice.reducer