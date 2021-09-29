import React from 'react'
import './ProductComponent.scss'

function ProductComponent() {
    return (
        <div className="main-bg">
            <header className="header-main">ProductManager</header>
                <div id="main-box">
                    <div className="row-product">
                        <div className="Group">
                            <label className="color-text">Product Name</label>
                            <input className="color-text" type="text" placeholder="Product Name"/>
                        </div>
                        <div className="Group">
                            <label className="color-text">Prices</label>
                            <input className="color-text" type="text" placeholder="Prices" />
                        </div>
                        <div className="Group">
                            <label className="color-text">Status</label>
                            <input className="color-text" type="text" placeholder="Status" />
                        </div>
                    </div>
                    <div className="row-product">
                    <div className="Group">
                            <label className="color-text">Quantity</label>
                            <input className="color-text" type="text" placeholder="Quantity" />
                        </div>
                        <div className="Group">
                            <label className="color-text">Category</label>
                            <input className="color-text" type="text" placeholder="Category" />
                        </div>
                        <div className="Group">
                            <label className="color-text">Image_URL</label>
                            <input className="color-text" type="text" placeholder="Image_URL" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductComponent
