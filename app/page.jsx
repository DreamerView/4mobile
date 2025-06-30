import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Promo from "@/component/Promo";
import Map  from "@/component/Map"

const Home = () => {
    return(
        <div className="d-flex flex-column gap-5">
            <CardList />
            <CardList />
            <SocialNetwork />
            <Map />
        </div>
    )
}

export default Home;