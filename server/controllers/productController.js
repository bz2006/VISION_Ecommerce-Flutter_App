import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js"
import multer from "multer";
import productModel from "../models/productModel.js";



const FILE_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg',
    'video/mp4':'mp4'
}

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error('invalid image type');

        if (isValid) {
            uploadError = null
        }
        cb(uploadError, 'C:/Users/EPHREM B/VISION/client/public/uploads')
    },
    filename: function (req, file, cb) {
        const newfile = file.originalname.split(" ").join("_")
        cb(null, newfile)
    }
})



export const getSingleProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findById(productId)

        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }

        return res.status(200).json({product });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const productList = await productModel.find({});
        if (!productList) {
            return res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
        return res.status(200).json({ productList });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

