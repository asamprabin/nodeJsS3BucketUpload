// Refer https://www.youtube.com/watch?v=ASuU4km3VHE&t=380s&list=WL&index=22
// For further details

const express = require('express');
const router = express.Router();

const upload = require('../utility/s3FileUpload');

router.post('/fileupload', upload.single('image'), (req, res) => {

  res.send({
    count: req.file.metadata.count,
    location: req.file.location
  })
})

module.exports = router;