import React, { useState } from 'react';
import './Moviesschedulepage.scss';
import Header from '../../components/header/Header';

// Замени на реальные данные с бэкенда
const movies = [
  {
    id: 1,
    title: 'Апам',
    genre: 'Драма, Кыргызстан, 100 мин',
    age: '16+',
    poster: 'https://placehold.co/160x220/1a1416/d4a24c?text=Poster',
    schedule: [
      { date: '05 сентября', times: ['17:30', '19:30', '21:30'] },
      { date: '06 сентября', times: ['18:00', '20:30'] },
    ],
  },
  {
    id: 2,
    title: 'Кудай сактасын 2',
    genre: 'Комедия, Кыргызстан, 95 мин',
    age: '12+',
    poster: 'https://placehold.co/160x220/1a1416/8c2f39?text=Poster',
    schedule: [
      { date: '05 сентября', times: ['18:00', '20:15'] },
      { date: '06 сентября', times: ['17:00', '19:15', '21:30'] },
    ],
  },
];

export default function MoviesSchedulePage() {
  const [openId, setOpenId] = useState(movies[0]?.id ?? null);

  return (
    <>
      <Header />
      <div className="movies-schedule">
        <h1 className="movies-schedule__title">Расписание фильмов</h1>

        <div className="movies-schedule__list">
          {movies.map((movie) => {
            const isOpen = openId === movie.id;
            return (
              <article
                className={`movie-schedule-card ${isOpen ? 'movie-schedule-card--open' : ''}`}
                key={movie.id}
              >
                <button
                  className="movie-schedule-card__header"
                  onClick={() => setOpenId(isOpen ? null : movie.id)}
                  type="button"
                >
                  <img src={movie.poster} alt={movie.title} className="movie-schedule-card__poster" />
                  <div className="movie-schedule-card__info">
                    <h2>{movie.title}</h2>
                    <p>{movie.genre}</p>
                    <span className="movie-schedule-card__age">{movie.age}</span>
                  </div>
                  <span className="movie-schedule-card__chevron">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="movie-schedule-card__body">
                    {movie.schedule.map((day) => (
                      <div className="movie-schedule-card__day" key={day.date}>
                        <span className="movie-schedule-card__date">{day.date}</span>
                        <div className="movie-schedule-card__times">
                          {day.times.map((time) => (
                            <button key={time} className="time-chip" type="button">
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}