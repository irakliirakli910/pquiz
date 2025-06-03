import React, { useState, useEffect } from 'react';

function App() {
  const quizData = [
    {
      id: 1,
      title: "III ქვიზი",
      questions: [
        "განმარტეთ რა განსხვავებაა გლობალურ და ლოკალურ ცვლადებს შორის პითონში.",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4 იპოვის მაქსიამლური ციფრთა ჯამის მქონე ელემენტს"
      ]
    },
    {
      id: 2,
      title: "III ქვიზი - Python",
      questions: [
        "რა განსხვავებაა ფუნქციის გამოძახებასა და განსაზღვრას შორის პითონში?",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4 იპოვის მინიმალური ციფრთა ჯამის მქონე ელემენტს."
      ]
    },
    {
      id: 3,
      title: "III ქვიზი - Python",
      questions: [
        "რა მიზანს ემსახურება ფუნქციების გამოყენება პროგრამაში?",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4  იპოვის ლუწ რიცხვებს შორის მაქსიმალურს."
      ]
    },
    {
      id: 4,
      title: "III ქვიზი - Python",
      questions: [
        "ჩამოთვალეთ და განმარტეთ პითონში ფუნქციაზე პარამეტრების გადაცემის გზები.",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4  იპოვის კენტ რიცხვებს შორის მაქსიმალურს."
      ]
    },
    {
      id: 5,
      title: "III ქვიზი - Python",
      questions: [
        "აღწერეთ როგორ ხდება მოდულის იმპორტირება პითონში.",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4 იპოვის მინიმალური ციფრთა ჯამის მქონე ელემენტს."
      ]
    },
    {
      id: 6,
      title: "III ქვიზი - Python",
      questions: [
        "განმარტეთ რა განსხვავებაა გლობალურ და ლოკალურ ცვლადებს შორის პითონში.",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4 იპოვის მინიმალური ციფრთა ჯამის მქონე ელემენტს"
      ]
    },
    {
      id: 7,
      title: "III ქვიზი - Python",
      questions: [
        "ჩამოთვალეთ და განმარტეთ პითონში ფუნქციაზე პარამეტრების გადაცემის გზები",
        "დაწერეთ პროგრამა პითონზე რომელიც ორგანზომილებიან სიაში 4x4 იპოვის მინიმალური ციფრთა ჯამის მქონე ელემენტს."
      ]
    }
  ];

  const [selectedQuiz, setSelectedQuiz] = useState(null);

  // useEffect – ავტომატურად გაშვდება ერთხელ ლოადზე
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quizData.length);
    setSelectedQuiz(quizData[randomIndex]);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>🎯 კურსი - Python - ის საფუძვლები</h1>

      {selectedQuiz && (
        <div style={{
          marginTop: "2rem",
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          maxWidth: "500px",
          margin: "2rem auto"
        }}>
          <h2>{selectedQuiz.title}</h2>
          <ol style={{ textAlign: "left" }}>
            {selectedQuiz.questions.map((q, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;
