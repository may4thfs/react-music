import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
  shallowEqual
} from 'react-redux'

import counterReducer from './modules/counter'
import recommendReducer from '../views/discover/c-views/recommend/store/recommend.ts'

const store = configureStore({
  reducer: { counter: counterReducer, recommend: recommendReducer }
})

// 这样做的好处是，当你在组件中使用 useAppSelector 时，你可以得到类型提示和类型检查。
type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType> // getState 返回值的类型
type DispatchType = typeof store.dispatch // dispatch 的类型

// hook
// 备注：useAppSelector 推荐使用；useAppDispatch 和 shallowEqualApp 做不做都行。这里是为了统一性
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
