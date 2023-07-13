# Web Application

This is a web application created using Express, a fast and minimalist web framework for Node.js.

## Features

- Home page
- Our Services page
- Contact us page
- Custom middleware to verify working hours
- Styling with CSS
- Responsive design

## Requirements

- Node.js (version 18.16.1)
- npm (version 9.5.1)

## Installation

1. Clone the repository or download the project files.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the following command:


## Usage

1. Start the server by running the following command:

The server will start running on `http://localhost:3000`.
2. Access the web application in your browser by visiting `http://localhost:3000`.

## Working Hours

The web application is only available during working hours (Monday to Friday, from 9 AM to 5 PM). Outside of these hours, you will be redirected to a "Hors Service" page.

## File Structure

- `server.js` - The main file that sets up the Express server and handles routes.
- `public/` - Static files directory, including CSS stylesheets.
- `views/` - Directory containing EJS templates for rendering pages.

## Customize

- To modify the content of the pages, update the respective EJS templates in the `views/` directory.
- To change the styling, edit the `styles.css` file located in the `public/` directory.

## License

This project is licensed under the [MIT License](LICENSE).
