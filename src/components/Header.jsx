import VisibleHeader from "./VisibleHeader"
import '../components/Header.css'
import Icon from "./UI/Pages/Icon/Icon"
function Header() {
    return (
        <>
            <VisibleHeader />
            <div className="header">
                <h1>SHOP.CO</h1>
                <ul>
                    <li>
                        <select>
                            <option>shop</option>
                            <option>T-shirt</option>
                            <option>Pants</option>
                        </select>
                    </li>
                    <li>
                        On Sale
                    </li>
                    <li>
                        New Arrivals
                    </li>
                    <li>
                        Brands
                    </li>
                </ul>
                <div className="searchBar">
                    <Icon name={'search'} />
                    <input type="text" placeholder="Search for products..." />
                </div>
                <div className="header-icons">
                    <div className="cart-icon">
                        <Icon name={'shoppingCart'} />
                    </div>
                    <div className="profile-icon">
                        <Icon name={'profile'} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header