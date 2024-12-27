# Job Portal

Welcome to the Job Portal project! This is a web application designed for job seekers and recruiters to connect effectively. The project is built with **ReactJS** for the frontend and **Node.js** for the backend, leveraging Firebase for certain features.

## Hosted URL

The **frontend** of the project is hosted on [Vercel](https://vercel.com). However, the **backend server** is not yet merged and hosted. To experience full functionality, you will need to run the backend locally.

## Local Setup Instructions

### Frontend Setup
No `.env` file is needed for the frontend. Simply clone the repository and run the following commands:

```bash
npm install
npm run dev
```

### Backend Setup
1. Clone the repository.
2. Navigate to the backend directory.
3. Create a `.env` file with the following variables:

```env
MONGO_URI=mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10
JWT_SECRETFORAUTH=<your_jwt_secret>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

4. Install dependencies and start the server:

```bash
npm install
npm start
```

Ensure your MongoDB instance is running locally and configured as per the `MONGO_URI` in the `.env` file.

## Contribution Guidelines

We welcome contributions of all kinds! Here's how you can contribute:

- Raise an issue if you find a bug or have suggestions for improvement.
- Submit pull requests to improve the codebase, add features, or restructure components.
- Feel free to provide feedback or suggestions to enhance the user experience.

### Badges
[![wakatime](https://wakatime.com/badge/github/Coder-PinkuModi/PracticeQofCandC--.svg)](https://wakatime.com/badge/github/Coder-PinkuModi/PracticeQofCandC--)

## Feedback

We’re open to feedback and ideas! Please feel free to:
- Raise issues.
- Submit PRs.
- Share suggestions for restructuring or other improvements.

Thank you for checking out the Job Portal project. We look forward to collaborating with you!

