import ProductModel from "../models/productsModel.js"


export const setProduct = async (req, res) => {
    try {
        const { productName, productPrice, productURL,productQuantity } = req.body
        const product = new ProductModel({ productName, productPrice, productURL,productQuantity })
        const savedProduct = await product.save()
        res.status(200).send({ message: "product saved successfully", savedProduct })
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find()
        res.status(200).send({ products })
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const editProduct =async (req, res) => {
    try {
        const { id } = req.params
        const updateProductData = req.body
        const updateProduct = await ProductModel.findByIdAndUpdate(id, updateProductData, { new: true, runValidators: true })
        if (!updateProduct) {
            return res.status(404).send({ message: "product not found" })
        }
        res.status(200).send({ message: "product updated successfully", updateProduct })
    } catch (error) {
        res.status(500).send({ error })
    }
}

export const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params
        const deletedProduct = await ProductModel.findByIdAndDelete(id)
        if (!deletedProduct) {
            res.status(404).send({ message: "product not found" })
        }
        res.status(200).send({ message: "product deleted successfully", deletedProduct })
    } catch (error) {
        res.status(500).send({ error })
    }
}

// module.exports = productsControllers
// export default productsControllers;