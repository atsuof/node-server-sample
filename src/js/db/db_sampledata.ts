import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const SampleDataSchema = new mongoose.Schema({
  name: String,
  value: String,
  metaP_surName: String,
  metaP_givenName: String,
  data: String,
});

export const SampleData = mongoose.connection.model('sampleData', SampleDataSchema);
