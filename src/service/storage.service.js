const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file, fileName,folder = "/practice-caption") {
    const response = await imagekit.files.upload({
        file: file,
        fileName: fileName,
        folder:folder
    })

    return response
}

module.exports = {uploadFile}