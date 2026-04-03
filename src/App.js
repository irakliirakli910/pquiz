import React, { useState, useEffect } from 'react';

function App() {
  const quizData = [
    {
      id: 1,
      title: "Iქვიზი",
      questions: [
        "შეადგინეთ პროგრამა რომელიც მოცემული მთელი n რიცხვისთვის იპოვის ყველა მარტივ გამყოფს.",
        "შეადგინეთ პროგრამა, რომელიც მომხმარებელს შეატანინებს ორ რიცხვს და იპოვის ყველა საერთო ციფრს, რომლებიც ერთნაირია პოზიციითაც და მნიშვნელობითაც, შემდეგ ამ ციფრების ჯამს გამრავლებს მათ შორის მინიმალურ ციფრზე."
        
      ]
    },
    {
      id: 2,
      title: "I ქვიზი",
      questions: [
         "შეადგინეთ პროგრამა რომელიც მოცემული მთელი n რიცხვისთვის იპოვის ყველა გამყოფს რომლის ციფრთა ჯამი ლუწია.",
        "შეადგინეთ პროგრამა, რომელიც მომხმარებელს შეატანინებს რიცხვს N და იპოვის ყველა მარტივი რიცხვი 1–N-მდე, რომლის ციფრების ჯამი ასევე მარტივი რიცხვია"
       
      ]
    },
    {
      id: 3,
      title: "I ქვიზი",
      questions: [
        "შეადგინეთ პროგრამა რომელიც მოცემული მთელი n რიცხვისთვის იპოვის ყველა გამყოფს რომლის ციფრთა ჯამი კენტია.",
        "შეადგინეთ პროგრამა, რომელიც მომხმარებელს შეატანინებს რიცხვს N და იპოვის ყველა მარტივი რიცხვი 1–N-მდე, რომლის ბოლი ციფრის ფაქტორიალი ასევე მარტივი რიცხვია"
        
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
      <h1>🎯 კურსი - Java For Android</h1>

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
