const button = document.querySelector(`button`);


function clickHandler(message: string) {
   console.log(`clicked 111 ${message}`);
}

if (button) {
   button.addEventListener(`click`, clickHandler.bind(null, `msg`));
}

function sendAnalytics(data: string) {
   console.log(data);
}

