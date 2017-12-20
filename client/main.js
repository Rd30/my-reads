import React from 'react';
import { render } from 'react-dom';
import Books from '../imports/ui/containers/Books';

render(
  <Books />,
  document.getElementById('react-root')
);
/*render(
  <Books
    firstName = "Rakesh"
    readBooks = {[
      { title : 'Shoe Dog', author : 'Phil Knight'},
      { title : 'Birdmen', author : 'Lawrence Goldstone'},
      { title : 'Long Walk to Freedom', author : 'Nelson Mandela'},
      { title : '1984', author : 'George Orwell'},
      { title : 'Go Set a Watchman', author : 'Harper Lee'}
    ]}
    unreadBooks = {[
      { title : 'The Martian', author : 'Andy Weir'},
      { title : 'The Sympathizer', author : 'Thanh Nguyen'},
      { title : 'Homo Deus', author : 'Yuval Noah Harari'},
      { title : 'The Children of Men', author : 'P.D.James'},
      { title : 'The Happiness Hypothesis', author : 'Jonathan Haidt'},
    ]}
  />,
  document.getElementById("react-root")
);*/
