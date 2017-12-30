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
return [...kittens,name];}
function prependKitten(name){
  return [name,...kittens];}
function removeLastKitten(){
  let result=kittens;result.slice(kittens.length-1);return result;}
function removeFirstKitten(){
  let result=kittens;result.slice(0);return result;}
  


console.log(appendKitten('Broom'));
//console.log(kittens);

  
