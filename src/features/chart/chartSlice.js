import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: 'Gross NBRx Media Composition',
  subTitle: 'Conversion to Restolar',
  chartTitle: 'Total Gross NBRx',
  data: [
    { name: 'Direct', value: '479831' },
    { name: 'Display', value: '560230' },
    { name: 'Email', value: '80379' },
    { name: 'Organic Search', value: '165435' },
    { name: 'Paid Search', value: '2240000' },
    { name: 'Referral', value: '29941' },
    { name: 'Social', value: '160417' },
    { name: 'Video', value: '129640' },
  ],
  stackedChart: true,
};

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    // Reducer with createSlice functions may "mutate" the state using Immer
    toggleChart: (state) => {
      state.stackedChart = !state.stackedChart;
    },
  },
});

export const { toggleChart } = chartSlice.actions;
export default chartSlice.reducer;
