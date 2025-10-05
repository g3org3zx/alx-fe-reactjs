Recipe Sharing Platform
Overview
Welcome to the Recipe Sharing Platform, a responsive web application built with React and styled using Tailwind CSS. This project, part of the "Building React Projects with Tailwind CSS" course, allows users to browse, view details, and add new recipes. It serves as a practical demonstration of integrating Tailwind CSS with React for efficient, utility-first styling and responsive design.
Learning Objectives

Set up a React application with Tailwind CSS.
Build a responsive Home Page to display recipe lists.
Create a Recipe Detail Page with comprehensive recipe information.
Implement a responsive form for adding new recipes with validation.

Project Structure

recipe-sharing-platform/
package.json: Project dependencies and scripts.
tailwind.config.js: Tailwind CSS configuration.
postcss.config.js: PostCSS configuration for Tailwind.
index.html: Main HTML file with the React root.
src/
data.json: Mock recipe data.
index.css: Tailwind directives.
main.jsx: React entry point.
App.jsx: Main app component with routing.
components/
HomePage.jsx: Displays recipe list.
RecipeDetail.jsx: Shows recipe details.
AddRecipeForm.jsx: Form for adding recipes.







Features

Home Page: Lists recipes with images, titles, summaries, and links to details.
Recipe Detail Page: Displays ingredients and instructions for a selected recipe.
Add Recipe Form: Allows users to submit new recipes with validation.
Responsive Design: Adapts to mobile, tablet, and desktop screens using Tailwind CSS.

Setup (Optional Local Installation)
If you resolve local setup issues (e.g., npm ENOENT errors), follow these steps to run the project locally:

Clone the Repository:
git clone https://github.com/g3org3zx/alx-fe-reactjs.git
cd alx-fe-reactjs/recipe-sharing-platform


Install Dependencies:
npm install


Start the Development Server:
npm run dev


Open http://localhost:5173 in your browser to see the app.


Build for Production (Optional):
npm


