import { memo, useEffect } from 'react'
import { useAppDispatch } from '@/store'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface RecommendProps {
  children?: React.ReactNode
}

const Recommend: React.FC<RecommendProps> = memo(() => {
  /** 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])

  /** render函数的返回jsx */
  return (
    <div>
      <TopBanner />
      Recommend
    </div>
  )
})

Recommend.displayName = 'Recommend'

export default Recommend
