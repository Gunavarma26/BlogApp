import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../context/DataContext'
import background from '../assest/background.png'
import '../style/home.css'
import Footer from './Footer'

const Home = () => {

  const {searchResult} = useContext(DataContext)

  return (
    <div >home
      <div style={{marginTop:"55px"}} >
        <img src={background} className='background' />
      </div>
      <main>
        {searchResult.length ? ( <Feed post={searchResult}/>) : (<p style={{marginTop:'2rem'}}>No post to display.</p>)}
      </main>
      <Footer className='footer' />
    </div>
  )
}

export default Home