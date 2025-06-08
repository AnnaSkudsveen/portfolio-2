# Portfolio

This is a React-based portfolio that showcases individual portfolio projects using dynamic routing and JSON data. Each project includes a title, image, description, tech stack, live demo link(if avaliable), and optional API integration tag.

## Features
- Dynamic routing via react-router-dom using project IDs

- Responsive layout with Tailwind CSS

- Live demo button (if available)

- Copy Link button to share project URL

- API integration indicator (if applicable)

- Project data sourced from a JSON file

##  Technologies Used

React

React Router

Tailwind CSS

JavaScript (ES6+)

JSON for data storage

## Getting Started

Install dependencies:

````bash
npm install
````

Run the development server:
````bash
npm run dev
````
Visit the app:

Navigate to [http://localhost:5173](http://localhost:5173) (or wherever Vite/your dev server runs)

## Notes

- The Copy Link button uses the Clipboard API.

- The project image filename must follow the pattern: project-[id].jpg.

- For best results, ensure consistent image dimensions across projects.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
