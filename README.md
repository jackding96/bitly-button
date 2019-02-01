# Bitly Button:

Currently, all Google Chrome extensions that use Bitly require multiple clicks in order to create a Bitlink. This is pretty inefficient, so I wanted to see if I could use Bitly's API to create a one-click solution (perhaps even one with a hotkey shortcut) that automatically creates a bitlink with the current URL, and saves that bitlink to your clipboard. 

Steps:
1. Register application with Bitly API
2. Use OAuth to sign into bitly-button with bitly account
3. Call the "Create Bitlink" API endpoint
4. Create Chrome extension, get basic interactions working
5. Integrate OAuth2.0 web flow into Chrome extension
      a) Save token into chrome's local storage
      b) See if any work needs to be done with invalidating tokens, expiring tokens, etc.
6. Integrate HTTP POST request to Bitly for creating new links
7. Error handling / messaging
7. Any remaining polish (icons, styling, etc.)

Potential Add-On Features:
1. Custom URLs