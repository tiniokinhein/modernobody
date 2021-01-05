import React from 'react'
// import ReactDOM from 'react-dom'
import { render } from 'react-snapshot'
import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import './assets/scss/style.scss'
import './assets/scss/media.scss'

const rootElement = document.getElementById('root')

render(<App />,rootElement)

serviceWorkerRegistration.register()

reportWebVitals()
