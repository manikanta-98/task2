📄 Task 2 -Nunjucks + Gulp Implementation
## Bootstrap UI Internship — Strict Tech Stack Implementation

This is my second  task where I rebuilt the first task document using modern web tools. Instead of writing plain HTML, I used templates (like reusable building blocks) and automated the boring stuff with Gulp.
What I used to build this
Templating Engine: Nunjucks
Think of it like creating a master template that you can reuse. Instead of copying the same header and footer on every page, you write it once and include it everywhere.
Task Runner: Gulp
This is like having a robot assistant that automatically builds your website, refreshes your browser when you make changes, and handles all the repetitive tasks.
How the project is organized
My Project/
├── src/templates/          Where I write my templates
│   ├── index.njk          Homepage template
│   ├── about.njk          About page template
│   ├── contact.njk        Contact page template
│   └── assets/
│       ├── partials/      Reusable pieces (header, footer, etc.)
│       ├── script.js      My JavaScript
│       └── style.css      My styles
├── dist/                   Where Gulp puts the final files
├── index.html             Final homepage (auto-generated)
├── about.html             Final about page (auto-generated)
├── contact.html           Final contact page (auto-generated)
├── gulpfile.js            Gulp settings
└── package.json           List of tools I'm using
How to run this project
First time setup:

Make sure you have Node.js installed on your computer
Download or clone this project
Open terminal/command prompt in the project folder
Type: npm install and hit enter (this downloads all the tools needed)

To start working:
Just type gulp in your terminal and hit enter. This will:

Turn your templates into actual HTML pages
Start a local web server
Open your browser automatically
Watch for any changes you make and refresh the browser instantly

To build the final version:
Type gulp build when you're ready to publish. This creates the final HTML files that you can upload to any hosting service.
What this project does
I recreated the Task 1 document exactly as it was, but this time using a smarter approach:

Same emojis (📄, 🎯, 🛠️)
Same clickable links
Same styling and formatting
Multiple pages (home, about, contact)
Reusable header and footer across all pages
Automatic rebuilding when I change anything

How Nunjucks templates work
Instead of writing full HTML pages, I create templates:
html<!-- Include a header that's used on every page -->
{% include "assets/partials/header.njk" %}

<main>
  <h1>Welcome to my page</h1>
  <p>This content is unique to this page</p>
</main>

<!-- Include a footer that's used on every page -->
{% include "assets/partials/footer.njk" %}
If I need to update the header, I just change it once and it updates everywhere automatically!
Gulp commands you can use

gulp - Start everything (build, watch, and live server)
gulp build - Just build the final files
gulp clean - Delete all generated files
npm run dev - Another way to start development mode

Common problems and fixes
"Gulp command not found"
Run: npm install -g gulp-cli to install Gulp globally
"Nothing happens when I save my files"
Make sure Gulp is running in your terminal. You should see it watching for changes.
"Dependencies won't install"
Try deleting node_modules folder and package-lock.json, then run npm install again
How I work on this project

Open the project in VS Code (or any editor)
Run gulp in the terminal
Edit the .njk files in src/templates/
Save the file
Watch the browser refresh automatically with my changes
Repeat until I'm happy
Run gulp build for the final version

Why I chose these tools
Nunjucks: It's powerful but easy to learn. Great error messages when something goes wrong. Perfect for creating reusable components.
Gulp: Simple to set up, lots of helpful plugins available, and it's fast. Plus the live reload feature saves tons of time.
Task checklist

✅ Recreated the Task 1 document exactly
✅ Used Nunjucks for templating
✅ Used Gulp for automation
✅ Organized files properly
✅ Created multiple pages
✅ Made reusable components
✅ Wrote this README
✅ Separate Git repository
✅ Deployed to a live URL

Live demo
Website: (https://manikanta-98.github.io/task2/)
