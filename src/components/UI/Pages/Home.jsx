import '../Pages/Home.css'
import fashionable_couple from '../../../../public/assets/Images/fashionable-couple.jpg'
import Icon from './Icon/Icon'
import Tape_T_shirt from '../../../../public/assets/Images/Tape T-shirt.png'
import jeans from '../../../../public/assets/Images/jeans.png'
import shirt from '../../../../public/assets/Images/shirt.png'
import sleeve_T_shirt from '../../../../public/assets/Images/sleeve T-shirt.png'
import vertical_shirt from '../../../../public/assets/Images/vertical shirt.png'
import graphic_T_shirt from '../../../../public/assets/Images/graphic T-shirt.png'
import jean_short from '../../../../public/assets/Images/jean short.png'
import black_jean from '../../../../public/assets/Images/black jean.png'
import formal from '../../../../public/assets/Images/formal.png'
import casual from '../../../../public/assets/Images/casual.png'
import party from '../../../../public/assets/Images/party.png'
import gym from '../../../../public/assets/Images/gym.png'
import useDiscountPrice from '../hooks/useDiscountPrice'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { EffectFade , Navigation, Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-fade';
// import {Navigation} from 'swiper/react'
export const products = [
    { id: 1, title: 'T-shirt with Tape Details', score: 'tape-T-shirt-score', rates: 'tape-T-shirt-rates', price: '120', img: Tape_T_shirt, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 2, title: 'Skinny Fit Jeans', score: 'jeans-score', rates: 'jeans-rates', price: '240', discount: '20', img: jeans, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 3, title: 'Checkered Shirt', score: 'shirt-score', rates: 'shirt-rates', price: '180', img: shirt, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 4, title: 'Sleeve Striped T-Shirt', score: 'sleeve-score', rates: 'sleeve-T-shirt-rates', price: '130', discount: '30', img: sleeve_T_shirt, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 5, title: 'Vertical Striped Shirt', score: 'vertical-score', rates: 'vertical-rates', price: '232', discount: '20', img: vertical_shirt, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 6, title: 'Courage Graphic T-shirt', score: 'graphic-score', rates: 'graphic-rates', price: '145', img: graphic_T_shirt, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 7, title: 'Loose Fit Bermuda Shorts', score: 'short-score', rates: 'short-rates', price: '80', img: jean_short, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },
    { id: 8, title: 'Faded Skinny Jeans', score: 'faded-jeans-score', rates: 'faded-jeans-rates', price: '210', img: black_jean, description: 'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.' },

];
function Home() {
    const [price, newprice] = useDiscountPrice()
    const [swiperRef, setSwiperRef] = useState(null)
    const HandleNextClick = () => {
        if (swiperRef) {
            swiperRef.slideNext();
        }
    }
    const HandleBackClick = () => {
        if (swiperRef) {
            swiperRef.slidePrev();
        }
    }
    const brands = [
        { id: 1, name: 'versace' },
        { id: 2, name: 'zara' },
        { id: 3, name: 'gucci' },
        { id: 4, name: 'prada' },
        { id: 5, name: 'calvin' },
    ];
    const comments = [
        { id: 1, rates: 'commentsRates', icon: 'iconRates', author: 'Sarah M.', comment: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.' },
        { id: 2, rates: 'commentsRates', icon: 'iconRates', author: 'Alex K.', comment: '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”' },
        { id: 3, rates: 'commentsRates', icon: 'iconRates', author: 'James L.', comment: '"As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”' },
        { id: 4, rates: 'commentsRates', icon: 'iconRates', author: 'Arezo N.', comment: 'Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.' },
        { id: 5, rates: 'commentsRates', icon: 'iconRates', author: 'Khatereh N.', comment: '"As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”' },
    ];
    const filterNewArrivals = products.filter(item => item.id < 5);
    const filterTopSellings = products.filter(item => item.id > 4)
    return (
        <>
            <div className="home">
                <div className='home-text'>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <span>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</span>
                    <button>Shop Now</button>
                    <div className='box-number'>
                        <div className='brand-number'>
                            <h2>200+</h2>
                            <p >
                                International Brands
                            </p>
                        </div>
                        <hr />
                        <div className='products-number'>
                            <h2>2,000+</h2>
                            <p>High-Quality Products</p>
                        </div>
                        <hr />
                        <div className='customers-number'>
                            <h2>30,000+</h2>
                            <p>
                                Happy Customers
                            </p>
                        </div>
                    </div>
                </div>
                <img src={fashionable_couple} />
                <div className='bigStar'>
                    <Icon name={'bigStar'} />
                </div>
                <div className='smallStar'>
                    <Icon name={'smallStar'} />
                </div>
                <div className='brands'>
                    {brands.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className='brand-icon'>
                                <Icon name={item.name} />
                            </div>
                        </React.Fragment>
                    ))}

                </div>
            </div>
            <div className='title-newArrivals'>
                <h1>NEW ARRIVALS</h1>
            </div>
            <div className='newArrivals'>
                {filterNewArrivals.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className='newArrivals-card'>
                            <Link to={`/${item.id}`}>
                                <img src={item.img} />
                            </Link>
                            <h3>{item.title}</h3>
                            <div className='score-rates-newArrivals'>
                                <Icon name={item.score} />
                                <Icon name={item.rates} />
                            </div>
                            <div className='price-newArrivals'>
                                {item.discount ? (<div className='price-container-newAriivals'>
                                    <p className='newPriceNewArrivals'>${useDiscountPrice(item.price, item.discount)}</p>
                                    <p className='oldPriceNewArrivals'>${item.price}</p>
                                    <span className='discountNewArrivals'>-{item.discount}%</span>
                                </div>) : (<>
                                    <p className='mainPriceNewArrivals'>${item.price}</p>
                                </>)}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='view-butten'>
                <button>View All</button>
                <hr style={{ width: '1240px', height: '1px' }} />
            </div>
            <div className='title-TopSelling'>
                <h1>TOP SELLING</h1>
            </div>
            <div className='TopSelling'>
                {filterTopSellings.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className='TopSelling-card'>
                            <Link to={`/${item.id}`}>
                                <img src={item.img} />
                            </Link>
                            <h3>{item.title}</h3>
                            <div className='score-rates-topSelling'>
                                <Icon name={item.score} />
                                <Icon name={item.rates} />
                            </div>
                            <div>
                                {item.discount ? (<div className='price-container-topSelling'>
                                    <p className='newPriceTopSelling'>${useDiscountPrice(item.price, item.discount)}</p>
                                    <p className='oldPriceTopSelling'>${item.price}</p>
                                    <span className='discountPartTopSelling'>-{item.discount}%</span>
                                </div>) : (<>
                                    <p className='mainPriceTopSelling'>${item.price}</p>
                                </>)}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <div className='view-butten-selling'>
                <button>View All</button>
                <hr style={{ width: '1240px', height: '1px' }} />
            </div>
            <div className='options-pic'>
                <div className='main-pic'>
                    <h1>BROWSE BY DRESS STYLE</h1>
                    <div className='part1-pic'>
                        <div className='casual'>
                            <img src={casual} />
                            <h3>Casual</h3>
                        </div>
                        <div className='formal'>
                            <img src={formal} />
                            <h3>Formal</h3>
                        </div>
                    </div>
                    <div className='part2-pic'>
                        <div className='party'>
                            <img src={party} />
                            <h3>party</h3>
                        </div>
                        <div className='gym'>
                            <img src={gym} />
                            <h3>Gym</h3>
                        </div>
                    </div>
                </div>
                <div className='happyCostumers'>
                    <h1>OUR HAPPY CUSTOMERS</h1>
                    <div className='arrowIcons'>
                        <button onClick={HandleBackClick}>
                            <Icon name={'leftArrowIcon'} />
                        </button>
                        <button onClick={HandleNextClick}>
                            <Icon name={'rightArrowIcon'} />
                        </button>
                    </div>
                </div>
                <div className='comments'>
                    <div className="commentsPartContainer">
                        <Swiper
                            // modules={[EffectFade, Navigation, Pagination]}
                            onSwiper={setSwiperRef}
                            slidesPerView={3.75}
                            // spaceBetween={0}
                            navigation={false}
                            // pagination={{ clickable: true }}
                            // fadeEffect={{ crossFade: true }}
                            // centeredSlides={true}
                            effect="fade"
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesperview: 1
                                },
                                768: {
                                    slidesperview: 2
                                },
                                1024: {
                                    slidesperview: 3
                                }
                            }}>
                            {comments.map((item) => (
                                // <React.Fragment key={item.id}>
                                <SwiperSlide>
                                    <div className='comments-card'>
                                        <div style={{ marginLeft: '30px', marginBottom: '5px' }}>
                                            <Icon name={'commentsRates'} />
                                        </div>
                                        <div className='commentsNamePart'>
                                            <h5>{item.author}</h5>
                                            <div style={{ width: '24px', height: '24px', marginLeft: '5px' }}>
                                                <Icon name={'iconRates'} />
                                            </div>
                                        </div>
                                        <div className='commentsPart'>
                                            <span>{item.comment}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                // </React.Fragment>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Home