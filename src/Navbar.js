import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary p-3">
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="#">
                        <i class="fa-solid fa-bars"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <img src='https://www.jiomart.com/assets/version1671123563/smartweb/images/jiomart_logo_beta.svg' />
                            </li>
                            <div className='ms-5 d-flex justify-content-between'>
                                <Search
                                    placeholder="Search essentials, groceries, and more..."
                                    allowClear
                                    size='large'
                                    style={{
                                        width: 500,
                                    }}
                                />

                            </div>
                        </ul>

                        <div>
                            <a className="navbar-brand" href="#">
                                <i class="fa-regular fa-user me-2"></i>
                                <span className='text-light'>Sign in / Sign up</span>
                            </a>
                        </div>
                        <div>
                            <a className="navbar-brand" href="#">
                                <i class="fa-solid fa-cart-shopping ms-5"></i>
                                <span className='text-light'>Cart</span>
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
            <ul class="nav justify-content-center bg-light">
                <li class="nav-item">
                    <a class="nav-link text-secondary" aria-current="page" href="#">
                        <i class="fa-solid fa-location-dot"></i>
                        <span className='fw-bold'>Deliver to</span>
                        <div>
                            <span className='text-dark fw-bold ms-2'>400020</span>
                        </div>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Groceries</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Premium Fruits</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Home & Kitchen</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Fashion</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Electronics</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Beauty</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Jewellery</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Home Improvement</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">
                        <span className='fw-bold'>Sports, Toys & Luggage</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </a>

                </li>
            </ul>
        </div>
    )
}

export default Navbar