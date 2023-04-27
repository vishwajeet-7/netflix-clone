import React from "react";
import "./Banner.css";

const Banner = () => {

const truncate = (string,n) => {
    return string?.length > n ? string.substring(0,n-1) + '...' : string;
}
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate('This is a test description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dicta rerum nulla omnis sit incidunt ullam necessitatibus odio ut veniam voluptatem eveniet, ipsum numquam ipsam veritatis id aliquid. Excepturi, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae esse, ex nisi dolore magnam possimus unde vitae officiis. Repellat velit ipsa sapiente voluptatem repellendus explicabo vitae quod dolorem voluptates fuga!',160)}</h1>
      </div>
      <div className="banner__fadeBottom"/>
    </header>
  );
};

export default Banner;
