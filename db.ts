import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const DB: string = process.env.DB || '';
		await mongoose
			.connect(DB, {
				useCreateIndex: true,
				useFindAndModify: false,
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => console.log('Database connection completed successfully'));
	} catch (error) {
		console.log(error, 'Database connection failed');
	}
};

export default connectDB;
