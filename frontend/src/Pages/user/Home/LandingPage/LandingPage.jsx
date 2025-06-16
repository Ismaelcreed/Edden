import Hero_1 from "./Hero_1/Hero_1";
import Hero_2 from "./Hero_2/Hero_2";
import Hero_3 from "./Hero_3/Hero_3";

export default function LandingPage () {
    return(
        <div className="Landing-container">
            <Hero_1/>
            <Hero_2/>
             <Hero_3/>
        </div>
    )
}