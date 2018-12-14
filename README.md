# react-reversed-ellipsis

> make ellipsis in the front still using text-overflow

[![NPM](https://img.shields.io/npm/v/react-reversed-ellipsis.svg)](https://www.npmjs.com/package/react-reversed-ellipsis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

example

`Here is a long text, but the most important part is in the last few words.`

with original CSS ellipsis, you'll get

`Here is a long text...`

with this lib, you can achieve effect like (still using CSS)

`...the last few words`

see the example at https://donyell-wang.github.io/react-reversed-ellipsis/

**Shortage**

This lib works well with `monospace` font or `monospace` language like Chinese, and it may look not that good in other circumstances. That is becasue `transform: scaleX(-1)` is used to do the trick.


## Install

```bash
npm install --save react-reversed-ellipsis
```

## Usage

```jsx
import React, { Component } from 'react'

import ReversedEllipsis from 'react-reversed-ellipsis'

class Example extends Component {
  render () {
    cosnt text = 'Here is a long text, but the most important part is in the last few words.'
    return (
      <ReversedEllipsis text={text} maxWidth={160} />
    )
  }
}
```

## License

MIT © [donyell-wang](https://github.com/donyell-wang)
