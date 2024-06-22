# Getting Started with Create React App

This project was styledComponents with [Create React App]

### `npx create-react-app minimalist-saikumar`

# Importing Dependences

### npm 
`react-router-dom`,
`react-icons`,
`styled-components`,
`reactjs-popup`

To render multiple pages on a single page, we can use a BrowserRouter as Router and Switch between pages using Routes
So import the required from the 'react-router-dom' library


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

Launches the test runner in the interactive watch mode.\
See the section about [running tests].

# Home Component

I created a functional component and utilized 'useState' to update states upon clicking the 'QUICK VIEW' action button.

HTML elements were named as styledComponents for (CSS-in-JS).

I imported Header, Footer and Popup components positioning Header at the top and Footer at the bottom of the Home Component to visualize the Home Page.

I dynamically displayed the popup based on 'QUIK VIEW' button action, triggering the product view content.
The cancel buttom funtions similarly to Quick View.

I used styledComponents for responsive styling across various screens, including deskptop, tablet, and mobile.
employing
`display: flex` and `flex-wrap`.
Specific screens adjustments were made using `@media` queries in the styles.

# Header

Similar to the Home Component, I used a functional component for the Header.
The background color and transparent glass effect were achieved using properties such as `color`, `background`, `box-shadow`, `backdrop-filter: bluer` 

The Header was exported and utilized within the Home Component

# Footer

The Footer includes social media icons, and I utilized 'Link' from the 'react-router-dom' library to redirect to various websites upon onClick the icons.

For responsiveness, I used `display:flex`and  `flex- wrap` for this component as well.

# Popup

I integrated the `reactjs-popup` third-party library,  imported from npm, to fecilitate the Popup functionality. This library offers ready-made functions that can be customized according to specific requirements. I utilized styledComponents for customiztion.

The Popup is triggered by the "QUICK VIEW" button in the Home Component. Properties were adjusted to ensure the Popup displays correctly when the "QUICK VIEW" button is clicked. The close button functions similarly to "Quick View:.


Finally, I thoroghly tested the code and ensured responsiveness across different devices.

Its working quite well. Please let me know if there are any further corrections needed.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment]

