const search = window.location.search.substring(1).split('=')
const url = window.location.href.split('?')[0]

window.history.replaceState({}, 'Live Chat Translation', url);

const websocketUrl = `wss://d4y6q7253j.execute-api.us-east-1.amazonaws.com/dev`
let socketClient = new WebSocket(`${websocketUrl}`);

const createNewMessageHtml = (username, message) => {
    var article = document.createElement('div');
    article.classList.add('media-content')
    article.innerHTML = `
        <div class="content">
          
               ${username}:
             
                ${message}
                <br>
           
        </div>

    `
    var target = document.querySelector('#chat-room')
    target.appendChild(article);
}

const onMessage = (message) => {
    const data = message.data.split("**")
    const username = data[0];
    var res_username = username.substring(1, username.length);

    const text = data[1];
    var res_text = text.substring(1, text.length - 1);


    createNewMessageHtml(res_username, res_text)
}



socketClient.onmessage = onMessage


// Send Message
const form = document.getElementById('send')
form.onsubmit = (ev) => {
    ev.preventDefault()
    const input = document.getElementById('text')
    const nameInput = document.getElementById('name')
    const text = input.value
    const name = nameInput.value
    if (text && text.length > 0) {
        const message = {
            action: "message",
            data: { message: text, username: name }
        }
        var sendstr = name + "**" + text;
        socketClient.send(sendstr)
        input.value = ""
    }
    return false
}

const nameButton = document.getElementById('name-button')
nameButton.addEventListener('click', (ev) => {
    const nameInput = document.getElementById('name')
    if (nameInput.value.length) {
        document.getElementById('name').disabled = true
        nameButton.disabled = true
        document.getElementById('send-message').disabled = false
    }
})
