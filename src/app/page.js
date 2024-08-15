import React from 'react'
import Banner from './components/Banner/Banner'
import NewProduct from './components/NewProduct/NewProduct'
const page = () => {
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div>
                <NewProduct />
            </div>
        </div>
    )
}

export default page;