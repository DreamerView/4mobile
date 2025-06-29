import CardList from "@/component/CardList";
import SocialNetwork from "@/component/SocialNetwork";
import Promo from "@/component/Promo";

const Home = () => {
    return(
        <div className="d-flex flex-column gap-5">
            <Promo />
            <CardList />
            <CardList />
            <SocialNetwork />
        </div>
    )
}

export default Home;