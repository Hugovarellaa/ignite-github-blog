// Spinning retirado desse site
// https://tobiasahlin.com/spinkit/

import { LoadingContainer } from './styles'

export function Loading() {
  return (
    <LoadingContainer>
      <div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </LoadingContainer>
  )
}
