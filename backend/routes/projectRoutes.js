const express =
require("express");

const router =
express.Router();

const auth =
require(
"../middleware/authMiddleware"
);

const {

createProject,
getProjects

}
=
require(
"../controllers/projectController"
);

router.post(
"/create",
auth,
createProject
);

router.get(
"/all",
auth,
getProjects
);

module.exports =
router;


