import React from 'react'
import { render } from 'react-dom'
import { createRoot } from 'react-dom/client';

import App from './App.js'
import { Provider } from '@kfe/eva'
import store from 'store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement); // createRoot(container!) if you use TypeScript

root.render(<Provider store={store}><App /></Provider>)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NextApp = require('./App.js').default
    render(<NextApp />, rootElement)
  })
}

