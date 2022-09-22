import {
  get,
  set,
  getMany,
  setMany,
  update,
  del,
  clear,
  keys,
  values,
  entries,
  createStore
} from 'https://cdn.jsdelivr.net/npm/idb-keyval@5/dist/esm/index.js';


let comments = [];

const addComment = (ev) => {
  ev.preventDefault();

  let today = new Date();

  let comment = {
    name: document.getElementById('name').value,
    date:
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate(),
    email: document.getElementById('email').value,
    comment: document.getElementById('comment-body').value,
  };
  comments.push(comment);

  document.forms[0].reset();

  console.warn('added', { comments });
  let commentDisplay = document.querySelector('.comment-display');

  commentDisplay.textContent = '\n' + JSON.stringify(comments, '\t', 2);

  localStorage.setItem('CommentList', JSON.stringify(comments));

  set('comments', comments)
    .then(()=>{
      console.log('comments')
    })
    .catch(console.warn);

  get('comments')
    .then((data)=>{
      console.log(data);
    })
    .catch(console,warn);

  let commentsToDisplay = localStorage.getItem('CommentList');

  let display = commentsToDisplay.split()

  [{"name":"Jasmine Armstrong","date":"2022-9-20","email":"Jasmine.Armstrong515@gmail.com","comment":"gtyhujikolp"},{"name":"Jasmine Armstrong","date":"2022-9-20","email":"Jasmine.Armstrong515@gmail.com","comment":"yuikolp\n./,nm,b"}]

  console.log(commentsToDisplay);

};
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addComment);
});

let commentList = localStorage.getItem('CommentList');
console.log(commentList)


// const commentName = comment.name;
// const commentEmail = comment.email;
// const commentBody = comment.comment;
// const date = comment.date;

// const commentTemplate = document.createElement('template');
// commentTemplate.innerHTML = `
//   <style>
//   .comment-comp {
//     text-align: center;
//     background: #e5cf00;
//     width: 100%;
//     display: grid;
//     grid-template-columns: 1fr 2fr;
//     grid-gap: 10px;
//     margin-bottom: 15px;
//     border-bottom: #540707 5px solid;
//   }
//   p[class='comment-body'] {
//     color: #540707;
//     font-size: 1.5rem;
//   }
//   div[class='comment-info']{
//     color: #540707;
//     font-size: 1rem;
//   }
//   </style>
//   <div class='comment-comp'>
//       <p class='comment-body'></P>
//       <div class='comment-info'>
//         <p class='comment-name'></p>
//         <p class='comment-email'></P>
//         <p class='comment-dateTime'></p>
//       </div>
//   </div>
// `;

// class CommentComp extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });
//     this.shadowRoot.appendChild(commentTemplate.content.cloneNode(true));

//     this.shadowRoot.querySelector('p[class="comment-body"]').innerText =
//       `${commentBody}`;

//     this.shadowRoot.querySelector('p[class="name"]').innerText = `${commentName}`;

//     this.shadowRoot.querySelector('p[class="email"]').innerText = `${commentEmail}`;

//     this.shadowRoot.querySelector('p[class="comment-dateTime"]').innerTeaxt = `${date}`
//   }
// }

// window.customElements.define('comment-comp', CommentComp);

// commentDisplay.
