import React from "react";
import Header from "../components/Header";
import ProjectImgCard from "../components/ProjectImgCard";

function Projects() {
/* This is a React component that renders a section containing a header and multiple
`ProjectImgCard` components. The `data-aos` attribute is used for animating the section using
the AOS library. The `id` and `className` attributes are used for styling purposes. The `Header`
component renders a header with a main text, back text, and alignment. The `ProjectImgCard`
components render a card with an image, title, and description. The `flex` and `justify-center`
classes are used for centering the cards within the section. */

  return (
    <section
      data-aos="fade-up"
      id="project"
      className="section-p section-color-sec"
    >
      <Header mainText="MY WORKS" backText="PROJECTS" align="center" />

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
