import {useRoutes} from 'react-router-dom';
import {ALL_PAGE_ROUTE} from 'app/Router';
import Sidenav from 'app/component/Drawer/Sidenav';

function App() {

  let all_pages = useRoutes(ALL_PAGE_ROUTE)
  
  return (
    <Sidenav>
      {all_pages}
    </Sidenav>
  )
}

export default App
