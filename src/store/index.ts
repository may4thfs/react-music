import { configureStore } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import counterReducer from './modules/counter'

const store = configureStore({ reducer: { counter: counterReducer } })

// 这样做的好处是，当你在组件中使用 useAppSelector 时，你可以得到类型提示和类型检查。
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

export default store
