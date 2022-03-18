const express = require("express")
const router = express.Router()

const blogsController = require("../app/controllers/BlogController")

router.get("/create", blogsController.create)
router.post("/store", blogsController.store)
router.get("/:id/edit", blogsController.edit)
router.put("/:id", blogsController.update)
router.delete("/:id", blogsController.delete)
router.patch("/:id/restore", blogsController.restore)
router.delete("/:id/force", blogsController.forceDestroy)
router.get("/:slug", blogsController.show)

module.exports = router
