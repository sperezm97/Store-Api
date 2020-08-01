import mongoose from 'mongoose';
import env from './env';

mongoose.connect(env.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
