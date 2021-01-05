import React from 'react'
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import AnimatedCursor from 'react-animated-cursor'
import DefaultLoading from './components/layout/DefaultLoading'
import Sidebar from './components/layout/Sidebar'
import { Helmet } from 'react-helmet'
import Default from './pages/Default'
import Home from './pages/Home'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {

  const [loading,setLoading] = React.useState(true)

  React.useEffect(() => {
    const loader = () => {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }

    loader()
  }, [])

  return loading ? (
      <>
        <AnimatedCursor
          innerSize={12}
          outerSize={12}
          color='255, 255, 255'
          outerAlpha={0.3}
          innerScale={0.6}
          outerScale={5}
        />
        <DefaultLoading />
      </>
    ) : (
      <>    
        <Helmet
          defaultTitle="Modern—Nobody"
          titleTemplate="%s | Modern—Nobody"
        />

        <Router>
          <AnimatedCursor
            innerSize={12}
            outerSize={12}
            color='255, 255, 255'
            outerAlpha={0.3}
            innerScale={0.6}
            outerScale={5}
          />

          <Sidebar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={Default} />
          </Switch>
        </Router>
      </>
  )
}

export default App 
