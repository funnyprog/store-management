const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {
        res.json({message: 'Controllers reg function works'})
    }

    async login(req, res) {
        res.json({message: 'Controllers login function works'})
    }

    async checkAuth(req, res, next) {
        const {id} = req.query
        if (!id) return next(ApiError.notFound('Не указан ID'))
        res.json(id)
    }
}

module.exports = new UserController()