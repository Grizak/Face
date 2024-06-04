function lock () {
	document.querySelector('#mouth').classList.add('open');
}

function unlock () {
	document.querySelector('#mouth').classList.remove('open')
}

function closeeye () {
	document.querySelector('#eye').classList.add('closed')
	document.querySelector('#eye::before').classList.add('closed')
}

function openeye () {
	document.querySelector('#eye').classList.remove('closed')
	document.querySelector('#eye::before').classList.remove('closed')
}

function blink () {
	document.querySelector('#eye').classList.add('closed')
	document.querySelector('#eye::before').classList.add('closed')
	document.querySelector('#eye').classList.remove('closed')
	document.querySelector('#eye::before').classList.remove('closed')
}