// components/FlashCardList.js
import React, { useState, useEffect } from 'react';
import FlashCardForm from './FlashCardForm.js';

const FlashCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
      <h2>Flash Cards</h2>
      <FlashCardForm />
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <div>
              <strong>Question:</strong> {card.question}
            </div>
            <div>
              <strong>Answer:</strong> {card.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashCardList;
