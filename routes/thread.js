const express = require("express");
const router = express.Router();

const threadCtrl = require("../controllers/thread");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, threadCtrl.createThread); //thread - post
router.get("/", auth, threadCtrl.getAllThreads); //thread - get
router.get("/:threadId", auth, threadCtrl.getThread); //threadId - get
router.put("/:threadId", auth, threadCtrl.modifyThread); //threadId - put
router.delete("/:threadId", auth, threadCtrl.deleteThread); //threadId - delete

router.post("/:threadId/message", auth, threadCtrl.createMessage); //message - post
router.get("/:threadId/message", auth, threadCtrl.getAllMessages); //message - get
router.get("/:threadId/message/:messageId", auth, threadCtrl.getMessage); //messageId - get
router.put("/:threadId/message/:messageId", auth, threadCtrl.modifyMessage); //messageId - put
router.delete("/:threadId/message/:messageId", auth, threadCtrl.deleteMessage); //messageId - delete
router.post("/:threadId/message/gif", auth, multer, threadCtrl.postGif); //gif - post

module.exports = router;
