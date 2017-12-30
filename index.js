const app = "I don't do much."; 
const kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name){
  kittens.push(name);}
  
function destructivelyPrependKitten(name){
  kittens.unshift(name);}

function destructivelyRemoveLastKitten(){
  kittens.pop();}
  
function destructivelyRemoveFirstKitten(){
  kittens.shift();}
  
function appendKitten(name){
let result=kittens;
result.push(name);
return result;}
function prependKitten(name){
  let result=kittens;result.unshift(name);return result;}
function removeLastKitten(){
  let result=kittens;result.pop();return result;}
function removeFirstKitten(){
  let result=kittens;result.shift();return result;}
  


//console.log(appendKitten('George'));

  
