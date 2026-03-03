const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

const phrases = [
  "sayang,mau sampe kapan kmu cuekin aku kaya gini?",
  "aku gabisa di cuekin lama' ama kmu,aku kangen kmu.",
  "aku minta maaf yang kemaren,aku gabakal ngulangin lagi",
  "miss u miss u miss u sooo badddd",
];

const textDiv = document.getElementById("text");
let index = 0;

function typeSentence(sentence, i = 0) {
  if (i < sentence.length) {
    textDiv.innerHTML += sentence.charAt(i);
    setTimeout(() => typeSentence(sentence, i + 1), 40);
  }
}

function showNextPhrase() {
  textDiv.innerHTML = "";
  typeSentence(phrases[index]);
  index = (index + 1) % phrases.length;
}

// Initial typing
showNextPhrase();

// Change phrase on click
document.body.addEventListener("click", showNextPhrase);
