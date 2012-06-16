# Evite Authenticity Token Generator

A Node.js script to generate an Evite authenticity token that can be used for automatically authenticating users.

## Installation
  
### Use a pre-compiled installer for your operating system

  These can be found at the official Node.js website

  http://nodejs.org/

### Use the package manager Homebrew (OSX only)

  Install Homebrew
  
  <code>/usr/bin/ruby -e "$(/usr/bin/curl -fsSL https://raw.github.com/mxcl/homebrew/master/Library/Contributions/install_homebrew.rb)"</code>
  
  Install Node.js
  
  <code>brew install node</code>

## Quick Start

  Specify an Evite username, password, and a desired expiration date for the token
  
  Run the node script in a terminal
  
  <code>node evite_token_generator.js</code>