import React from "react";
import Header from "../components/Header";
import ProjectImgCard from "../components/ProjectImgCard";

function Projects() {
  return (
    <section
      data-aos="fade-up"
      id="project"
      className="section-p section-color-sec"
    >
      <Header mainText="MY WORKS" backText="PROJECTS" align="center" />

      {/* <div className='mt-10'>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
        
          <a data-aos='fade-up' href="#" className="group h-64 md:h-80 flex items-end bg-gray-100 overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Design</span>
          </a>

          <a data-aos='fade-up' href="#" className="group h-64 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">VR</span>
          </a>

          <a data-aos='fade-up' href="#" className="group h-64 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1605134550917-5fe8cf25a125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Console</span>
          </a>

          <a data-aos='fade-up' href="#" className="group h-64 md:h-80 flex items-end bg-gray-100 overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Tech</span>
          </a>

          <a data-aos='fade-up' href="#" className="group h-64 md:h-80 md:col-span-3 flex items-end bg-gray-100 overflow-hidden shadow-lg relative">
            <img src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />

            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

            <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">Game</span>
          </a>

        </div>
      </div> */}

      <div className="flex flex-wrap justify-center mt-10">
        <div className="lg:w-1/4 md:w-2/4 flex flex-col px-2">      
          <ProjectImgCard
            title="Product 1"
            img="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
          <ProjectImgCard
            title="Product 2"
            img="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
        </div>
        <div className="lg:w-1/4 md:w-2/4 flex flex-col px-2">
          <ProjectImgCard
            title="Product 3"
            img="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
          <ProjectImgCard
            title="Product 4"
            img="https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
        </div>

        <div className="lg:w-1/4 md:w-2/4 flex flex-col px-2">
          <ProjectImgCard
            title="Product 5"
            img="https://images.unsplash.com/photo-1609172795052-05bf80681031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
         
          <ProjectImgCard
            title="Product 6"
            img="https://images.unsplash.com/photo-1552010099-5dc86fcfaa38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
        </div>

        <div className="lg:w-1/4 md:w-2/4 flex flex-col px-2">
          <ProjectImgCard
            title="Product 7"
            img="https://images.unsplash.com/photo-1554080204-5c97677848bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
          
          <ProjectImgCard
            title="Product 8"
            img="https://images.unsplash.com/photo-1589060040843-7a31813e6fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto magnam totam laborum, atque dignissimos sit earum ex pariatur, alias non, consectetur unde dolorem exercitationem aliquam eum magni accusantium officiis commodi."
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
