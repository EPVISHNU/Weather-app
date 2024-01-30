import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
         <MDBNavbar light bgColor=''>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
          <i class="fa-solid fa-sun fs-1 me-2  mt- text-warning"></i>
            <h1 className=' mb-1'><b>Weather</b></h1>
            <h5 className='mt-3 ms-2'>App</h5>
           
          </MDBNavbarBrand>
          
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header