import React from 'react';
import { Button } from 'antd';
import Card from "./Card"


function Home() {
    const cardData = [
        {
            image: 'https://www.jiomart.com/images/product/150x150/590003515/onion-1-kg-product-images-o590003515-p590003515-0-202203170724.jpg',
            title: 'Onion 1 kg',
            price: 'M.R.P ₹ 27.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590001266/sweet-corn-1-pc-approx-250-g-450-g-product-images-o590001266-p590001266-0-202203170359.jpg',
            title: 'Sweet Corn 1 pc (Approx 250g - 450g)',
            price: 'M.R.P ₹ 15.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590000086/coconut-1-pc-approx-350-g-600-g-product-images-o590000086-p590000086-0-202203170206.jpg',
            title: 'Coconut 1 pc (Approx 350g - 650g)',
            price: 'M.R.P ₹ 24.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590003517/tomato-1-kg-product-images-o590003517-p590003517-0-202203170629.jpg',
            title: 'Tomato 1 kg',
            price: 'M.R.P ₹ 17.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590000171/cucumber-madras-1-kg-product-images-o590000171-p590000171-0-202203170607.jpg',
            title: 'Cucumber Madras 1 kg',
            price: 'M.R.P ₹ 78.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590003516/potato-per-kg-product-images-o590003516-p590003516-0-202203170642.jpg',
            title: 'Potato Per kg',
            price: 'M.R.P ₹ 33.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590000492/kinoo-orange-1-kg-product-images-o590000492-p590085177-0-202203170719.jpg',
            title: 'Kinoo Orange 1 kg',
            price: 'M.R.P ₹ 59.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
        {
            image: 'https://www.jiomart.com/images/product/150x150/590000448/mosambi-1-kg-product-images-o590000448-p590000448-0-202203170909.jpg',
            title: 'Mosambi 1 kg',
            price: 'M.R.P ₹ 115.00',
            button: 'Add to Cart',
            icon: <i class="fa-solid fa-plus"></i>
        },
    ]

    return (
        <div className='home'>
            <img src='https://www.jiomart.com/images/category/2/groceries-20210201.jpeg' />
            <div className='d-flex justify-content-between mt-4'>
                <div>
                    <span>Showing <b>20</b> of <b>277808</b> items</span>
                </div>
                <div>
                    <span>Sort by:</span>
                    <Button className='ms-2'>Popularity</Button>
                    <Button className='ms-2'>High to Low</Button>
                    <Button className='ms-2'>Low to High</Button>
                    <Button className='ms-2'>Discount</Button>
                    <Button className='ms-2'>All Products</Button>
                </div>
            </div>
            <div>

                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 row-cols-sm-2 g-4">
                        {cardData.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                price={card.price}
                                button={card.button}
                                icon={card.icon}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home