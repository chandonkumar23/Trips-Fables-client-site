import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="mb-5">
      <div>
        <div className="m-4">
          <span className="text-slate-400">Date:23/4/2022</span>
          <img
            className="h-[400px] w-full"
            src="https://i.postimg.cc/nrwFnt5K/srimangal.jpg"
            alt=""
          />
          <div className="flex items-center gap-2">
            {" "}
            <FaRegHeart />
            <span>100k</span>
            <span>
              <FaRegComment />
            </span>
            1.2k{" "}
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            Exploring the Tranquil Charms of Srimangal: The Tea Capital of
            Bangladesh
          </h2>
          <p>
            Welcome to Srimangal, a hidden gem nestled in the lush landscapes of
            northeastern Bangladesh. Known as the Tea Capital of Bangladesh,
            this enchanting destination beckons travelers with its sprawling tea
            estates, rich biodiversity, and a serene atmosphere that promises a
            refreshing escape from the hustle and bustle of city life. 1. Tea
            Gardens: Where Green Meets Serenity Srimangal is synonymous with
            tea, and the vast tea gardens that carpet the region are a testament
            to its prominence in the world of tea production. A visit to the
            Lawachara Tea Estate is a must for anyone seeking to witness the
            meticulous process of tea cultivation. Stroll through the neatly
            manicured rows of tea bushes, breathe in the fresh mountain air, and
            let the tranquility of the surroundings wash over you. 2. Lawachara
            National Park: A Biodiversity Haven For nature enthusiasts,
            Lawachara National Park is a paradise waiting to be explored. This
            biodiverse haven is home to an array of flora and fauna, including
            the charismatic hoolock gibbons. Embark on a guided trek through the
            dense forest, listening to the symphony of birdcalls and keeping an
            eye out for the elusive wildlife that calls Lawachara home. 3.
            Baikka Beel: A Wetland Sanctuary for Birdwatching Nature and bird
            lovers will find solace at Baikka Beel, a serene wetland sanctuary.
            This picturesque spot becomes a haven for migratory birds during the
            winter season. Grab your binoculars and observe the graceful dance
            of ducks and other avian visitors against the backdrop of the
            tranquil water. 4. Ham Ham Waterfall: A Natural Retreat In the heart
            of the Lawachara Forest lies Ham Ham Waterfall, a hidden gem that
            invites intrepid travelers for a short trek. The journey through the
            forest is as rewarding as the destination itself, with the soothing
            sound of cascading water guiding you to this secluded oasis. Take a
            moment to soak in the beauty of the waterfall, surrounded by the
            untouched beauty of nature. 5. Srimangal Haor: Where Water Meets
            Greenery Srimangal is surrounded by haors, shallow wetlands that add
            to the regions natural allure. These haors are not only a source of
            picturesque landscapes but also a vital part of the local ecosystem.
            Explore the serene waters, witness the play of light and shadow on
            the surface, and connect with the authentic charm of rural life. In
            Srimangal, every corner tells a story of tranquility, tea, and
            timeless natural beauty. Whether youre a tea enthusiast, a nature
            lover, or simply someone seeking a peaceful retreat, Srimangal
            welcomes you with open arms. Discover the magic of this Tea Capital,
            where every sip of tea is a sip of serenity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
