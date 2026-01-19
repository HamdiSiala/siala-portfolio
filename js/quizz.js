document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const bonnesReponses = {
    q1: "c",
    q2: "a",
    q3: "b",
    q4: "a",
    q5: "b",
    q6: "b",
    q7: "b",
    q8: "a",
    q9: "a",
    q10: "b"
  };

  let score = 0;
  const total = Object.keys(bonnesReponses).length;

  for (let q in bonnesReponses) {
    const choix = document.querySelector(`input[name="${q}"]:checked`);
    if (choix && choix.value === bonnesReponses[q]) {
      score++;
    }
  }

  const pourcentage = Math.round((score / total) * 100);

  // تحديد الملاحظة
  let note;
  if (pourcentage >= 80) note = "Excellent 🌟";
  else if (pourcentage >= 60) note = "Très bien 👍";
  else if (pourcentage >= 40) note = "Bien 🙂";
  else note = "Peut mieux faire 😐";

  // عرض النتيجة فقط
  document.getElementById("resultat").innerHTML = `
    <div class="quiz-note">
      <h2>📝 Résultat du Quiz</h2>
      <p class="score">${score} / ${total}</p>
      <p class="percent">${pourcentage}%</p>
      <p class="mention">${note}</p>
      <button onclick="location.reload()">Recommencer le Quiz</button>
    </div>
  `;

  // إخفاء الفورم
  document.getElementById("quizForm").style.display = "none";
});
