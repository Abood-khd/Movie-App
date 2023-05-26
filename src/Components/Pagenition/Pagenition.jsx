import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagenition({MovieList}) {
  let pages= new Array(10).fill(1).map((ele,i)=>i +1)
  return (
    <>
      <nav className='py-5'>
        <ul  className='pagination pagination-sm d-flex justify-content-center bg-transparent'>
      {pages.map((page)=>
      
        <li key={page} className='page-item p-1'>
          <Link  onClick={()=>MovieList(page)} className='page-link bg-transparent text-white'>{page}</Link>
        </li>
      )}
        </ul>

      </nav>
    </>
  )
}
