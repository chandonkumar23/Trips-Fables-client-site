import { useContext } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const handleStory = (event) => {
    event.preventDefault();
    const form = event.target;
    const tourType = form.tourType.value;
    const date = form.date.value;
    const Rate = form.Rate.value;
    const story = form.story.value;
    const allStory = { tourType, date, Rate, story };
    console.log(allStory);
    fetch("http://localhost:5000/story", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allStory),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Story Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="w-[800px] flex justify-center mx-auto">
      <div className="pt-7 mb-7">
        <div className="flex items-center gap-2 mb-10">
        <div><img className="h-[100px] w-[100px] rounded-full mx-auto" src={user?.photoURL} alt="" /></div>
        <div>
          <h2 className="text-xl font-bold">
            <span className="text-[#64A893]">Name:</span> {user?.displayName}
          </h2>
          <p>
            <span className="font-bold text-[#64A893]]">Gmail Address</span>: {user?.email}
          </p>
        </div>
        </div>
        <div className="pt-15 border-2 p-4 bg-white text-[#64A893] rounded-md shadow-2xl">
          <h1>Fillup this form and share your story</h1>

          <div className="pt-10 flex ">
            <form onSubmit={handleStory}>
             <div className="flex gap-4 items-center">
             <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Tour Type</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Tour Type"
                    className="border-2 p-2"
                    required
                    name="tourType"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Enter Your Name"
                    className="border-2 p-2"
                    required
                    name="date"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Give Rateing</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Rate"
                    className="border-2 p-2"
                    required
                    name="Rate"
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Write Your Story</span>
                  </label>
                  <textarea
                    className="border-2"
                    name="story"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
             </div>
                <div className="form-control mt-6">
                  <button className="p-2 border-2 bg-[#2EC1DB] text-black shadow-2xl">
                    Add Story
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
