import { atom } from 'recoil'
import { TopPageStore } from 'store/types/top-page'

export const topPageAtom = atom<TopPageStore>({
  key: 'topPageAtom',
  default: {
    isLoaded: false,
    topCarouselImages: [],
    kohhiMessage: null,
  },
})
