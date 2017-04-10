import React from 'react'

import Header from './Header'
import LoginButtons from './LoginButtons'
import OrderList from '../containers/OrderList'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <LoginButtons />
      <Header />
      <OrderList />
      <Footer />
    </div>
  )
}

export default Home
