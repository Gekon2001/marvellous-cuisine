import mongoose from 'mongoose';

const PictureSchema = new mongoose.Schema({

});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  pictures: [],
});

export default mongoose.model('Product', productSchema);
