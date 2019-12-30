const search = window.location.search.substring(1).split('=')
const url = window.location.href.split('?')[0]

window.history.replaceState({}, 'Live Chat Translation', url);

const websocketUrl = `wss://e8a3wy8p1c.execute-api.us-east-1.amazonaws.com/dev`
let socketClient = new WebSocket(`${websocketUrl}`);

const createNewMessageHtml = (username, message) => {
    var article = document.createElement('div');
    article.classList.add('message-text')
    article.innerHTML = `<div class ="text"><ul>${username}:${message}</ul></div>`
    var target = document.getElementById('message_list').appendChild(article);
    target.scrollTop = target.scrollHeight + '12px';
}

const onMessage = (message) => {
    const data = message.data.split("**")
    const username = data[1];
    var res_username = username.substring(1, username.length);

    const text = data[2];
    var res_text = text.substring(0, text.length - 1);
    createNewMessageHtml(res_username, res_text)
}




socketClient.onmessage = onMessage
const sendButton = document.getElementById('send_button')
sendButton.addEventListener('click', (ev) => {
    ev.preventDefault()
    if(sendButton.value == "save")
    {
        if (document.getElementById('text_message').value.length > 0)
        {
            //document.getElementById('send_button').value = "Send";
            //var name_vaule = document.getElementById('text_message').value;
            //document.getElementById('name_button').value = name_vaule;
            //document.getElementById('text_message').value = "";
            //document.getElementById('name_button').style.display = 'none';
            //document.getElementById('td_name').innerHTML = name_vaule;
            //document.getElementById("text_message").placeholder = "Type Message";
        }
 
    } else if (sendButton.value == "Send") {

        if(document.getElementById('text_message').value.length>0)
        {
            const input = document.getElementById('text_message')
            const nameInput = document.getElementById('td_name_value');
            const text = input.value
            const name = nameInput.innerText;

            if (text && text.length > 0) {
                const message = {
                    action: "message",
                    data: { message: text, username: name }
                }
                var sendstr = name + "**" + text;
                socketClient.send(sendstr)
                input.value = ""
            }
        } 
    }
  
})


const nameButtonMenu = document.getElementById('name_button_menu')
nameButtonMenu.addEventListener('click', (ev) => {
    ev.preventDefault()
  

    if ((document.getElementById('name_row').style.display == 'none')) {
        document.getElementById('name_row').style.display = ''
        event.preventDefault()
    } else {
        document.getElementById('name_row').style.display = 'none';
        event.preventDefault()
    }
})


const nameButton = document.getElementById('save_name_button')
nameButton.addEventListener('click', (ev) => {
    ev.preventDefault()  
    var name_vaule = document.getElementById('text_name').value;
    document.getElementById('td_name_value').innerHTML = name_vaule;
    document.getElementById('text_name').value = "";
    document.getElementById('name_row').style.display = 'none';
})
