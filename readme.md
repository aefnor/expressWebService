Steps to 'recompile' webserver
1.now ls
2.now rm <url> 			ie:now rm example-create-react-app-express-fyfleotyqc.now.sh
3.now
4.curl -F "url=<url>/new-message"  https://api.telegram.org/bot556287487:AAHYXq3XLVXAInd1EfyRkqacUvL5SuhrgH4/setWebhook

example:
curl -F "url=https://example-create-react-app-express-fyfleotyqc.now.sh/new-message"  https://api.telegram.org/bot556287487:AAHYXq3XLVXAInd1EfyRkqacUvL5SuhrgH4/setWebhook

Host Site:
https://zeit.co/dashboard/deployments

Tutorial:
https://www.sohamkamani.com/blog/2016/09/21/making-a-telegram-bot/
