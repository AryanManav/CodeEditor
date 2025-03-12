import React, { useState, useEffect } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  // Load FAQs from local storage on component mount
  useEffect(() => {
    const storedFaqs = JSON.parse(localStorage.getItem("faqs")) || [
      {
        question: "What is CodeMaster?",
        answer: "CodeMaster is an interactive platform for coding practice and learning.",
      },
      {
        question: "Which programming languages are supported?",
        answer: "We support Python, Java, JavaScript, C++, SQL, and more.",
      },
    ];
    setFaqs(storedFaqs);
  }, []);

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle form submission
  const addFAQ = () => {
    if (newQuestion.trim() === "" || newAnswer.trim() === "") return;
    
    const updatedFaqs = [...faqs, { question: newQuestion, answer: newAnswer }];
    setFaqs(updatedFaqs);
    localStorage.setItem("faqs", JSON.stringify(updatedFaqs));

    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Add New FAQ Section */}
      <div className="faq-add">
        <h2 >Add a Question</h2>
        <input
          type="text"
          placeholder="Enter your question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <textarea
          placeholder="Enter the answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button style={{color: "#2C2F33"}} onClick={addFAQ}>Add Question</button>
      </div>
    </div>
  );
};

export default FAQ;
