import { useRecoilState, useRecoilValue } from 'recoil'
import { topPageAtom } from 'store/atoms/top-page-atom'
import { useCallback } from 'react'
import produce from 'immer'
import { TopPageStore } from 'store/types/top-page'

export function useTopPageLoaded() {
  const topPage = useRecoilValue(topPageAtom)
  return topPage.isLoaded
}

export function useImportTopPage() {
  const [topPage, setTopPage] = useRecoilState(topPageAtom)
  return useCallback(
    (topPageData: Omit<TopPageStore, 'isLoaded'>) => {
      setTopPage(
        produce(topPage, (draftTopPage) => {
          draftTopPage.isLoaded = true
          draftTopPage.topCarouselImages = topPageData.topCarouselImages
          draftTopPage.kohhiMessage = topPageData.kohhiMessage
        })
      )
    },
    [setTopPage, topPage]
  )
}
