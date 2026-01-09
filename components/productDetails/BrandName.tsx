import React from 'react'

const BrandName = ({brand, name}: {brand: string, name: string}) => {
  return (
    <div>
          <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
            {brand}
          </span>
          <h1
            itemProp="name"
            className="text-3xl md:text-4xl font-bold text-gray-900 mt-1"
          >
            {name}
          </h1>
        </div>
  )
}

export default BrandName