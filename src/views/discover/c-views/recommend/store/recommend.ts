import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

// 创建一个异步 action，用于获取 banner 数据。
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    // 从服务器获取 banner 数据
    const res = await getBanners()
    // 更新 Redux store 中的 banners 数据。
    dispatch(changeBannersAction(res.banners))
  }
)

interface IRecommendState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  banners: any[]
}

const initialState: IRecommendState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
  // 这种写法可以监听到三种状态：pending、fulfilled、rejected。
  // 上面5～13行是另一种写法，写起来更简单，但是监听不到 rejected 状态。需要自己try catch。
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, () => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, () => {
  //       console.log('rejected')
  //     })
  // }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
