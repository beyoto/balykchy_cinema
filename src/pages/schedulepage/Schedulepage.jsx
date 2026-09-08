import React, { useState } from 'react';
import './Schedulepage.scss';
import Header from '../../components/header/Header';

// Замени на реальные данные с бэкенда
const dates = [
  { id: '2026-09-05', label: '05 сентября', day: 'Суббота' },
  { id: '2026-09-06', label: '06 сентября', day: 'Воскресенье' },
  { id: '2026-09-07', label: '07 сентября', day: 'Понедельник' },
  { id: '2026-09-08', label: '08 сентября', day: 'Вторник' },
];

const sessions = [
  {
    id: 1,
    date: '2026-09-05',
    title: 'Апам',
    age: '16+',
    genre: 'Драма',
    poster: 'https://manascinema.com/files/default/image?hash=a31075456b0471a42c81bdc2544dcff6&width=400&webp=1',
    hall: 'Манас',
    times: ['17:30', '19:30', '21:30', '23:30'],
  },
  {
    id: 2,
    date: '2026-09-05',
    title: 'Кудай сатасын 2',
    age: '12+',
    genre: 'Комедия',
    poster: 'https://manascinema.com/files/default/image?hash=ef87907b465b7736ee6301b16deb3285&width=400&webp=1',
    hall: 'Манас',
    times: ['18:00', '20:15'],
  },
  {
    id: 3,
    date: '2026-09-06',
    title: 'Апам',
    age: '16+',
    genre: 'Драма',
    poster: 'https://manascinema.com/files/default/image?hash=a31075456b0471a42c81bdc2544dcff6&width=400&webp=1',
    hall: 'Манас',
    times: ['18:00', '20:30'],
  },
];

export default function SchedulePage() {
  const [activeDate, setActiveDate] = useState(dates[0].id);
  const activeIndex = dates.findIndex((d) => d.id === activeDate);

  const goPrev = () => {
    if (activeIndex > 0) setActiveDate(dates[activeIndex - 1].id);
  };
  const goNext = () => {
    if (activeIndex < dates.length - 1) setActiveDate(dates[activeIndex + 1].id);
  };

  const todaysSessions = sessions.filter((s) => s.date === activeDate);

  return (
    <>
      <Header />
      <div className="schedule-page">
        <div className="schedule-page__header">
          <button className="schedule-page__arrow" onClick={goPrev} aria-label="Предыдущая дата">
            ←
          </button>
          <h1 className="schedule-page__title" >Расписание сеансов</h1>
          <button className="schedule-page__arrow" onClick={goNext} aria-label="Следующая дата">
            →
          </button>
        </div>

        <div className="schedule-page__dates">
          {dates.map((d) => (
            <button
              key={d.id}
              className={`date-chip ${d.id === activeDate ? 'date-chip--active' : ''}`}
              onClick={() => setActiveDate(d.id)}
              type="button"
            >
              <span className="date-chip__date">{d.label}</span>
              <span className="date-chip__day">{d.day}</span>
            </button>
          ))}
        </div>

        <div className="schedule-page__list">
          {todaysSessions.length === 0 && (
            <p className="schedule-page__empty">На эту дату сеансов нет</p>
          )}
          {todaysSessions.map((session) => (
            <article className="session-row" key={session.id}>
              <div className="session-row__poster">
                <img src={session.poster} alt={session.title} loading="lazy" />
                <span className="session-row__age">{session.age}</span>
              </div>
              <div className="session-row__info">
                <h2 className="session-row__title">{session.title}</h2>
                <p className="session-row__genre">{session.genre}</p>
                <span className="session-row__hall">{session.hall}</span>
                <div className="session-row__times">
                  {session.times.map((time) => (
                    <button key={time} className="time-chip" type="button">
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}