import Banner from "../Banner/Banner";
import TourType from "../TourType/TourType";
import Tourism from "../Tourism and Travel Guide/Tourism";
import TouristStory from "../TouristStory/TouristStory";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourism></Tourism>
            <TourType></TourType>
            <TouristStory></TouristStory>
            
           
        </div>
    );
};

export default Home;