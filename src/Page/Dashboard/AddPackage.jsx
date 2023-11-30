import Swal from "sweetalert2";

const AddPackage = () => {


    const handleAdd = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const tourType = form.tourType.value;
        const tripTitle = form.tripTitle.value;
        const price = form.price.value;
        const galleryIM1 = form.galleryIM1.value;
        const galleryIM2 = form.galleryIM2.value;
        const galleryIM3 = form.galleryIM3.value;
        const galleryIM4 = form.galleryIM4.value;
        const day1Title = form.day1Title.value;
        const day1plan = form.day1plan.value;
        const day2Title = form.day1Title.value;
        const day2plan = form.day1plan.value;
        const About = form.About.value;
        console.log(image,tourType,tripTitle,price,galleryIM1,galleryIM2,galleryIM3,galleryIM4,day1Title,day1plan,day2Title,day2plan,About)
    
        const addData = {
            image,tourType,tripTitle,price,galleryIM1,galleryIM2,galleryIM3,galleryIM4,day1Title,day1plan,day2Title,day2plan,About
        }
        fetch ('https://asssignment-12-serverrr.vercel.app/all',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(addData)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Package Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

  return (
    <div>
      <h2 className="text-4xl w-full text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#2EC1DB] to-sky-500/30">
        Add New Package.
      </h2>
      <div className="flex mx-auto justify-center rounded-xl">
        <div className="hero min-h-screen ">
          <div className="card flex-shrink-0 w-full max-w-md border-2  ">
            <form onSubmit={handleAdd} className="card-body">
              <div className=" sm:block lg:flex gap-3">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Tour Image</span>
                    </label>
                    <input
                      className="border-2  border-[#2EC1DB] rounded-sm"
                      required
                      name="image"
                      type="text"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tour Type</span>
                    </label>
                    <input
                      className="border-2  border-[#2EC1DB]  rounded-sm"
                      required
                      name="tourType"
                      type="text"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Tour Name</span>
                    </label>
                    <input
                      className="border-2  border-[#2EC1DB] rounded-sm"
                      type="text"
                      name="tripTitle"
                    />
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      className="border-2  border-[#2EC1DB]  rounded-sm"
                      name="price"
                      type="number"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Gallery Image(1)</span>
                    </label>
                    <input
                      className="border-2  border-[#2EC1DB]  rounded-sm"
                      required
                      name="galleryIM1"
                      type="text"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Gallery Image(2)</span>
                    </label>
                    <input
                      className="border-2 border-[#2EC1DB]  rounded-sm"
                      required
                      name="galleryIM2"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gallery Image(3)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="galleryIM3"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gallery Image(4)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="galleryIM4"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Day Title(1)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="day1Title"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Day Plan(1)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="day1plan"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Day Title(2)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="day2Title"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Day Plan(2)</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="day2plan"
                  type=""
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  className="border-2  border-[#2EC1DB] rounded-sm"
                  required
                  name="About"
                  type="text"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#2EC1DB] text-black ">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
