/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
	document.getElementsByTagName('h1')[0].innerText = 'Cambio titolo'
}
changeTitle()

/* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

const addClassToTitle = function () {
	document.getElementsByTagName('h1')[0].classList.add('myHeading')
}
addClassToTitle()

/* ESERCIZIO 3
       Scrivi una funzione che cambi il testo dei p figli di un div
      */

const changePcontent = function () {
	const divP = document.querySelectorAll('div > p')
	console.log(divP)
	for (let i = 0; i < divP.length; i++) {
		divP[i].innerText += ' cambiato'
	}
}
changePcontent()

/* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

const changeUrls = function () {
	const links = document.querySelectorAll('a:not(footer a)')
	for (let i = 0; i < links.length; i++) {
		links[i].href = 'https://www.google.com'
	}
}
changeUrls()
/* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

const addToTheSecond = function () {
	const element = document.getElementsByTagName('ul')[1]
	const newElement = document.createElement('li')
	newElement.innerText = 'Nuovo elemento'
	element.appendChild(newElement)
}
addToTheSecond()

/* ESERCIZIO 6
       Scrivi una funzione che aggiunga un paragrafo al primo div
    */

const addParagraph = function () {
	const firstDiv = document.getElementsByTagName('div')[0]
	const newParagraph = document.createElement('p')
	newParagraph.innerText = 'Nuovo paragrafo'
	firstDiv.appendChild(newParagraph)
}
addParagraph()

/* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

const hideFirstUl = function () {
	const firstUl = document.getElementsByTagName('ul')[0]
	firstUl.style.display = 'none'
}
hideFirstUl()

/* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

const paintItGreen = function () {
	const uls = document.querySelectorAll('ul:not(:last-child)')
	for (let i = 0; i < uls.length; i++) {
		uls[i].style.backgroundColor = 'green'
	}
}
paintItGreen()

/* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

const makeItClickable = function () {
	const h1 = document.getElementsByTagName('h1')[0]
	h1.addEventListener('click', () => {
		h1.innerText = h1.innerText.slice(0, -1)
	})
}
makeItClickable()

/* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

const revealFooterLink = function () {
	const footerLink = document.querySelector('footer a')
	footerLink.addEventListener('click', e => {
		e.preventDefault()
		alert(footerLink.href)
	})
}
revealFooterLink()

/* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

const generateTable = function () {
	const tableArea = document.getElementById('tableArea')
	const table = document.createElement('table')
	const thead = document.createElement('thead')
	thead.innerHTML =
		'<tr><th>Immagine</th><th>Nome prodotto</th><th>Quantità</th><th>Prezzo</th></tr>'
	const tbody = document.createElement('tbody')
	for (let i = 0; i < 5; i++) {
		// creo la tabella
		tbody.innerHTML += `<tr><td><img src="https://picsum.photos/200/200" alt="immagine"></td><td>Prodotto ${i}</td><td>10</td><td>100</td></tr>`
	}
	table.appendChild(thead)
	table.appendChild(tbody)
	tableArea.appendChild(table)
}
generateTable()

/* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

const addRow = function (img, name, quantity, price) {
	const table = document.getElementsByTagName('table')[0]
	const row = document.createElement('tr')
	row.innerHTML = `<td><img src="${img}" alt="immagine"></td><td>${name}</td><td>${quantity}</td><td>${price}</td>`
	table.appendChild(row)
}
addRow('https://picsum.photos/200/200', 'Prodotto 5', 10, 100)

/* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

const hideAllImages = function () {
	const images = document.querySelectorAll('table img')
	for (let i = 0; i < images.length; i++) {
		images[i].style.display = 'none'
	}
}
hideAllImages()

/* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

const changeColorWithRandom = function () {
	const h2 = document.getElementById('changeMyColor')
	h2.addEventListener('click', () => {
		const r = Math.floor(Math.random() * 256)
		const g = Math.floor(Math.random() * 256)
		const b = Math.floor(Math.random() * 256)
		h2.style.color = `rgb(${r}, ${g}, ${b})`
	})
}
changeColorWithRandom()
