
document.addEventListener("DOMContentLoaded", function() {
	plus()
	minus()
	pause()
	heart()
})

let count = document.getElementById("counter")
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let timer = setInterval(counter, 1000)
let heartButton = document.getElementById("heart")
let like = {}
let parsedCount = parseInt(count.innerText,10)

function counter() {
    count.innerText = parseInt(count.innerText,10) + 1
}


function plus() {
	let plusButton = document.getElementById("plus")
	plusButton.addEventListener("click", counter)
}

function minus() {
	minusButton.addEventListener("click", function() {
		count.innerText = parseInt(count.innerText,10) - 1
	})
}

function pause() {
	let pauseButton = document.getElementById("pause")
	pauseButton.addEventListener("click", function() {
		
	if (pauseButton.textContent == "resume") {

		pauseButton.textContent = "pause"
		plusButton.disabled = false;
		minusButton.disabled = false;
		heartButton.disabled = false;
		timer = setInterval(counter, 1000)

		} 
	else {
		pauseButton.textContent = "resume"
		plusButton.disabled = true;
		minusButton.disabled = true;
		heartButton.disabled = true;
		clearInterval(timer)
		}
	})
}

function heart() {
	let ul = document.querySelector(".likes")
	let li = document.createElement("li")

	heartButton.addEventListener("click", function() {
		
		let parsedCount = parseInt(count.innerText,10)
		if (parsedCount in like) {
			like[parsedCount] += 1
		} else {
			like[parsedCount] = 1
		}
		li.innerText = `${parsedCount} has been liked ${like[parsedCount]} times.`
		ul.appendChild(li)
	})
}



