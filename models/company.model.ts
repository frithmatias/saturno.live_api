import { Schema, model, Document } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
  
const companySchema = new Schema({
    tx_company_name: {type: String, unique: true, required: [true, 'El tx_name es necesario']},
    tx_address_street: {type: String, required: false},
    tx_address_number: {type: String, required: false},
    cd_city: {type: String, required: false},
    fc_att_start: {type: Date, required: false},
    fc_att_end: {type: Date, required: false},
},{ collection: "companies" })

interface Company extends Document {
    tx_company_name: string;
    tx_address_street: string;
    tx_address_number: string;
    cd_city: string;
    fc_att_start: Date;
    fc_att_end: Date;
}

companySchema.plugin( uniqueValidator, {message: 'El campo {PATH} debe de ser unico'} );
export const Company = model<Company>('Company', companySchema);