import Hero from "../Components/Hero/Hero.jsx"
import NewCollections from "../Components/NewCollections/NewCollections.jsx"
import NewLetter from "../Components/NewsLetter/NewsLetter.jsx"
import Offers from "../Components/Offers/Offers.jsx"
import Popular from "../Components/Popular/Popular.jsx"

export default function Shop() {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollections />
            <NewLetter />
        </div>
    )
}