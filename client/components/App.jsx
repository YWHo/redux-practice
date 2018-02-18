import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
import Images from './Images'
import AddImage from './AddImage'

const App = () => (
  <div className='app-container'>
    <Words />
    <AddWord />
    <div className='img-container'>
      <AddImage />
      <Images />
    </div>
  </div>
)

export default App
