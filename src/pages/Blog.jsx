import React from "react";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import { BsArrowRight } from "react-icons/bs";

function Blog() {
/* This code is defining a React functional component called `Blog` that renders a section
containing a header and a grid of `BlogCard` components. The `Header` component takes in props
for the main text, back text, and alignment. The `BlogCard` components take in props for the
title, date, description, link, and image. The section also includes a button to see more posts.
The `data-aos` attribute is used for animating the section using the AOS library. The
`className` attributes are used for styling the section and its child components using Tailwind
CSS classes. */

  return (
    <section
      data-aos="fade-up"
      id="blog"
      className="section-color-sec section-p w-full"
    >
      <Header mainText="WHAT I WROTE" backText="BLOG" align="center" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-8">
        <BlogCard
          title="New tech stack"
          date="January 08 2023"
          link="#"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus, voluptatem, praesentium iusto maiores nemo adipisci id fuga magni magnam voluptas impedit eos sunt? Sunt nulla doloremque fugit earum facilis!"
          img="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        />
        <BlogCard
          title="Designer Tools"
          date="January 20 2023"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus, voluptatem, praesentium iusto maiores nemo adipisci id fuga magni magnam voluptas impedit eos sunt? Sunt nulla doloremque fugit earum facilis!"
          link="#"
          img="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
        />
        <BlogCard
          title="Top 10 Models"
          date="February 06 2023"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus, voluptatem, praesentium iusto maiores nemo adipisci id fuga magni magnam voluptas impedit eos sunt? Sunt nulla doloremque fugit earum facilis!"
          link="#"
          img="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
        <BlogCard
          title="Photography Angle"
          date="March 19 2023"
          link="#"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus, voluptatem, praesentium iusto maiores nemo adipisci id fuga magni magnam voluptas impedit eos sunt? Sunt nulla doloremque fugit earum facilis!"
          img="https://images.unsplash.com/photo-1559264729-91549dddfc45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />

        <div className="md:col-span-2 lg:col-span-4 flex lg:justify-center">
          <div
            data-aos="fade-up"
            className="flex w-full lg:max-w-4xl p-6 bg-gray-100 dark:bg-gray-900/30 items-center justify-between h-[5rem]"
          >
            <h2 className="md:text-xl text-gray-600 dark:text-gray-300">
              See my other post
            </h2>
            <a href="#">
              <button className="bg-primary-500 max-sm:text-sm flex items-center gap-2 text-white p-3 px-4">
                See More <BsArrowRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
