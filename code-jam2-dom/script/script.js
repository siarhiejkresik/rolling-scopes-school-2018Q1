class Notifier {
    constructor(messages) {
        if (messages.length === 0) {
            throw "Can't show messages for an empty message list"
        };

        this.notifier = document.getElementById('notification');
        this.activeMessageIndex = 0;
        this.addEventListeners();
        this.renderMessages(messages);
        this.renderNavbar();
        this.setActiveMessage(this.activeMessageIndex);
    }

    show() {
        if (localStorage.getItem('notify') === String(false)) {
            return;
        }
        this.notifier.hidden = false;
    }

    close() {
        this.notifier.hidden = true;
        this.notifier.removeEventListener('click', this.handleEvent)
    }

    disable(status) {
        localStorage.setItem('notify', status);
    }

    get numberOfMessages() {
        return this.notifier.querySelectorAll('.message').length;
    }

    setActiveMessage(messageIndex) {
        const numberOfMessages = this.numberOfMessages;
        if (messageIndex > numberOfMessages - 1) {
            messageIndex = 0;
        }
        if (messageIndex < 0) {
            messageIndex = numberOfMessages - 1;
        }
        this.activeMessageIndex = messageIndex;

        const messages = this.notifier.querySelectorAll('.message');
        messages.forEach(message => message.classList.remove('active'))
        messages[messageIndex].classList.add('active');

        const indicators = this.notifier.querySelectorAll('.indicator');
        indicators.forEach(page => page.classList.remove('active'));
        indicators[messageIndex].classList.add('active');

    }

    renderMessages(messages) {
        const messagesArea = this.notifier.querySelector('#messages');
        messagesArea.innerHTML = messages
            .map(message => `<p class="message">${message}</p>`)
            .join('\n');
    }

    renderNavbar() {
        const indicators = this.notifier.querySelector('#indicators');
        const numberOfMessages = this.numberOfMessages;

        indicators.innerHTML = Array(numberOfMessages)
            .fill()
            .map((_, i) => `<span class="indicator" data-id="${i}"></span>`)
            .join('\n');
    }

    handleEvent(e) {
        console.log(e.target)
        switch (e.target.id) {
            case 'close':
                this.close();
                return;
            case 'disable':
                this.disable(!e.target.checked);
                return;
            case 'previous':
                this.setActiveMessage(this.activeMessageIndex - 1);
                return;
            case 'next':
                this.setActiveMessage(this.activeMessageIndex + 1);
                return;
        }

        if (e.target.classList.contains('indicator') &&
            !e.target.classList.contains('active')) {
            this.setActiveMessage(e.target.dataset.id);
        }
    }

    addEventListeners() {
        this.notifier.addEventListener('click', this.handleEvent.bind(this));
    }
}


let messages = [
    "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "7 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "8 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        new Notifier(messages).show()
    }, 2000);
});