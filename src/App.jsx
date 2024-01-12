import { useState } from 'react'
import data from './data/information.json'
import { Header } from './components/Header'
import { DocumentsLocation } from './components/DocumentsLocation'

function App() {
  return (<div><Header />
              <DocumentsLocation/>
  </div>)
  
}

export default App
