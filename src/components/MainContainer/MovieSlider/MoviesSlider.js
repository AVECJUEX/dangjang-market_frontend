/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import event1 from "../../../IMG/event1.jpg";
import event2 from "../../../IMG/event2.jpg";
import event3 from "../../../IMG/event3.jpg";
import event4 from "../../../IMG/event4.jpg";
import event5 from "../../../IMG/event5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MoviesBox = styled.div`
  .Category {
    white-space: nowrap;
    max-width: 1320px;
    padding: 12px 0 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 60px;
    line-height: 30px;

    @media ${(props) => props.theme.mobile} {
      padding-top: 0px;
    }
  }

  .Category p {
    color: #292a32;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.4px;
    line-height: 30px;

    @media ${(props) => props.theme.mobile} {
      font-size: 25px;
    }
  }
`;

const EventBox = styled.div`

p {
    color: #292a32;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.4px;
    line-height: 30px;

 
    }
  
`;

const MoviesSlider = styled.div`
  position: relative;
  transform: translate3d(0px, 0px, 0px);
  margin: 0px -8px;

  .listbox{
    padding-right : 0px;
  }

  .list{
    display: inline-block;
    width : 20%;
    height: auto;
  }  

  li {
    list-style: none;
  }

  img {
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
  }

  a {
    
    display: inline-block;
    text-decoration: none;
    margin: 0px 8px;
  }

  

  .Movie,
  img {
    border-radius: 5px;
    

  }



  .MovieInfo {
    font-size: 12px;
    text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
  }

  .MovieInfo p {
    color: #292a32;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }

  .MovieInfo__name {
    font-size: 16px !important;
    font-weight: bold !important;
  }

  .MovieInfo__average {
    color: #555765;
  }

  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    left: 0px;
    top: -100%;
    color: black;
  }

  .slick-slider {
    display: flex;
    justify-content: center;

    .slick-prev.slick-disabled:before,
    .slick-next.slick-disabled:before {
      display: none;
    }
  }
`;

function MoviesSliderContainer() {
  const { movies, mobileSearch } = useSelector((state) => ({
    movies: state.reducer.movies,
    mobileSearch: state.reducer.mobileSearch,
  }));

  const settings = {
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
    ],
  };

  let movie = movies.slice().sort((a, b) => b.grade - a.grade);
  const USA = movies.filter((contrys) => contrys.contry === "미국");
  let usa = USA.slice().sort((a, b) => b.grade - a.grade);
  const KOREA = movies.filter((contrys) => contrys.contry === "한국");
  let korea = KOREA.slice().sort((a, b) => b.grade - a.grade);
  const JAPAN = movies.filter((contrys) => contrys.contry === "일본");
  let japan = JAPAN.slice().sort((a, b) => b.grade - a.grade);

  return (
    <>
            
         
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

  
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
  </div>
        <EventBox>
          <div className="a">
          <br></br>
          <p>이벤트</p>
        
          <div class="carousel-inner" >
            <div class="carousel-item active">
              <img src={event1} alt="Los Angeles" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
              <img src={event2} alt="Chicago" class="d-block w-100"/>
            </div>
            <div class="carousel-item">
              <img src={event3} alt="New York" class="d-block w-100"/>
          </div>
            <div class="carousel-item">
              <img src={event4} alt="New York" class="d-block w-100"/>
          </div>
            <div class="carousel-item">
              <img src={event5} alt="New York" class="d-block w-100"/>
          </div>
         </div>
          </div>
        </EventBox>
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
      <MoviesBox>
        <div className="Category">
        <p>최신 물품</p>
         
        </div>
        <MoviesSlider>
          <div className="listbox">
              {movie.map((movie, rank) => (
                <div className="list" key={movie.id}>
                  <li>
                    <Link to={`/movieinfo${movie.id}`}>
                      <div className="Movie">
                        <img src={movie.movie_photo} alt=""></img>
                        
                      </div>
                      <div className="MovieInfo">
                        <p className="MovieInfo__name">{movie.movie_name}</p>
                        <p className="MovieInfo__from">{movie.since}</p>
                        <p className="MovieInfo__average">
                          평균★ {movie.grade}
                        </p>
                      </div>
                    </Link>
                  </li>
                </div>
              ))}
              <a href="#!"></a>
          </div>
        </MoviesSlider>
      </MoviesBox>
     
    </>
  );
}

export default MoviesSliderContainer;
