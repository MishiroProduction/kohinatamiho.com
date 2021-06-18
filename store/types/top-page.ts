export interface TopPageStore {
  isLoaded: boolean
  topCarouselImages: {
    src: string
    alt: string
  }[]
  kohhiMessage: {
    messageText: string
    linkTo: string
  } | null
}
