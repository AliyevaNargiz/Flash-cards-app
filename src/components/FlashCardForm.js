// components/FlashCardForm.js
import React, { useState } from 'react';

const FlashCardForm = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    const newCard = {
      question,
      answer,
    };

    console.log('New Flash Card:', newCard);

    setQuestion('');
    setAnswer('');
  };

  return (
    <div>
      <h3>Add New Flash Card</h3>
      <form>
        <label>
          Question:
          <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
        </label>
        <br />
        <label>
          Answer:
          <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Add Card
        </button>
      </form>
    </div>
  );
};

export default FlashCardForm;
