import ScrollToTop from './ScrollToTop'
import { AnimatePresence } from 'framer-motion'
import ROUTER_CONFIG from './routerConfig'
import AnimatedAppearance from '../components/AnimatedAppearance'
import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom'

const Routes = () => {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <ReactRoutes location={location}>
          {ROUTER_CONFIG.map(({ path, component: Component }) => (
            <Route
              path={path}
              key={path}
              element={
                <AnimatedAppearance>
                  <Component />
                </AnimatedAppearance>
              }
            />
          ))}
        </ReactRoutes>
      </AnimatePresence>
    </>
  )
}

export default Routes
