import React from 'react'
import { Icon } from '@iconify/react'

const Cart = () => {
  return (
    <button aria-label="Cart" className='cursor-pointer bg-gray-100 rounded-xl p-2 min-h-10 min-w-10 flex items-center justify-center'>
        <Icon icon="mdi:cart-outline" width="24" height="24" />
    </button>
  )
}

export default Cart