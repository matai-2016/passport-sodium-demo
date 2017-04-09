import React from 'react'

import Header from './Header'
import LoginButtons from './LoginButtons'
import OrderList from '../containers/OrderList'

const Home = () => {
  return (
    <div>
      <Header />
      <LoginButtons />
      <OrderList />
      <footer>Hi</footer>
    </div>
  )
}

export default Home
