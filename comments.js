// Create web server application with Node.js and Express.js that will serve the following routes: 
// GET /comments - return all comments from the database 
// GET /comments/new - return form for adding a new comment
// POST /comments - save a new comment to the database
// GET /comments/:id - return a single comment with the given id
// GET /comments/:id/edit - return form for editing a comment
// PUT /comments/:id - update a comment
// DELETE /comments/:id - delete a comment
// The comment model should have the following properties:
// id - generated automatically
// author - required, non-empty string
// text - required, non-empty string
// date - date and time when the comment is created, generated automatically
// The comment model should have the following methods:
// save - saves the comment to the database
// update - updates the comment in the database
// delete - deletes the comment from the database
// all - returns all comments from the database
// find - returns a single comment with the given id
// The comment model should use the comments.json file for storing the comments.
// The comments.json file should be in the following format:
// {
//     "comments": [
//         {
//             "id": 1,
//             "author": "John Doe",
//             "text": "This is a comment.",
//             "date": "2019-05-15T12:00:00Z"
//         },
//         {
//             "id": 2,
//             "author": "Jane Doe",
//             "text": "This is another comment.",
//             "date": "2019-05-15T13:00:00Z"
//         }
//     ]
// }
// The date property should be in the ISO 8601 format.
// The id property should be generated automatically.
// The id property should be unique.
// The id property should be a number.
// The id property should be required.
// The author property should be a string.
// The author property should be required.

