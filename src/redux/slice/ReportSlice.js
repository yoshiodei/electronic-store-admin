import { createAction, createSlice } from '@reduxjs/toolkit';

export const setProductReport = createAction('setProductReport');
export const setUserReport = createAction('setUserReport');
export const resetReport = createAction('resetReport');

const initialProductReport = {
  reportedItemName: '',
  reportedItemVendorName: '',
  reportedItemId: '',
  reportType: '',
  reportDetail: '',
  reportDate: '',
  reporterImage: '',
  reporterName: '',
  reporterId: '',
};

const initialUserReport = {
  reportedItemName: '',
  reportedItemVendorName: '',
  reportedItemId: '',
  reportType: '',
  reportDetail: '',
  reportDate: '',
  reporterImage: '',
  reporterName: '',
  reporterId: '',
};

const initialState = {
  productReport: initialProductReport,
  userReport: initialUserReport,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setProductReport, (state, action) => {
        state.productReport = action.payload;
      })
      .addCase(setUserReport, (state, action) => {
        state.userReport = action.payload;
      });
  },
});

export const selectReportState = state => state.report;

export default reportSlice.reducer;
