import './App.scss'
import Map from './components/Map';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchGeometry } from './Redux/slices/geometrySlice';
import ButtonComponet from './components/Button';

function App() {

  const { activeRoute, routes } = useAppSelector(state => state.routes)
  const dispatch = useAppDispatch()


  useEffect(() => {
    if (activeRoute.points.length > 0) {
      dispatch(fetchGeometry(activeRoute.points))
    }
  }, [activeRoute, dispatch])


  const renderButtons = routes.map(route => (
    <ButtonComponet key={route.id} route={route} />
  ))


  return (
    <div className='app'>
      <div className="main">
        <div className='routes'>
          {renderButtons}
        </div>
        <Map />

      </div>
    </div>
  )
}
export default App
