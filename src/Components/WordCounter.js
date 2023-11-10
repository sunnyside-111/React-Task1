import React, { useState } from 'react';
import './WordCounter.css';

const WordCounter = () => {
  const [paragraph, setParagraph] = useState('');

  const handleParagraphChange = (event) => {
    setParagraph(event.target.value);
  };

  const wordCount = paragraph.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="word-counter">
      <h1 className="title">Responsive Paragraph Word Counter</h1>
      <div className="input-container">
        <textarea
          placeholder="Type your paragraph here..."
          value={paragraph}
          onChange={handleParagraphChange}
          className="paragraph-input"
        />
      </div>
      <div className="word-count">
        Word Count: <span className="count">{wordCount}</span>
      </div>
    </div>
  );
};

export default WordCounter;