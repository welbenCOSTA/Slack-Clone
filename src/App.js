import React from 'react';

import GlobalStyle from './styles/global'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Layout from './Layout'

import Routes from './routes'

const App = () => (
  <>
    <Header />
    <Layout>
      <Sidebar />
      <Routes />
    </Layout>
    <GlobalStyle />
  </>
)

export default App;
