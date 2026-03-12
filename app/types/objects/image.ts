export type ImageAsset = {
  _id: string
  url: string
  metadata?: {
    lqip?: string
    dimensions?: {
      width: number
      height: number
    }
  }
}