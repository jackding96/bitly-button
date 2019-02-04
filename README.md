# Bitly Button:

Currently, all Google Chrome extensions that use Bitly require multiple clicks in order to create a Bitlink. This is pretty inefficient, so I wanted to see if I could use Bitly's API to create a one-click solution (perhaps even one with a hotkey shortcut) that automatically creates a bitlink with the current URL, and saves that bitlink to your clipboard. 

Steps:
1. Register application with Bitly API [Done]
2. Use OAuth to sign into bitly-button with bitly account [Done]
3. Call the "Create Bitlink" API endpoint [Done]
4. Create Chrome extension, get basic interactions working [Done]
5. Integrate OAuth2.0 web flow into Chrome extension [Done]
      a) Save token into chrome's local storage [Done]
      b) See if any work needs to be done with invalidating tokens, expiring tokens, etc.
6. Integrate HTTP POST request to Bitly for creating new links [Done]
7. Error handling / messaging [Done]
7. Any remaining polish (icons, styling, etc.)

Potential Add-On Features:
1. Custom URLs [needs premium account]
2. Do I need Typescript?
3. Do I need React?
4. Do I need Babel?
5. Create Chrome shortcut
6. Block extension from working on non-valid URLs (files, chrome://, bitly URLs)
7. Dashboard?
8. Only fetch auth token if doesn't exist / expired