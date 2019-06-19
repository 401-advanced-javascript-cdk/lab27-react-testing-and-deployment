# Lab27 - React Testing and Deployment
Lab to practice writing React component tests with Enzyme and deploying to Netlify and AWS
### Author: Chris Kozlowski

### Links and Resources
* [Submission PR](https://github.com/401-advanced-javascript-cdk/lab27-react-testing-and-deployment/pull/1)
* [Netlify Deployment](https://optimistic-bardeen-1c3b2d.netlify.com)
* [AWS Amplify Deployment](https://lab27.dbffg9zo9u9a4.amplifyapp.com/)
* [AWS S3 Deployment](http://lab27-deployment.s3-website-us-west-2.amazonaws.com)
* [Travis](https://travis-ci.com/401-advanced-javascript-cdk/lab27-react-testing-and-deployment/jobs/209392712)

### Modules
#### `index.js`
Gets the root element in the HTML and renders the App component
#### `app.js`
Imports the Header, Footer, and Counter components.  The App component renders all three components.
#### 'components/counter.js`
Contains the Counter component with a count integer in state and methods for increasing and decresing the count.  The Counter component has links that trigger the methods when clicked.
#### `components/header.js`
Dummy component that renders the header.
#### `component/footer.js`
Dummy component that renders the footer.
#### `app.scss`
Defines the styling for the app.

#### Operation
The app can be viewed at the deployments listed above.

#### UML
![Lab27 UML](./assets/lab27.jpg)
