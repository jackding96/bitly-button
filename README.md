Bitly Button:

Currently, all Google Chrome extensions that use Bitly require multiple clicks in order to create a Bitlink. This is pretty inefficient, so I wanted to see if I could use Bitly's API to create a one-click solution (perhaps even one with a hotkey shortcut) that automatically creates a bitlink with the current URL, and saves that bitlink to your clipboard. 

Steps:
1. Register application with Bitly API
2. Use OAuth to sign into bitly-button with bitly account
3. Call the "Create Bitlink" API endpoint
4. Create Chrome extension, get basic interactions working
5. Integrate OAuth2.0 web flow into Chrome extension
