/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10+20
console.log('ESERCIZIO A', sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random ()* 21)

console.log('ESERCIZIO B', random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {
name: 'Lorenzo',
surname: 'Aluigi',
age: 33,
}

console.log('ESERCIZIO C', me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete (me.age)

console.log('ESERCIZIO D', me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

const skills = ['HTML', 'CSS', 'Java-Script']

me.skills = skills

console.log('ESERCIZIO E', me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push ('C++')
console.log('ESERCIZIO F', me)


/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop ('C++')
console.log('ESERCIZIO G', me)

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = function () {
 return Math.ceil (Math.random()*6)

  }

dice ()

console.log('ESERCIZIO 1', dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = function (number1,number2) { 
  if (number1 > number2) {
    return 'number 1 > number 2'
  }  
  else if (number2 > number1) {
    return 'number2 > number1'
  }
  else {
return 'number1 === number2'
  }}
  
console.log('ESERCIZIO 2', whoIsBigger(20,10));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  let array =[]
  array = string.split (' ')
return array  
}

console.log('ESERCIZIO 3', splitMe ('grazie buona giornata'));


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, boolean) {
  if (boolean === true) {
return string.slice (1)
  }
  else if (boolean === false) { 
    return string.slice (0,-1) 
  }
  else {return 'il paramtro assegnato non è un booleano'
  }}

  console.log ('ESERCIZIO 4',deleteOne ('epicode ciao', true))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// provare con find()

const onlyLetters = function (string) {
return string.replace (/\d+/g,'')
}
console.log(onlyLetters ('ciao 4 sono 5 e 6 forse 7 901288888888 ciao 4555 789'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (string) {
    let email = string.split ('')
    console.log (email)
    const validator = (element) => element === '@'
    let validation = email.some (validator)
    return validation
         }
    
    console.log ('ESERCIZIO 6', isThisAnEmail ('ciao@ciao'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
// inserire switch

const whatDayIsIt = function(){
  const today = new Date()
  const numberDay = today.getDay()
  return numberDay
}
console.log(whatDayIsIt())



/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (number) {
   const object = {values: []}

  for (let i = 0; i<number; i++) {
  object.values.push (dice())
  }
  object.sum = object.values.reduce ((a, cVal)=> a+cVal,0) 
  return object
  
}

console.log (rollTheDices (2))


/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (stringDate) { 
 let today = Date.now ()
  let iDateMS = Date.parse (stringDate)

 daysPassed = Math.floor((today - iDateMS) / 86400000)
return daysPassed
}

console.log (howManyDays('2023-06-08'))


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (MyBirthdayMonth,myBirthdayDay) { 
  let date = new Date () 
  let today = date.getDate ()
  let thisMonth = date.getMonth () + 1 
 
  if (today === myBirthdayDay && thisMonth === MyBirthdayMonth) {

return ' true, auguri oggi è il tuo compleanno!'

  }
  else {
return 'false, oggi non è il tuo compleanno'
  }
 
 }
//  inserire mese e giorno del compleanno nei paramteri secondo lo standard ISO (ISO 8061) ovvero (anno, mese, giorno) in numeri, in questo caso 
 console.log (isTodayMyBirthday(12,4))



// Arrays & Oggetti

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file




// NOTA 2 : copiato qui sopra :), altrimenti potevo richiamare le funzioni create nei vari esercizi al di sotto dell'oggetto

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

 const deleteProp = function (string,object) { 
  delete object[string]
  return object
 }
// utilizzo oggetto dei primi esercizi
console.log(deleteProp ('name',me))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array = movies) => {
  let mostRecentMovieYear = Number(array[0].Year)
  array.forEach(movie => movie.Year = Number(movie.Year))
  array.forEach(movie => {
    if(mostRecentMovieYear < movie.Year) {
      mostRecentMovieYear = movie.Year
    }
  })
  console.log("ESERCIZIO 12", array.find(movie => movie.Year === mostRecentMovieYear))
}

newestMovie ()

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = function (array) {
  
  return array.length

}
console.log (countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (array) => {
  return array.map((elem) => elem.Year)
}
console.log(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (array) => {
  return array.filter((movie) => {
    return parseInt(movie.Year) < 1999
  })
}

console.log(onlyInLastMillennium(movies))
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
// utilizzo il risultato dell'esercizio 14 per comodità in quanto è un array con tutti gli anni dell'array fornito

const sumAllTheYears = (array) => {
  return array.reduce((a, cVal) => a + parseInt(cVal), 0)
}

console.log(sumAllTheYears(onlyTheYears(movies)))


/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function(string){
  let array = []
  movies.forEach((e)=>{
    if(e.Title.includes(string)){
      array.push(e)
    }
  }) 
  return array
  
}
console.log(searchByTitle('Av'))


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/




/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// inserire un if per validare il parametro confrontando number con array .lenght
const removeIndex = function (number) {
  let array = [...movies]
  array.splice (number,1) 
  return array
  }

console.log(removeIndex (1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const selectContainer = function () {
 document.getElementById ('container')}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const selectByTag = function () {
  document.getElementsByTagName ('td')
  }

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printConsoleTagTD = function (s) {
  let allTd = document.querySelectorAll ('td')
  allTd.forEach ((e) =>{
console.log (e.innerText)
  })
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const backgroundColorLink = function () {
   
  let allLink = document.querySelectorAll('a')
allLink.forEach ((e)=>{
  e.style.backgroundColor = 'red'
}
)
  } 

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const newLi = function () {
  const myUl = document.getElementById('myList')
  let createLi = document.createElement('li')
  myUl.appendChild(createLi)
} 

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const removeLi = function () {
  const myUl = document.getElementById('myList') 
  let allLi= document.querySelectorAll ('#myList li')
   allLi.forEach ((e=> {
myUl.removeChild (e)
   }))
}


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const trClass = function () {
  let allTr = document.querySelectorAll ('tr')
allTr.forEach  ((e)=> {
e.classList.add ('test')
})
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = function (height) {
  let tree = "";

  for (let i = 1; i <= height; i++) {
    tree += "*".repeat(i) + "\n";
  }

  return tree;
};
console.log(halfTree(5));


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = function (height) {
  let tree = ""
  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height - i);
    const stars = "*".repeat(i*2-1);
    tree += spaces + stars + "\n";
  }
  return tree;
};
console.log(tree(5));



/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = function (number) {
  if (number >1){ let booleanTest = true
for ( let i = 2; i < number; i++){
if (number % i === 0 ) {
  booleanTest = false
}}
if (booleanTest === true) {
  console.log('è un numero primo')
} 
else {
  console.log('non è un numero primo');
}}
}

isItPrime(11)
/* Questo array viene usato per gli esercizi. Non modificarlo. */

