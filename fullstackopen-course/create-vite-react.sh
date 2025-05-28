#!/bin/bash

# Prompt for project name
read -p "Enter your new Vite project name: " project_name

# Create the project
npm create vite@latest "$project_name" -- --template react

# Move into the project directory
cd "$project_name" || exit

# Install dependencies
npm install

# Start the development server
npm run dev
