# Whizzon
Whizzon is a web app that uses the Clarifai API to locate a face in a picture. Using a React.js front-end and Node.js back-end with Express.js as well as a PostgreSQL database to keep track of how many entries a user has made.

## Stack
### Front-End
- HTML5
- CSS3
- React.js
### Back-End
- Node.js
- Express
- PostgreSQL
### APIs
- [Clarifai](https://www.clarifai.com/)
## Troubleshooting
1. If your image isn't working, make sure the image URL points directly to the image file (you might want to right click on the image and click on Copy Image Address.
2. If you are sure about the image, maybe the face detection API reached its 5000 images per month limit.
3. Sometimes the server responds slow for signin/register requests, so please be patient.
However, do check your browser console for any potential bad requests or errors, and raise an issue in case you find any.
