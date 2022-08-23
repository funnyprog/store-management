const {Brand} = require('../models/models')
const ApiError = require("../error/ApiError")

class BrandController {
    async createBrand(req, res) {
        const {name} = req.body
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getBrand(req, res) {
        res.json({message: 'Controllers login function works'})
    }

    async getAllBrands(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }
}

module.exports = new BrandController()