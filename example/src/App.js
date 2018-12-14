import React, { Component } from 'react'
import './index.css'

import ReversedEllipsis from 'react-reversed-ellipsis'

export default class App extends Component {
  render () {
    const text = 'Here is a long text, but the most important part is in the last few words.';
    const textCH = '这是一段文本，但最重要的部分在结尾处。';
    const textJP = 'これはテキストですが、一番大切な部分は終わりです。';
    const textKR = '이것은 하나의 텍스트인데, 가장 중요한 부분은 엔딩에 있다.';

    return (
      <div className='container'>
        <div>
          <h2>Example</h2>
          <h3>text</h3>
          <p>{text}</p>
          <h3>original CSS ellipsis</h3>
          <div className='example-container'>
            <p className='css-ellipsis'>{text}</p>
          </div>
          <h3>with this lib, you can achieve effect like</h3>
          <div className='example-container'>
            <ReversedEllipsis text={text} maxWidth={160}  />
          </div>
          <h2>Shortage</h2>
          <p>this lib works well with 'monospace' font or 'monospace' language like Chinese</p>
          <div className='example-container'>
            <ReversedEllipsis text={textCH} maxWidth={160}  />
          </div>
          <div className='example-container'>
            <ReversedEllipsis text={textJP} maxWidth={160}  />
          </div>
          <div className='example-container'>
            <ReversedEllipsis text={textKR} maxWidth={160}  />
          </div>
          <p>or, it may looks like</p>
          <div className='example-container sans-serif'>
            <ReversedEllipsis text={text} maxWidth={160}  />
          </div>
        </div>
      </div>
    )
  }
}
