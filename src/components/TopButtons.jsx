import React from 'react'


function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: 'Gwalior'
        },
        {
            id: 2,
            title: 'Pune'
        },
        {
            id: 3,
            title: 'Kasol'
        },
        {
            id: 4,
            title: 'Delhi'
        },
        {
            id: 5,
            title: 'Goa'
        },
        {
            id: 6,
            title: 'Mohali'
        },
    ]

    return (
        <div className='flex item-center justify-around my-6 '>
            {cities.map((city) => (
                <button key={city.id} className='text-white text-lg font-medium transition ease-out hover:scale-105' onClick={()=>setQuery({q: city.title})}>
                    {city.title}
                </button>

            ))}
        </div>
    )
}

export default TopButtons
