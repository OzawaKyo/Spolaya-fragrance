import black from "./assets/black2.jpg"
import './button.css'
export default function Home(){
    return(
        <div className="Home">
            <img className="black" src={black} alt="" />
            <div className="home-text">
                <div>
                    <h1 className="smell">Take</h1>
                    <h1 className="smell">care of</h1>
                    <h1 className="smell">your smell</h1>
                </div>
                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, enim aspernatur. Corporis praesentium tenetur atque aliquid eius dolore similique cumque corrupti autem, facilis non aspernatur consectetur tempora quidem dignissimos hic.</p>
                <button className="button-27 shop-now">SHOP NOW</button>
            </div>
        </div>
    )
}