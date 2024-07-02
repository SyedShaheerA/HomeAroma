import React from 'react'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <div>

      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              
            </Link>
            <a href="https://wa.me/+923303252998?text=Hi%20I%20would%20like%20to%20order!" target="_blank">Contact Me </a>
            <span className="text-muted">© 2022 HomeAroma, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
           
          </ul>
        </footer>
      </div>

    </div>
  )
}
