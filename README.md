# My Portfolio App

Welcome to my app! This application showcases my projects, provides flashcards for learning, and allows you to get in touch with me.

## Pages

1. **Home Page**
   - General introduction and overview of my projects.
   - Each project has an external link to its repository or deployment.

2. **Flash Cards Page**
   - Structure:
     - Each card has a front (question) and back (answer).
     - Displays the last modification date/time.
     - Includes a status: Learned, Want to Learn, Noted.
   - Management:
     - Create new flashcards.
     - Edit existing flashcards.
     - Delete flashcards.
   - Main Features:
     - Display cards sorted by most recent modification.
     - Interface for adding new cards.
     - Search functionality based on text.
     - Filter cards by their status.
     - Sort cards based on various attributes.
   - Storage Integration:
     - Fetches cards from a JSON server.
     - Persists updates back to the server.

3. **Contact Page**
   - Simple contact form.
   - Enter subject, email address, and message content.
   - Submissions are stored in the JSON server at http://localhost:3000/messages.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-app.git
   
