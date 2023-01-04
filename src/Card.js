import React from 'react'

function Card({
  image,
  title,
  price,
  button,
  icon
}) {
  return (
    <div>
      <div className="card h-100">
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-6">{title}</h5>
          <p class="card-text fw-bold">{price}</p>
        </div>
        <button className='btn btn-lg' type='button'>
          <div className="d-flex justify-content-between bg-primary rounded p-2">

            <span>{button}</span>
            <span>{icon}</span>

          </div>
        </button>
      </div>
    </div>
  )
}

export default Card