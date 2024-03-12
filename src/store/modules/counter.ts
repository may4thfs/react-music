import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}

// 明确指定类型
// 这么写的好处：对于类型推导不容易推导出来的类型，这种写法更加明确
// 举例：在没有制定类型时，直接写direction: 'left'，它只会被推导出string类型，而不是字面量联合类型
const initialState: IState = {
  count: 100,
  message: 'Hello Redux',
  address: '广州市',
  height: 1.88,
  direction: 'left',
  names: []
}

const counterSlice = createSlice({
  name: 'counter',
  // initialState 的类型会被自动推断出来（具体看源码的类型声明）。当然也可以明确指定类型
  // initialState: {
  //   count: 100,
  //   message: 'Hello Redux',
  //   address: '步行街',
  //   height: 1.78
  // },
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
