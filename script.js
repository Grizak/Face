function lock () {
	document.querySelector('#mouth').classList.add('open');
}

function unlock () {
	document.querySelector('#mouth').classList.remove('open')
}

function closeeye () {
	document.querySelector('#eye').classList.add('closed')
}

function openeye () {
	document.querySelector('#eye').classList.remove('closed')
}
