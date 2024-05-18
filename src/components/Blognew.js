import React, { useEffect, useState } from "react";
import "./my.css";
import Navbar from "./Navbar";
export default function Blognew() {
  const [data, setData] = useState({});
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    console.log("funcalled");
    // Fetch data from Node.js server
    fetch("http://localhost:3001/api/blognew")
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    // Update current date
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    setCurrentDate(formattedDate);
  }, []);

  return (
    <>
      <section id="blog" className="blog mt-5">
        <div className="bg-primary fixed-top">
          <Navbar className="bg-primary" />
        </div>
        <div className="container mt-5" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries ">
              <article className="entry">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">{data.title}</h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i>{" "}
                      <a href="blog-single.html">Blog Posted</a>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <time dateTime={currentDate}>{currentDate}</time>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>{data.blog}</p>
                  <div className="read-more">
                    <a href="blog-single.html">Read More</a>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">Search</h3>
                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text" />
                    <button type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <a href="#">
                        General <span>(25)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Lifestyle <span>(12)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Travel <span>(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Design <span>(22)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Creative <span>(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Educaion <span>(14)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-1.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-2.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">Quidem autem et impedit</a>
                    </h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-3.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Id quia et et ut maxime similique occaecati ut
                      </a>
                    </h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-4.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Laborum corporis quo dara net para
                      </a>
                    </h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-recent-5.jpg" alt="" />
                    <h4>
                      <a href="blog-single.html">
                        Et dolores corrupti quae illo quod dolor
                      </a>
                    </h4>
                    <time datetime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
