import {useRoutes} from 'react-router-dom';
import {ALL_PAGE_ROUTE} from 'app/Router';

function App() {

  let all_pages = useRoutes(ALL_PAGE_ROUTE)
  return (
    <>
      {all_pages}
    </>
  )
}

export default App
