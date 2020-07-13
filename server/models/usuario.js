"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El email es necesario'] },
    password: { type: String, required: [true, 'El password es necesario'] },
    empresa: { type: String, required: [true, 'El nombre de la empresa es necesario'] },
    role: { type: String, required: true, default: 'USER_ROLE' },
    img: { type: String, required: false },
    google: { type: Boolean, required: true, default: false },
});
usuarioSchema.method('checkPassword', function (pass = '') {
    // Aca es muy importante NO USAR función de flecha sino una función tradicional
    // para no perder la referencia al THIS que apunta al objeto const usuarioSchema = new Schema({})
    if (bcrypt_1.default.compareSync(pass, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
usuarioSchema.plugin(mongoose_unique_validator_1.default, { message: 'El campo {PATH} debe de ser unico' });
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
