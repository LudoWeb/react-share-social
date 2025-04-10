export interface IndexPropsType {
  title?: string
  socialTypes: string[]
  style?: any
  url: string
  labels?: {
    copy?: string
    copied?: string
  },
  onSocialButtonClicked?:(str: string)=> any
}
 
 