import React from 'react'

const carouselArrow = ({itemClass, itemIcon}) => {
    return (
        <button type="button" className={itemClass}>
            {itemIcon}
        </button>
    )
}

export default carouselArrow
