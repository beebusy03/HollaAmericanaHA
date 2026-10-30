import { useState } from 'react';
import './FaqSection.css';

const questions = [
  {
    question: 'Which countries do you cover?',
    answer:
      'We create journeys across South America, including Brazil, Argentina, Chile, Peru, and Colombia. Contact our team to plan an itinerary around your interests.',
  },
  {
    question: 'Are Indian meals available?',
    answer:
      'Yes. We can arrange Indian meals during your trip and help accommodate dietary preferences when planning your itinerary.',
  },
  {
    question: 'Are the tours suitable for NRIs?',
    answer:
      'Yes. Our tours are designed for Indian travellers around the world, including NRIs, families, couples, and small groups.',
  },
  {
    question: 'What languages do the guides speak?',
    answer:
      'Our local guides speak English, and we can arrange multilingual tour managers to support your journey.',
  },
];

function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(null);

  function toggleQuestion(index) {
    setOpenQuestion((current) => (current === index ? null : index));
  }

  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <header className="faq-section__header">
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about our products and services.
          Can&apos;t find what you&apos;re looking for? Contact
          <br className="faq-section__desktop-break" /> our support team.
        </p>
      </header>

      <div className="faq-list">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openQuestion === index;
          const answerId = `faq-answer-${index + 1}`;

          return (
            <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={question}>
              <h3>
                <button
                  className="faq-item__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{question}</span>
                  <span className="faq-item__chevron" aria-hidden="true" />
                </button>
              </h3>
              {isOpen && (
                <div className="faq-item__answer" id={answerId}>
                  <p>{answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FaqSection;
