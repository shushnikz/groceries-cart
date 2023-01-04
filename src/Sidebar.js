import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

function Sidebar() {
    return (
        <div>
            <span className='fs-6 m-5'>
                Home <i class="fa-solid fa-chevron-right me-2"></i>
                All Categories <i class="fa-solid fa-chevron-right me-2"></i>
                Groceries
            </span>
            <div className='scrollbar scrollbar-secondary'>
                <div className="card border-light m-3" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3 fs-4">Categories</li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Fruits & Vegetables</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Dairy & Bakery</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Staples</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Snacks & Branded Foods</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Beverages</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Personal Care</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Home Care</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Premium Fruits</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Apparel</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Home & Kitchen</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Mom & Baby Care</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Books</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Pets</span>
                        </li>
                        <li className="list-group-item">
                            <i class="fa-solid fa-chevron-right me-2"></i>
                            <span>Beauty</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='scrollbar scrollbar-secondary'>
                <div className="card border-light m-3" style={{ width: "18rem" }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item p-3 fs-4">Filters</li>
                        <li className="list-group-item">
                            <span>Availability</span><br />
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>InStock Products</span>
                        </li>
                        <li className="list-group-item">
                            <span>Categories</span><br />
                            <Search
                                placeholder="Search essentials, groceries, and more..."
                                allowClear
                                size='medium'
                                style={{
                                    width: 200,
                                    margin: "10px"
                                }}
                            />
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Health Supplements</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Herbal & Ayurvedic</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Other Atta</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Wall Spotlight</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Body Lotion & Cream</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Make Up Accessories</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Dry Fruits Gift Pack</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Bathing Bars & Soaps</span>
                        </li>
                        <li className="list-group-item">
                            <span>Brand</span><br />
                            <Search
                                placeholder="Search essentials, groceries, and more..."
                                allowClear
                                size='medium'
                                style={{
                                    width: 200,
                                    margin: "10px"
                                }}
                            />
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>KURAIY</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>P R PRASHANT</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>color girl</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Herbanuts</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Naturewell</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Manan Shopee</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>90's Mill</span>
                        </li>
                        <li className="list-group-item">
                            <input className="form-check-input mt-2" type="checkbox" value="" aria-label="Checkbox for following text input" />
                            <span className='fw-light fs-6 ms-2'>Okli Musai Brand</span>
                        </li>
                    </ul>


                </div>
            </div>
            <div className='scrollbar'>
                <div class="card-header">
                    <span>Price</span><br />
                    <input type="range" className="form-range me-1" min="0" max="5" step="0.5" id="customRange3" />

                    <div className="d-flex justify-content-between">

                        <small className='fw-bold'>0</small>
                        <small className='fw-bold'>98967</small>

                    </div>
                </div>
                <div class="card-header">
                    <span>Discount</span><br />
                    <input type="range" className="form-range me-1" min="0" max="5" step="0.5" id="customRange3" />

                    <div className="d-flex justify-content-between">

                        <small className='fw-bold'>0</small>
                        <small className='fw-bold'>96</small>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar