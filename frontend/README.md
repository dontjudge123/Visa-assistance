*To run: npm run dev

(Backend is working with render.com and still running :) )


*If there is a error, please run those untill we fix them :)

# Install nvm (Node Version Manager) if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load nvm into the current shell
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Install Node.js version 20 (recommended)
nvm install 20

# Use Node 20 in this session
nvm use 20

# Set Node 20 as the default version for future terminals
nvm alias default 20

# Confirm the update
node -v
npm -v
