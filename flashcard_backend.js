const flashcards = [];

document.getElementById('flashcard-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const word = document.getElementById('word').value.trim();
    const translation = document.getElementById('translation').value.trim();

    if (word && translation) {
        flashcards.push({ word, translation });
        displayFlashcards();
        document.getElementById('flashcard-form').reset();
    }
});

function displayFlashcards() {
    const list = document.getElementById('flashcards-list');
    list.innerHTML = '';
    flashcards.forEach((card, index) => {
        const div = document.createElement('div');
        div.className = 'flashcard';
        div.textContent = `${index + 1}. ${card.word} — ${card.translation}`;
        list.appendChild(div);
    });
}

// Show any flashcards already added (when reloading, empty for now)
displayFlashcards();
