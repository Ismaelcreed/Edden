import ScrollVelocity from "../../../../../Components/VelocityScroll/VelocityScroll"
import "./Hero_3.scss"

function Hero_3() {
    return (
        <div className="Hero_3">
            <ScrollVelocity
                texts={['Edden', 'WebApplication Technologie Innovation Passion']}
                velocity={100}
                className="custom-scroll-text"
            />
        </div>
    )
}

export default Hero_3
