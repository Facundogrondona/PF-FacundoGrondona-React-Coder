//Elements and modules
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'


//style
import "./Error404.scss"


function Error404() {
  return (
      <>
          <div className="errorPage">
          <img className="imgError" src="./images/404.jpg" alt="Error 404 - Página no encontrada" />
          <Link to={'/'}><Button>Volver</Button></Link>
          </div>
          <Footer />
      </>
  )
}

export default Error404