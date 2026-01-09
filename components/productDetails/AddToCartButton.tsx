import React from 'react'

const AddToCartButton = ({stock}: {stock: number}) => {
  return (
    <button
            type="button"
            disabled={stock === 0}
            className={`py-3 px-8 rounded-sm font-semibold transition ${
              stock === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-slate-800 hover:bg-slate-900 text-white cursor-pointer "
            }`}
          >
            {stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
  )
}

export default AddToCartButton