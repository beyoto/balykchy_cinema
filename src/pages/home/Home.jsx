import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './Home.scss';
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';

// Замени на реальные данные (например, из API)
const heroSlides = [
  {
    id: 1,
    title: 'Окен ава',
    tagline: 'Айылдын керемети, уруулуктун себепкери',
    image: 'https://manascinema.com/files/default/image?hash=a7e16b2c4aa508f0c25792825f48a619&width=1960&webp=1',
  },
  {
    id: 2,
    title: 'Бригада',
    tagline: 'Чогулуш',
    image: 'https://manascinema.com/files/default/image?hash=d74bd5330a4f700c65efcdec8c774797&width=1960&webp=1',
  },
  {
    id: 3,
    title: 'Кудай сактасын 2',
    tagline: 'Адептин башы, тынчылыктын ашы',
    image: 'https://manascinema.com/files/default/image?hash=e4d7f0b8f95d80168220b2ee443302d1&width=1960&webp=1',
  },
];

const movies = [
  { id: 1, title: 'Кудай сатасын 2', genre: 'Комедия', poster: 'https://manascinema.com/files/default/image?hash=ef87907b465b7736ee6301b16deb3285&width=400&webp=1' },
  { id: 2, title: 'Окен ава', genre: 'Комедия', poster: 'https://manascinema.com/files/default/image?hash=60d00f73b1a8dd4f7672006401ba593e&width=400&webp=1' },
  { id: 3, title: 'Бригада', genre: 'Комедия', poster: 'https://manascinema.com/files/default/image?hash=b21082c9bdc5f4745ae77bdc66ff0c10&width=400&webp=1' },
  { id: 4, title: 'Апам', genre: 'Драма', poster: 'https://manascinema.com/files/default/image?hash=a31075456b0471a42c81bdc2544dcff6&width=400&webp=1' },
];

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="home">
      {/* Hero-карусель */}

      <Header />


      <section className="hero">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={900}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          grabCursor
          className="hero__swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="hero__slide">
                <img src={slide.image} alt={slide.title} className="hero__image" />
                <div className="hero__content">
                  <span className="hero__eyebrow">Сейчас в прокате</span>
                  <h1 className="hero__title">{slide.title}</h1>
                  <p className="hero__tagline">{slide.tagline}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Кнопки расписания */}
      <section className="schedule-actions">
        <button className="btn btn--outline" type="button" onClick={() => {nav('/schedule')}}>
          Расписание сеансов
        </button>
        <button className="btn btn--solid" type="button" onClick={() => {nav('/schedule/movies')}}>
          Расписание фильмов
        </button>
      </section>

      {/* Карточки фильмов */}
      <section className="movies">
        <h2 className="movies__title">Афиша</h2>
        <div className="movies__grid">
          {movies.map((movie) => (
            <article className="movie-card" key={movie.id}>
              <div className="movie-card__poster">
                <img src={movie.poster} alt={movie.title} loading="lazy" />
                <div className="movie-card__perforation" aria-hidden="true" />
              </div>
              <h3 className="movie-card__title">{movie.title}</h3>
              <span className="movie-card__genre">{movie.genre}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}