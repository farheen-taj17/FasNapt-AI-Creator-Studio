const express =
require("express");

const router =
express.Router();

const multer =
require("multer");

const {
CloudinaryStorage
}
=
require(
"multer-storage-cloudinary"
);

const cloudinary =
require(
"../config/cloudinary"
);

const auth =
require(
"../middleware/authMiddleware"
);

const {
uploadVideo
}
=
require(
"../controllers/videoController"
);

const storage =
new CloudinaryStorage({

cloudinary,

params:{
folder:"fasnapt-videos",
resource_type:"video"
}

});

const upload =
multer({storage});

router.post(
"/upload",
auth,
upload.single("video"),
uploadVideo
);

module.exports =
router;

