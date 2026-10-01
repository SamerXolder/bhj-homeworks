const book = document.getElementById('book');
const fontSizeButtons = Array.from(document.querySelectorAll('.font-size'));

fontSizeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));
    button.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = button.dataset.size;
    if (size) {
      book.classList.add(`book_fs-${size}`);
    }
  });
});
