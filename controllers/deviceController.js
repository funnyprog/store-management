const {Device} = require("../models/models");
const uuid = require('uuid')
const path = require('path')
const ApiError = require("../error/ApiError")


class DeviceController {
    async createDevice(req, res, next) {
        try {
            const {name, price, typeId, brandId} = req.body
            const {image} = req.files
            let fileName = uuid.v4() + '.jpg'
            await image.mv(path.resolve(__dirname, '..', 'static', fileName))

            const device = await Device.create({name, price, typeId, brandId, image: fileName})

            return res.json(device)
        } catch(e) {
            next(ApiError.notFound(e.message))
        }
    }

    async getDevice(req, res) {
        res.json({message: 'Controllers login function works'})
    }

    async getAllDevices(req, res) {
        const devices = await Device.findAll()
        return res.json(devices)
    }
}

module.exports = new DeviceController()