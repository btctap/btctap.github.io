import log from "loglevel";

export const send = (msg: string) => {
    const telegram_chat_id = import.meta.env.VITE_TELEGRAM_CHAT_ID
    const telegram_bot_token = import.meta.env.VITE_TELEGRAM_TOKEN
    fetch(`https://api.telegram.org/bot${telegram_bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegram_chat_id,
            text: msg
        })
})
    .catch(error => {
        log.error('Error sending message:', error);
});
}