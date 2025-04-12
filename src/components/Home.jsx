import React from "react";
import { useGlobalContext } from "../GlobalContext";
import image from "../assets/image.png";
import RecentNotes from "./RecentNotes";
import RandomNotes from "./RandomNotes";
import Footerz from "./Footer";
import Sponsored from "./Sponsored";

export default function Home(props) {
    const { address, setAddress } = useGlobalContext();
    console.log(props.rabi);

    return (
        <div className="flex flex-col w-full justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">
            <div className="flex justify-between p-10 max-w-7xl mx-auto">
                <div className="flex w-[50%] items-center justify-center">
                    <div>
                       
                        <h1 className="font-extrabold text-6xl text-gray-50 mx-2 my-5 leading-tight">
                            Learn, Share, Earn – Your Knowledge, Your Rewards!
                        </h1>
                        <h2 className="mx-1 my-5 p-1 text-xl text-gray-300">
                            Study with expert-led courses, share notes with peers, and earn rewards for your contributions. Join now and unlock your Web3 learning journey—60% off for a limited time! 🚀
                        </h2>
                        <button onClick={() => {}} className="bg-blue-700 py-3 px-6 text-white font-bold mx-5 my-2 rounded-lg shadow-lg hover:bg-blue-800 transition-all">
                            EXPLORE
                        </button>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center">
                    <img src={image} alt="Learning" className="w-96 h-auto rounded-xl shadow-lg" />
                </div>
            </div>

            {/* Categories Section */}
            <div className="max-w-7xl mx-auto my-16 text-center">
                <h2 className="text-4xl font-bold text-gray-100">Explore More</h2>
                <div className="flex justify-center gap-6 mt-6 flex-wrap">
                    {['Blockchain', 'Notes', 'AI & ML', 'Cybersecurity', 'Research Papers','Data Science'].map(category => (
                        <button key={category} className="bg-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-blue-100 transition-all">
                            {category}
                        </button>
                    ))}

    
                </div>

                <div
                className="w-full p-5"
                >
                    <div 
                    className="bg-white h-15 rounded flex">
                        <input 
                        className="w-full p-3"
                        type="text"
                        placeholder="Search courses here...."></input>
                        <button 
                        className="px-6 bg-red-200 font-bold rounded">
                            GO
                        </button>
                    </div>
 
                </div>
            </div>

        


         

         <div className="max-w-7xl mx-auto my-16">
            <RecentNotes />
            </div>




            <div class="max-w-8xl flex justofy-center w-full mx-auto px-8 py-8 bg-gray-200">
                <div
                className="max-w-5xl w-full mx-auto">
  <h1 class="text-3xl font-bold mb-8 ">More on AIPathshala</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
 
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Data Science" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Data Science</h3>
          <p class="text-sm text-gray-500">425 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Business" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Business</h3>
          <p class="text-sm text-gray-500">1095 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Computer Science" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Computer Science</h3>
          <p class="text-sm text-gray-500">668 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Health" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Health</h3>
          <p class="text-sm text-gray-500">471 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Social Sciences" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Social Sciences</h3>
          <p class="text-sm text-gray-500">401 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Personal Development" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Personal Development</h3>
          <p class="text-sm text-gray-500">137 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Arts and Humanities" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Arts and Humanities</h3>
          <p class="text-sm text-gray-500">338 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Physical Science and Engineering" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Physical Science and Engineering</h3>
          <p class="text-sm text-gray-500">413 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Language Learning" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Language Learning</h3>
          <p class="text-sm text-gray-500">150 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Information Technology" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Information Technology</h3>
          <p class="text-sm text-gray-500">145 courses</p>
        </div>
      </div>
    </div>
    
    <div class="border rounded-lg overflow-hidden shadow-sm hover:shadow-md bg-white transition-shadow">
      <div class="flex items-center p-4">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FqQWKqBrzB2Vf5GpS6AYJU6UoV5NBM.png" alt="Math and Logic" class="w-16 h-16 object-cover rounded" />
        <div class="ml-4">
          <h3 class="font-medium">Math and Logic</h3>
          <p class="text-sm text-gray-500">70 courses</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>






            <div className="max-w-7xl mx-auto my-16">
            <RandomNotes />
            </div>


            <div className="max-w-7xl mx-auto my-16">
<Sponsored/>
</div>


       
            <div className="max-w-7xl mx-auto my-16">
                <h2 className="text-4xl font-bold text-center text-gray-100">What Our Students Say</h2>
                <div className="grid p-5 grid-cols-2 gap-10 mt-10">
                    {[{
                        name: "0x401418iTx8U",
                        feedback: "This platform changed the way I learn. The courses are top-notch!",
                    }, {
                        name: "0x40T41tR41",
                        feedback: "Web3 learning has never been this rewarding. Highly recommended!",
                    }].map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
                            <img src={image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
                            <div>
                                <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
                                <h4 className="text-lg font-semibold text-gray-900 mt-2">- {testimonial.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footerz />
        </div>
    );
}
