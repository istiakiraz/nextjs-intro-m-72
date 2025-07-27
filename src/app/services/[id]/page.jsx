import React from 'react'

export default function ServiceDetailsPage({params}) {

    const id= params.id

  return (
    <div className='text-black' ><h1>ServiceDetailsPage</h1>
    <p>ID : {id}</p>
    </div>
  )
}
