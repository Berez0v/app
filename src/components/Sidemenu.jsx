import React from 'react'
// import '../App.css'
import {Link} from 'react-router-dom'
export const Sidemenu = () => {
  return (
    <nav>
     <Link to="/">Home</Link>
     <Link to="/UserPage">User</Link>
     <Link to="/RolesPage">Roles</Link>
     <Link to="/CategoriesPage">Categories</Link>
     <Link to="/GoodsPage">Goods</Link>
    </nav>
  )
}

// export default Sidemenu