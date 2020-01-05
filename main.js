const search = window.location.search.substring(1).split('=')
const url = window.location.href.split('?')[0]

window.history.replaceState({}, 'Live Chat Translation', url);

const websocketUrl = `wss://0wammvth41.execute-api.us-east-1.amazonaws.com/dev`
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
 if (sendButton.value == "Send") {

        if(document.getElementById('text_message').value.length>0)
        {
            const input = document.getElementById('text_message')
            const nameInput = document.getElementById('td_name_value');
            var text = input.value;
            
            var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
            var text1 = text.replace(exp, "<a href='$1'>$1</a>");
            var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

            text =  text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');


            const name = nameInput.innerText;

            if (text && text.length > 0) {
                const message = {
                    action: "message",
                    data: { message: text, username: name }
                }
                var sendstr = name + "**" + text;
                // socketClient.send(sendstr)
                {
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", "https://gizdo2uwtj.execute-api.us-east-1.amazonaws.com/dev/postmessage", true);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
                    xhr.setRequestHeader('Access-Control-Allow-Credentials', true);

                    xhr.send(sendstr);
                }
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
