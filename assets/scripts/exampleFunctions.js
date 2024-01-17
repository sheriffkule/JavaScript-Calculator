const taskElement = document.getElementById(task);

function greet() {
    alert('Hi there!');
}

function greetingUser(userName) {
    alert('Greetings ' + userName);
}

greet();
greetingUser('Gicule');

taskElement.addEventListener('click', greet);

function combine(text1, text2, text3) {
    const combineText = `${text1} ${text2} ${text3}`
    return combineText;
}

const combineText = combine('Hi ' + 'there' + '!');
alert(combineText);