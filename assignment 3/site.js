const i = document.querySelector('h3')
i.textContent = new Date()
i.style.color = 'green'
i.style.paddingLeft = '1em'
i.style.fontFamily = 'Courier New'

// Time of Day
const hours = new Date().getHours() 

const morning = hours >= 4 && hours<12
const afternoon = hours >= 12 && hours < 17


if (morning) {
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Morning"
    
}
else if (afternoon) {
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Afternoon"
}
else { 
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Evening"
}

// It's a secret to everybody.

localStorage.setItem('It\'s a secret to everybody.', 'Even Google does not know what ur hiding in ur bathroom')
