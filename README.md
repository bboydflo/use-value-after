<h1 align="left">Welcome to use-value-after 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/use-value-after" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/use-value-after.svg">
  </a>
  <a href="https://github.com/bboydflo/use-value-after" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/CosminOnciu" target="_blank">
    <img alt="Twitter: CosminOnciu" src="https://img.shields.io/twitter/follow/CosminOnciu.svg?style=social" />
  </a>
</p>

> react hook to use values from an array after delay. when reaching the end of the array it will start from the beginning

### 🏠 [Homepage](https://github.com/bboydflo/use-value-after)

## Install

```sh
npm install
```

## Usage

This hook comes in handy when testing edge cases for a React component by generating a new set of props after a specific delay

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { useValueAfter } from 'use-value-after'

const TestComponent = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  )
}

const updatePropsAfterMs = 1000
const testComponentProps = [
  {title: '', text: ''},
  {title: '', text: 'No title'},
  {title: 'Short title', text: ''},
  {title: 'Short title', text: 'Really small paragraph'}
]

const App = () => {
  const props = useValueAfter(testComponentProps, updatePropsAfterMs)
  return (
    <div className='App'>
      <TestComponent {...props} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## CodeSandbox Demo

For a demo [take a look here](https://codesandbox.io/s/use-value-after-demo-ov7lz)

## Author

👤 **Florin Cosmin Onciu**

* Twitter: [@CosminOnciu](https://twitter.com/CosminOnciu)
* Github: [@bboydflo](https://github.com/bboydflo)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/bboydflo/use-value-after/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc).

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
