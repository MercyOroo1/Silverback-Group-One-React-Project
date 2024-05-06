import React from 'react'
import './Category.css'

function Category() {
  return (
    <div className='category-container'>
        <label className='genre'> GENRE</label>
          <select className='category'>
            <option>All </option>
                <option> Action </option>
                <option> Horror</option>
                <option> Comedy</option>
            </select>

    </div>
  )
}

export default Category