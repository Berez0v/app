import React from 'react'
// import '../App.css'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className='menu'>
            <Link to="/CategoriesPage">Show Content</Link>
            <Link to="/RedactPage">Redact</Link>
            <Link to="/AddNew">AddNew</Link>
        </nav>
    )
}
