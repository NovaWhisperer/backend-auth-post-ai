const postModel = require("../models/post.models");
const {generateCaption} = require("../service/ai.service");
const {uploadFile} = require("../service/storage.service");
const { v4 } = require("uuid")

async function PostController(req, res) {


    const file = req.file;
    if (!file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    console.log("File received:", file);

    try {
        // Convert file buffer to base64 string once
        const base64 = file.buffer.toString("base64");
        console.log("Base64 string generated");

        // Use base64 for caption generation
        const caption = await generateCaption(base64);
        console.log("Caption generated:", caption);

        // Create data URI for ImageKit upload
        const dataUri = `data:${file.mimetype};base64,${base64}`;
        const result = await uploadFile(dataUri, `${v4()}`);
        // console.log("Image uploaded:", result);

        const post = await postModel.create({
            caption: caption,
            image: result.url,
            user: req.user._id
        })

        res.status(201).json({
            message: "Post created successfully",
            post
        })

    } catch (err) {
        console.error("Error in PostController:", err);
        res.status(500).json({ error: err.message || err });
    }
}

module.exports = { PostController }