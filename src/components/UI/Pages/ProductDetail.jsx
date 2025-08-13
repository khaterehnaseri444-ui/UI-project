import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Pages/ProductDetail.css'
import { products } from '../Pages/Home'
import Icon from './Icon/Icon';
import useDiscountPrice from '../hooks/useDiscountPrice';
import blue_shirt from '../../../../public/assets/Images/blue shirt.png'
import gradient_TShirt from '../../../../public/assets/Images/gradient T-shirt.png'
import pink_shirt from '../../../../public/assets/Images/pink shirt.png'
import black_TShirt from '../../../../public/assets/Images/black T-shirt.png'
import { useDispatch, useSelector } from 'react-redux';
import { increament, decreament } from '../feature/CounterSlice';
function ProductDetail() {
    const colors = [
        { id: 1, colorItem: 'pink', className: 'pinkBTN' },
        { id: 2, colorItem: 'blue', className: 'blueBTN' },
        { id: 3, colorItem: 'black', className: 'blackBTN' },
        { id: 4, colorItem: 'gray', className: 'grayBTN' },
    ];
    const sizes = [
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 3, size: 'Large' },
        { id: 4, size: 'X-Large' },
    ];
    const comments = [
        { id: 1, rates: 'firstComment', author: 'Samantha D.', iconTick: 'tickIcon', date: 'Posted on August 14, 2023', iconMore: 'moreIcon', comment: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. Its become my favorite go-to shirt."' },
        { id: 2, rates: 'secondComment', author: 'Alex M.', iconTick: 'tickIcon', date: 'Posted on August 15, 2023', iconMore: 'moreIcon', comment: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, Im quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."' },
        { id: 3, rates: 'thirdComment', author: 'Ethan R.', iconTick: 'tickIcon', date: 'Posted on August 16, 2023', iconMore: 'moreIcon', comment: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designers touch in every aspect of this shirt."' },
        { id: 4, rates: 'fourthComment', author: 'Olivia P.', iconTick: 'tickIcon', date: 'Posted on August 17, 2023', iconMore: 'moreIcon', comment: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. Its evident that the designer poured their creativity into making this t-shirt stand out."' },
        { id: 5, rates: 'fifthComment', author: 'Liam K.', iconTick: 'tickIcon', date: 'Posted on August 18, 2023', iconMore: 'moreIcon', comment: '"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designers skill. Its like wearing a piece of art that reflects my passion for both design and fashion."' },
        { id: 6, rates: 'sixthComment', author: 'Ava H.', iconTick: 'tickIcon', date: 'Posted on August 19, 2023', iconMore: 'moreIcon', comment: '"Im not just wearing a t-shirt; Im wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."' },
    ];
    const mightLikeProducts = [
        { id: 1, score: 'blueShirtScore', rates: 'blueShirtRates', title: 'Polo with Contrast Trims', price: '212', discount: '20', img: blue_shirt },
        { id: 2, score: 'gradientTShirtScore', rates: 'gradientTShirtRates', title: 'Gradient Graphic T-shirt', price: '145', img: gradient_TShirt },
        { id: 3, score: 'pinkShirtScore', rates: 'pinkShirtRates', title: 'Polo with Tipping Details', price: '180', img: pink_shirt },
        { id: 4, score: 'blackTShirt', rates: 'blakTShirtRates', title: 'Black Striped T-shirt', price: '120', discount: '30', img: black_TShirt },
    ]
    const filterFirstPartComments = comments.filter(item => item.id < 4);
    const filterSecondPartComments = comments.filter(item => item.id > 3);
    const { id } = useParams();
    const productsDetail = products.find(item => item.id == id)
    const state = useSelector((state) => state.counter.counterValue)
    const dispatch = useDispatch()
    const [IsSizeClick, setIsSizeClick] = useState('Large')
    const [selectColor, setSelectColor] = useState('black')
    const chooseColor = (color) => {
        setSelectColor(color)
    };
    return (
        <>
            <div className='path'>
                <hr />
                <div className='pathDetail'>
                    <Link to='/'>Home</Link> {`>  Shop >  Men > T-shirt`}
                </div>
            </div>
            <div className='detail'>
                <div className='container'>
                    <div className='images'>
                        <div className='verticalIMG'>
                            <img src={`${productsDetail.img}`} />
                            <img src={`${productsDetail.img}`} />
                            <img src={`${productsDetail.img}`} />
                        </div>
                        <div className='mainIMG'>
                            <img src={`${productsDetail.img}`} />
                        </div>
                    </div>
                    <div className='description'>
                        <h1 className='title-detail'>{productsDetail.title}</h1>
                        <div className='score-Reates'>
                            <Icon name={productsDetail.score} />
                            <Icon name={productsDetail.rates} />
                        </div>
                        <div className='price'>
                            {productsDetail.discount ? (<><p className='newPrice'>${useDiscountPrice(productsDetail.price, productsDetail.discount)}</p>
                                <p className='oldPrice'>${productsDetail.price}</p>
                                <span className='discount'>-{productsDetail.discount}%</span>
                            </>) : (<><h2>${productsDetail.price}</h2></>)}
                        </div>
                        <span className='explanition'>{productsDetail.description}</span>
                        <hr />
                        <div className='colorsPart'>
                            <p>Select Colors</p>
                            <div className='buttonsColor'>
                                {colors.map((item , index) => (
                                    <React.Fragment key={item.id}>
                                        <button onClick={() => chooseColor(item.colorItem)} className={item.className}>
                                            {selectColor === item.colorItem && (<Icon name={'tick'} />)}
                                        </button>
                                    </React.Fragment>
                                ))}
                            </div>
                            <hr />
                        </div>
                        <div className='sizePart'>
                            <p>Choose Size</p>
                            <div className='buttonsSize'>
                                {sizes.map((item) => (
                                    <React.Fragment key={item.id}>
                                        <button className={IsSizeClick === item.size ? 'sizeClick' : 'sizeBTN'} onClick={() => setIsSizeClick(item.size)}>{item.size}</button>
                                    </React.Fragment>
                                ))}
                            </div>
                            <hr />
                        </div>
                        <div className='addPart'>
                            <div className='show'>
                                <button className='miniMize' onClick={()=>dispatch(decreament())}>
                                    <Icon name={'miniMize'} />
                                </button>
                                <div className='showPart'>{state}</div>
                                <button className='plus' onClick={()=>dispatch(increament())}>
                                    <Icon name={'plus'} />
                                </button>
                            </div>
                            <button className='cartBTN'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div >
            <div className='more'>
                <div className='moreContainer'>
                    <div className='productDetail'>Product Details</div>
                    <div className='Rating-Reviews'>Rating & Reviews</div>
                    <div className='FAQs'>FAQs</div>
                </div>
                <hr />
            </div>
            <div className='moreIcons'>
                <div className='moreIcons-container'>
                    <div className='text'>
                        <p>All Reviews</p>
                        <span>(451)</span>
                    </div>
                    <div className='icons'>
                        <button className='filterBTN'><Icon name={'filterBTN'} /></button>
                        <div className='selectBox'>
                            <p>Latest</p>
                            <Icon name={'latest-icon'}/>
                        </div>
                        <button className='review'>Write a Review</button>
                    </div>
                </div>
            </div>
            <div className="comments">
                <div className="commetsContainer">
                    <div className="firstVertical">
                        {filterFirstPartComments.map((user) => (
                            <React.Fragment key={user.id}>
                                <div className="commetsCard">
                                    <div className='rates-more'>
                                        <Icon name={user.rates} />
                                        <div className='moreIcon'>
                                            <Icon name={user.iconMore} />
                                        </div>
                                    </div>
                                    <div className='authorPart'>
                                        <h4>{user.author}</h4>
                                        <Icon name={user.iconTick} />
                                    </div>
                                    <p className='commentP'>
                                        {user.comment}
                                    </p>
                                    <p className='date'>
                                        {user.date}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="secondVertical">
                        {filterSecondPartComments.map((user) => (
                            <React.Fragment key={user.id}>
                                <div className='commetsCard'>
                                    <div className='rates-more'>
                                        <Icon name={user.rates} />
                                        <div className='moreIcon'>
                                            <Icon name={user.iconMore} />
                                        </div>
                                    </div>
                                    <div className='authorPart'>
                                        <h4>{user.author}</h4>
                                        <Icon name={user.iconTick} />
                                    </div>
                                    <p className='commentP'>
                                        {user.comment}
                                    </p>
                                    <p className='date'>
                                        {user.date}
                                    </p>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            <div className='loadBtnPart'>
                <button>Load More Reviews</button>
            </div>
            <div className='lastTitle'>
                <h1>YOU MIGHT ALSO LIKE</h1>
            </div>
            <div className='mightLike'>
                {mightLikeProducts.map((item) => (
                    <React.Fragment key={item.id}>
                        <div className="mightLike-card">
                            <img src={item.img} />
                            <h3>{item.title}</h3>
                            <div className="score-rates">
                                <Icon name={item.score} />
                                <Icon name={item.rates} />
                            </div>
                            <div className="price-mightLike">
                                {item.discount ? (<div className='price-container'>
                                    <p className='oldPrice-mightLike'>${useDiscountPrice(item.price, item.discount)}</p>
                                    <p className='newPrice-mightLike'>${item.price}</p>
                                    <span className='price-container-mightLike'>-{item.discount}%</span>
                                </div>) : (<>
                                    <p className='mainPrice-mightLike'>${item.price}</p>
                                </>)}
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>

    );
}

export default ProductDetail;