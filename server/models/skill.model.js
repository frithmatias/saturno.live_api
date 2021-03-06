"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const skillSchema = new mongoose_1.Schema({
    id_company: { type: String, required: [true, 'El id_company es necesario'] },
    cd_skill: { type: String, required: [true, 'El cd_skill es necesario'] },
    tx_skill: { type: String, required: [true, 'El tx_skill es necesario'] },
    bl_generic: { type: Boolean, required: true, default: false }
}, { collection: "skills" });
skillSchema.plugin(mongoose_unique_validator_1.default, { message: 'El campo {PATH} debe de ser unico' });
exports.Skill = mongoose_1.model('Skill', skillSchema);
