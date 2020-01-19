const search = window.location.search.substring(1).split('=')
const url = window.location.href.split('?')[0]

window.history.replaceState({}, 'Live Chat Translation', url);

const websocketUrl = `wss://0wammvth41.execute-api.us-east-1.amazonaws.com/dev`
let socketClient = new WebSocket(`${websocketUrl}`);

const createNewMessageHtml = (username, message) => {

    var article = document.createElement('ul');
    article.innerHTML = `<span style="font-size:14px;color:#134a01">${username}</span><br><span style="background-color: rgb(255, 255, 255); display: block; border-radius: 3px; padding-top: 3px; padding-bottom: 3px; padding-left: 5px; flex: 1 1 0%; flex-direction: row; overflow-wrap: break-word; max-width: 680px;">${message}</span>`
    var target = document.getElementById('message_text_ul').appendChild(article);
    var idpage = document.getElementById('idpage-body');
    var idpagerect = idpage.getBoundingClientRect();
    var scrollpos = idpagerect.bottom - 22 + 'px';
	$('html,body').animate({
	    scrollTop: scrollpos
	},10);
}

const onMessage = (message) => {
    const data = message.data.split("**")
    const username = data[1];
    const text = data[2];
    createNewMessageHtml(username, text);


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

            if (text && text.length >= 1) {
                const message = {
                    action: "message",
                    data: { message: text, username: name }
                }
                var sendstr = name + "**" + text;
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


$(function () {
    $("#text_message").keypress(function (e) {
        if (e.which == 13) {
            
            if (document.getElementById('text_message').value.length > 0) {
                const input = document.getElementById('text_message')
                const nameInput = document.getElementById('td_name_value');
                var text = input.value;

                var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
                var text1 = text.replace(exp, "<a href='$1'>$1</a>");
                var exp2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;

                text = text1.replace(exp2, '$1<a target="_blank" href="http://$2">$2</a>');


                const name = nameInput.innerText;

                if (text && text.length >= 1) {
                    const message = {
                        action: "message",
                        data: { message: text, username: name }
                    }
                    var sendstr = name + "**" + text;
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

            e.preventDefault();
        }
    });
});



function setCookie(name, value)
{

    var expires = "";

        var date = new Date();
        date.setTime(date.getTime() + (10000*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();

    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

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
    setCookie("name",name_vaule);
    document.getElementById('td_name_value').innerHTML = name_vaule;
    document.getElementById('text_name').value = "";
    document.getElementById('name_row').style.display = 'none';
})

