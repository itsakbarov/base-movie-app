
// components
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

// Pages
import Popular from './pages/Popular'
import SingleMovie from './pages/SingleMovie'
import Ranked from './pages/Ranked'
import TvShows from './pages/TvShows'
import Latest from './pages/Latest'
import SearchMovies from './pages/Search'
import ActorMovies from './pages/ActorMovies'

// Router
import {Route, Switch } from 'react-router-dom'


//libraries
import { Layout } from 'antd';
import 'antd/dist/antd.css';
const { Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Sidebar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Navbar />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Switch>
            <Route path="/popular" component={Popular}/>
            <Route path="/ranked" component={Ranked}/>
            <Route path="/latest" component={Latest}/>
              <Route path="/search" component={SearchMovies}/>
              <Route path="/tv-shows" component={TvShows}/>
              <Route path="/movie/:id" component={SingleMovie}/>
              <Route path="/person/:id" component={ActorMovies}/>
          </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
