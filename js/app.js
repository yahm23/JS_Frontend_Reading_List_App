document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  // const delete = document.quer
});

const handleFormSubmit = function(event){
  event.preventDefault();
  console.log(event);

  const titleValue=event.target.title.value;
  const authorValue=event.target.author.value;
  const categoryValue=event.target.category.value;

  // console.log(title,author,category);

  const list = document.querySelector("#reading-list");
  const item = document.createElement("div");
  item.classList.add('card',)

  const title = document.createElement('h1');
  title.classList.add('title');
  title.textContent=titleValue;

  const author = document.createElement('h2');
  author.classList.add('author');
  author.textContent=authorValue;

  const category = document.createElement('p');
  category.classList.add('title');
  category.textContent=categoryValue;


  item.appendChild(title);
  item.appendChild(author);
  item.appendChild(category);

  list.appendChild(item);

  this.reset();

  const deleteButton = document.createElement('input');
  const

}
