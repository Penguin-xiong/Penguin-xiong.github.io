const i = document.querySelector('h3')
i.textContent = new Date()
i.style.color = 'green'
i.style.paddingLeft = '1em'
i.style.fontFamily = 'Courier New'

// Time of Day
const hours = new Date().getHours() 
/*
const morning = hours >= 4 && hours<12
const afternoon = hours >= 12 && hours < 17 
const evening = hours >= 17 || hours < 4 
*/

if ( hours >= 4 && hours<12 ) {
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Morning"
}
else if ( hours >= 12 && hours < 17  ) {
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Afternoon"
}
else { 
    const hi = document.getElementById( 'welcome' )
    hi.textContent = "Good Evening"
}
