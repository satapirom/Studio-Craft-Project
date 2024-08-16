import React from 'react'
import Banner from './components/Banner/Banner'
import AddNewProduct from './components/Admin/AddNewProductPage/AddNewProduct';

const page = () => {
    return (
        <div>
            {/* <div>
                <Banner />
            </div>
            <div>
                <NewProduct />
            </div> */}
            <div>
                <AddNewProduct />

            </div>
        </div>
    )
}

export default page;