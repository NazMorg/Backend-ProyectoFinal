import mongoose from 'mongoose';

const URI = 'mongodb+srv://morgadonazareno:NHM4CdxSVdsUBtsF@ecommerce.iaoh99v.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=AtlasApp';

mongoose.connect(URI)
    .then(() => console.log("DB Conectada..."))
    .catch((error) => console.log(error));