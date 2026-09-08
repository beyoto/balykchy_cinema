import React from 'react';
import './Contactspage.scss';
import Header from '../../components/header/Header';

// Замени на реальные данные кинотеатра
const contactInfo = [
  {
    id: 'address',
    label: 'Адрес',
    value: 'г. Балыкчы, ул. Абдрахманова, 156',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Телефон',
    value: '+996 700 123 456',
    href: 'tel:+996700123456',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 4h3l1.6 4.4L7.5 10a11 11 0 0 0 6.5 6.5l1.6-2.1L20 16v3a2 2 0 0 1-2.2 2C10.4 20.5 3.5 13.6 3 6.2A2 2 0 0 1 5 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Время работы',
    value: 'Ежедневно, 10:00 — 23:30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Почта',
    value: 'info@balykchycinema.kg',
    href: 'mailto:info@balykchycinema.kg',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.5 7 12 12.5 19.5 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

const socialLinks = [
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com' },
  { id: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/996700123456' },
  { id: 'facebook', label: 'Facebook', href: 'https://facebook.com' },
];

export default function ContactsPage() {
  return (
    <>
      <Header />
      <div className="contacts-page">
        <div className="contacts-page__intro">
          <span className="contacts-page__eyebrow">Мы на связи</span>
          <h1 className="contacts-page__title">Контакты</h1>
          <p className="contacts-page__subtitle">
            Есть вопрос по сеансу, брони зала или сотрудничеству? Пишите или звоните — ответим в тот же день.
          </p>
        </div>

        <div className="contacts-page__grid">
          {contactInfo.map((item) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <Wrapper
                key={item.id}
                className="contact-card"
                {...(item.href ? { href: item.href } : {})}
              >
                <span className="contact-card__icon">{item.icon}</span>
                <div className="contact-card__text">
                  <span className="contact-card__label">{item.label}</span>
                  <span className="contact-card__value">{item.value}</span>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="contacts-page__map">
          <iframe
            title="Карта кинотеатра"
            src="https://www.google.com/maps?q=Балыкчы&output=embed"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="contacts-page__social">
          <span className="contacts-page__social-label">Мы в соцсетях</span>
          <div className="contacts-page__social-links">
            {socialLinks.map((s) => (
              <a key={s.id} href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}