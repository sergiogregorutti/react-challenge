import React from 'react'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { MdChevronLeft } from "react-icons/md";

function GoBack() {
  return (
    <NavLink
      to='/'
      exact
      className='go-back'>
      <MdChevronLeft color='rgb(255, 255, 255)' size={22} /> Back
    </NavLink>
  );
}

export default function Nav () {
  return (
    <nav>
      <div className='container'>
        <h1>Home</h1>
        <Route path={['/person', '/person/:username']} exact component={GoBack} />
      </div>
    </nav>
  )
}
