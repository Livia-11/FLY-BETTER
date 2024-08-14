import React from 'react';
import './Blog.css';
import blog from '../../assets/blog.jpg';

const Blog = () => {
  return (
    <>
    <section className='sub-blog'>
        <div>
          <h1>FlyBetter Blog: Soaring Through Travel Excellence</h1>
        </div>
      </section>

    <section className="blog-content">
      <div className="row">
        <div className="blog-left">
          <img src={blog} alt="Blog Image" />
          <h2>FlyBetter Blog: Soaring Through Travel Excellence</h2>
          <p>
            Welcome to the FlyBetter Blog, your passport to a world of seamless travel experiences. Dive into captivating stories, expert travel tips, and the latest updates in aviation. Whether you're a seasoned jetsetter or a first-time traveler, our blog is your go-to resource for inspiration and insights. Join us as we explore the skies, share exclusive content, and uncover the secrets to making every journey extraordinary. FlyBetter — where the adventure begins with each blog post.
          </p>
          <br />
          <p>
            Embark on a journey of discovery as we delve into the nuances of air travel, unveiling hidden gems in travel destinations, and decoding the art of stress-free journeys. From insider perspectives on the latest industry trends to in-depth guides that simplify your travel experience, the FlyBetter Blog is your companion for navigating the skies with confidence and style. Stay tuned for regular updates that elevate your travel IQ and immerse yourself in a world where every flight is a chapter in your own unique adventure. Join us and let your travel dreams take flight with FlyBetter.
          </p>
          <br />
          <p>
            As we continue this exciting voyage together, the FlyBetter Blog becomes your portal to an array of travel hacks, exclusive interviews with industry experts, and firsthand accounts of breathtaking destinations. Whether you seek travel inspiration, practical advice, or the latest updates on FlyBetter innovations, our blog is crafted to be your trusted source. Join a community of avid explorers, share your own travel tales, and let the FlyBetter Blog be the compass guiding you towards extraordinary adventures. Bon voyage!
          </p>
          <br />
          <p>
            In the dynamic world of FlyBetter, our blog serves as a vibrant hub where travel enthusiasts converge, and stories take flight. Explore the skies through rich narratives, expert advice, and firsthand accounts that redefine the art of travel. With every post, we invite you to join a community that shares a passion for seamless journeys, unlocking the mysteries of destinations, and embracing the thrill of exploration. From tips that elevate your travel game to captivating tales that transport you to distant lands, the FlyBetter Blog is your key to a world where the adventure never ends. Join the expedition, and let your travel narrative intertwine with the ever-growing tapestry of FlyBetter experiences.
          </p>

          <div className="comment-box">
            <h3>Leave a comment</h3>

            <form className="comment-form">
              <input type="text" placeholder="Enter Name" required />
              <input type="email" placeholder="Enter Email" required />
              <textarea rows="5" placeholder="Your Comment" required />
              <button type="submit" className="hero-btn red-btn">POST COMMENT</button>
            </form>
          </div>
        </div>
        <div className="blog-right">
          <h3>Post Categories</h3>
          <div>
            <span>Destination Spotlights</span>
            <span>7</span>
          </div>
          <div>
            <span>Travel Tips and Hacks</span>
            <span>22</span>
          </div>
          <div>
            <span>Flight Updates and Innovations</span>
            <span>43</span>
          </div>
          <div>
            <span>User Stories and Experiences</span>
            <span>15</span>
          </div>
          <div>
            <span>Exclusive Promotions</span>
            <span>58</span>
          </div>
          <div>
            <span>Industry Insights</span>
            <span>91</span>
          </div>
          <div>
            <span>Event Coverage</span>
            <span>36</span>
          </div>
          <div>
            <span>Behind the Scenes</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Blog;
