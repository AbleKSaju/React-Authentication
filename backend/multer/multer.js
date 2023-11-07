import multer from "multer"
// import {log} from "debug/src/node"
//  const { log } = require("debug/src/node")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "backend/public/images/")
  },
  filename: (req, file, cb) => {
    console.log(file,"IMAGE DETAILS");
    cb(null, Date.now() + file.originalname)
  },
})


export const upload = multer({
    storage:storage
})
