import { EventEmitter } from 'events';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDK60pei18HIlbAm0DzPqZRlsmj946rx7I',
  authDomain: 'recipes-bd071.firebaseapp.com',
  databaseURL: 'https://recipes-bd071.firebaseio.com',
  storageBucket: 'recipes-bd071.appspot.com',
});

const database = firebase.database();
const dbRef = database.ref();
const recipesRef = dbRef.child('recipes');

const store = new EventEmitter();

dbRef.on('value', (snapshot) => {
  const value = snapshot.val();
  console.log(value.recipes);
  if (value) {
    store.emit('recipes-updated', value.recipes);
  }
});

store.addCategory = () => {

};

store.deleteCategory = () => {

};

store.addRecipe = (recipe) => {
  recipesRef.push().set(recipe);
};

store.deleteBookmark = () => {

};

export default store;
