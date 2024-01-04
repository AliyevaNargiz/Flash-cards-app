// components/FlashCards.js
import React, { useState, useEffect } from 'react';
import './FlashCards.css';
import CardForm from './CardForm';

const FlashCards = () => {
  // ... (previous code)

  // Function to handle sharing selected cards via email
  const handleShare = () => {
    const selectedCards = cards.filter((card) => card.selected);
    const jsonDetails = JSON.stringify(selectedCards);

    // In a real application, you might want to implement the email sending logic
    // For simplicity, log the JSON details to the console
    console.log('Shared JSON Details:', jsonDetails);
  };

  // Bonus Section - Pagination or Infinite Scrolling

  // Fetch more cards when the user scrolls to the bottom
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !loading
    ) {
      fetchCardsFromServer();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  useEffect(() => {
    // Fetch initial set of cards
    fetchCardsFromServer();
  }, []);

  // ... (previous code)

  return (
    <div>
      {/* ... (previous code) */}
      {/* Bonus Section */}
      <div>
        <h2>Bonus Features:</h2>
        <button onClick={handleShare}>Share Selected Cards</button>
        {/* Pagination or Infinite Scrolling goes here */}
        <button onClick={() => fetchCardsFromServer()}>Load More Cards</button>
      </div>
    </div>
  );
};

export default FlashCards;
