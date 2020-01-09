if (!Node.prototype.clean) {
    Node.prototype.clean = function () {
        for (var i = 0; i < this.childNodes.length; i++) {
            var child = this.childNodes[i];
            if (child.nodeType === 8 || child.nodeType === 3) {
                this.removeChild(child);
                i--;
            }
        }
    }
}
if (!Node.prototype.empty) {
    Node.prototype.empty = function () {
        while (this.firstChild) {
            this.removeChild(this.firstChild);
        }
    }
}
if (!HTMLElement.prototype.hasClass) {
    Element.prototype.hasClass = function (c) {
        return (" " + this.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + c + " ") > -1;
    }
}
if (!HTMLElement.prototype.addClass) {
    Element.prototype.addClass = function (c) {
        if (!this.hasClass(c)) this.className += (" " + c);
        return this;
    }
}
if (!HTMLElement.prototype.removeClass) {
    Element.prototype.removeClass = function (c) {
        if (this.hasClass(c)) this.className = (" " + this.className + " ").replace(" " + c + " ", " ").trim();
        return this;
    }
}
if (!HTMLElement.prototype.fadeIn) {
    Element.prototype.fadeIn = function () {
        this.style.opacity = window.getComputedStyle(this, null).getPropertyValue("opacity") || 0;
        var raf = function (c) { setTimeout(c, 1000 / 60) };
        var oJump = 1 / 20;
        var rafID;
        var run = function () {
            if (+this.style.opacity < 1) {
                this.style.opacity = +this.style.opacity + oJump;
                rafID = raf(run);
            } else clearInterval(rafID);
        }.bind(this);
        run();
    }
}
if (!HTMLElement.prototype.scrollToBottom) {
    HTMLElement.prototype.scrollToBottom = function () {
        var raf = function (c) { setTimeout(c, 1000 / 60) };
        var sJump = (this.scrollHeight - this.scrollTop) / 60;
        var rafID;
        var run = function () {
            if (this.scrollTop + this.offsetHeight < this.scrollHeight) {
                this.scrollTop = +this.scrollTop + sJump;
                rafID = raf(run);
            } else clearInterval(rafID);
        }.bind(this);
        run();
    }
}
if (!String.prototype.strip) {
    String.prototype.strip = function () {
        return this.replace(/(<[^>]+>)/ig, " ").trim();
    }
}
if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
}
/*-----------------------------*/
/*      Emoticon Utils         */
/*-----------------------------*/
(function (window, document) {
    var NAME = "Emoticon";
    var ICON = {
        ':D': 'smile',
        ':)': 'happy',
        'B)': 'cool',
        '>:)': 'devil',
        ':|': 'newtral',
        ':(': 'sad',
        ':P': 'tongue',
        '(poop)': 'poop'
    }
    var SORTED = [];
    for (var ico in ICON) SORTED.push(ico);
    SORTED.sort(function (a, b) { return b.length > a.length || b > a; });

    function Emoticon() { };
    Emoticon.populate = function (container, callback) {
        for (var ico in ICON) {
            var val = ICON[ico];
            var button = document.createElement("button");
            button.className = "button emoticon ";
            button.title = ico;
            button.data = ico;
            button.addEventListener("click", callback, true);
            container.appendChild(button);

            var i = document.createElement("i");//apply pointer event none on IE 9, show svg image on IE
            i.className = "icon " + val;
            button.appendChild(i);
        }
    }
    Emoticon.replace = function (input) {
        for (var i = 0, ico; i < SORTED.length; i++) {
            ico = SORTED[i];
            input = input.replaceAll(ico, "<i class='icon " + ICON[ico] + "'></i>");
        }
        return input;
    }
    window[NAME] = Emoticon;
})(window, document);
/*-----------------------------*/
/*      Chat Widget            */
/*-----------------------------*/
var ChatWidget = function (window, document, BannerFlow) {
    'use strict';
    var NAME = "Chat";
    var CLASS = {
        container: "container",
        message: "message",
        content: "content",
        info: "info",
        me: "me",
        emoticon: "emoticon",
        emoticonOpen: "emoticon-open",
        emoticonContainer: "emoticon-container",
        send: "send",
        chat: "chat",
        active: "active",
        customStyle: "custom-style"
    }
    var DEFAULT = {
        text: "DEFAULT"
    }
    function getFormattedDate() {
        var date = new Date();
        var str = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " +
          date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        return str;
    }
    function Chat() {
        this.container = document.querySelector("." + CLASS.container);
        this.count = 0;
        this.queue = [];
        this.timer;
        this.looper;
        this.messages = [
          {
              content: "Hello, how are you ? ",
              owner: "other"
          }, {
              content: "Hi, I'm fine, thank you. How about you ?",
              owner: "me"
          }, {
              content: "Yeah, I'm fine. Have you ever heard about BannerFlow ?",
              owner: "other"
          }
        ];
        this.initialize = this.initialize.bind(this);
        this.onAppendMessage = this.onAppendMessage.bind(this);
        this.onChangeSetting = this.onChangeSetting.bind(this);
        this.onEditMode = this.onEditMode.bind(this);
        this.submitButton = document.querySelector("." + CLASS.send);
        this.inputText = document.querySelector("." + CLASS.chat);
        this.emoticonOpen = document.querySelector("." + CLASS.emoticonOpen);
        this.emoticonContainer = document.querySelector("." + CLASS.emoticonContainer);
        Emoticon.populate(this.emoticonContainer, function (event) {
            var emo = event.srcElement.data;
            if (!emo) return;
            var val = this.inputText.value;
            var start = this.inputText.selectionStart;
            var end = this.inputText.selectionEnd;
            this.inputText.value = val.slice(0, start) + emo + val.slice(end);
            this.inputText.selectionStart = this.inputText.selectionEnd = start + emo.length;
        }.bind(this));
        this.emoticonOpen.addEventListener("click", function () {
            if (this.emoticonOpen.hasClass(CLASS.active)) {
                this.emoticonOpen.removeClass(CLASS.active);
            } else {
                this.emoticonOpen.addClass(CLASS.active);
            }
        }.bind(this));
        this.submitButton.addEventListener("click", this.onAppendMessage);
        this.inputText.addEventListener("keyup", function (event) {
            if (event.keyCode == 13) {
                this.onAppendMessage();
            }
        }.bind(this));
    }
    Chat.prototype.getMessageDom = function (object) {
        var message = document.createElement("div");
        message.addClass(CLASS.message);
        if (object.owner == "me") message.addClass("me");

        var content = document.createElement("p");
        content.addClass(CLASS.content);
        content.innerHTML = Emoticon.replace(object.content);
        message.appendChild(content);

        var info = document.createElement("p");
        info.addClass(CLASS.info);
        info.innerHTML = "Read" + " " + getFormattedDate();
        message.appendChild(info);

        return message;
    }
    Chat.prototype.initialize = function () {
        //reset action queue
        for (var i = 0; i < this.queue.length; i++) {
            clearTimeout(this.queue[i]);
        }
        this.queue = [];
        this.container.empty();
        for (var i = 0; i < this.messages.length; i++) {
            var object = this.messages[i];
            if (typeof object != 'undefined') {
                var message = this.getMessageDom(object);
                var timer = setTimeout(function (message) {
                    this.container.appendChild(message);
                    message.fadeIn();
                    this.container.scrollToBottom();
                }.bind(this, message), i * 1000);
                this.queue.push(timer);
            }
        }
    }
    Chat.prototype.onAppendMessage = function () {
        var object = {
            content: this.inputText.value || "",
            owner: "me"
        }
        if (!object.content) return;
        var message = this.getMessageDom(object);
        setTimeout(function (message) {
            this.inputText.value = "";
            this.container.appendChild(message);
            message.fadeIn();
            this.container.scrollToBottom();
            this.emoticonOpen.removeClass(CLASS.active);
        }.bind(this, message), 0);
    }
    Chat.prototype.onEditMode = function () {
    }
    var getStyle = function (selector, styleObj) {
        var isAttribute = false;
        var newStyle = selector + "{";
        for (var attr in styleObj) {
            if (styleObj[attr]) {
                isAttribute = true;
                newStyle += attr + " : " + styleObj[attr] + ";";
            }
        }
        newStyle += "}";
        return isAttribute ? newStyle : "";
    }
    Chat.prototype.onChangeSetting = function () {
        if (typeof BannerFlow === 'undefined') return;
        if (BannerFlow.text) {
            this.text = BannerFlow.text.strip();
            if (this.text.length != 0) {
                var msg = this.text.split(":");
                for (var i = 0; i < 3; i++) {
                    this.messages[i].content = msg[i];
                }
            }
        }
        if (BannerFlow.settings.Looping) {
            var loopTime = BannerFlow.settings.LoopingTime || 8000;
            this.looper = setInterval(function () {
                this.initialize();
            }.bind(this), loopTime);
        } else {
            if (this.looper) clearInterval(this.looper);
        }
        if (BannerFlow.settings.UserInteraction) {
            this.inputText.removeAttribute("disabled");
            this.emoticonOpen.removeAttribute("disabled");
            this.submitButton.removeAttribute("disabled");
            this.inputText.setAttribute("autofocus", true);
        } else {
            this.inputText.setAttribute("disabled", true);
            this.emoticonOpen.setAttribute("disabled", true);
            this.submitButton.setAttribute("disabled", true);
            this.inputText.removeAttribute("autofocus");
        }
        var style = "";
        var container = {
            "background-color": (BannerFlow.settings.BackgroundColor ? BannerFlow.settings.BackgroundColor : ""),
            "color": (BannerFlow.settings.TextColor1 ? BannerFlow.settings.TextColor1 : ""),
            "font-size": (BannerFlow.settings.FontSize ? BannerFlow.settings.FontSize + "px" : ""),
            "font-family": (BannerFlow.settings.FontFamily ? BannerFlow.settings.FontFamily : ""),
            "line-height": (BannerFlow.settings.LineHeight ? BannerFlow.settings.LineHeight + "px" : "")
        };
        style += getStyle("." + CLASS.container, container);
        var content = {
            "background-color": (BannerFlow.settings.BubbleColor1 ? BannerFlow.settings.BubbleColor1 : "")
        }
        style += getStyle("." + CLASS.content, content);
        var contentBefore = {
            "border-right-color": (BannerFlow.settings.BubbleColor1 ? BannerFlow.settings.BubbleColor1 : ""),
        }
        style += getStyle("." + CLASS.content + ":before", contentBefore);
        var contentMe = {
            "background-color": (BannerFlow.settings.BubbleColor2 ? BannerFlow.settings.BubbleColor2 : ""),
            "color": (BannerFlow.settings.TextColor2 ? BannerFlow.settings.TextColor2 : ""),
        }
        style += getStyle("." + CLASS.me + " ." + CLASS.content, contentMe);
        var contentMeBefore = {
            "border-left-color": (BannerFlow.settings.BubbleColor2 ? BannerFlow.settings.BubbleColor2 : ""),
        }
        style += getStyle("." + CLASS.me + " ." + CLASS.content + ":before", contentMeBefore);
        document.querySelector("#" + CLASS.customStyle).innerHTML = style;

        this.initialize();
    }
    window[NAME] = Chat;
};
var widget = null;
var chat = null;
if (typeof BannerFlow == 'undefined') {
    window.addEventListener("load", function () {
        if (widget == null) widget = ChatWidget(window, document, undefined);
        if (chat == null) chat = new Chat();
        chat.initialize();
        chat.onEditMode();
    });
} else {
    BannerFlow.addEventListener(BannerFlow.TEXT_CHANGED, function () {
        if (chat != null) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () { chat.onChangeSetting(); }.bind(this), 1000);
        }
    });
    BannerFlow.addEventListener(BannerFlow.SETTINGS_CHANGED, function () {
        if (chat != null) {
            clearTimeout(this.timer);
            this.timer = setTimeout(function () { chat.onChangeSetting(); }.bind(this), 1000);
        }
    });
    BannerFlow.addEventListener(BannerFlow.INIT, function () {
        if (widget == null) widget = ChatWidget(window, document, BannerFlow);
        if (chat == null) chat = new Chat();
        clearTimeout(this.timer);
        this.timer = setTimeout(function () { chat.onChangeSetting(); }.bind(this), 1000);
        if (BannerFlow.editorMode) chat.onEditMode();
    });
}