# Social Media Caption Generator

A Node.js backend service for generating engaging social media captions using AI. This project provides authentication, post management, and AI-powered caption suggestions for social media content creators.

## Features
- User authentication (register/login)
- Create, read, update, and delete posts
- AI-powered caption generation
- Secure JWT-based authentication
- Modular code structure (controllers, routes, services, models)

## Project Structure
```
.
├── package.json
├── server.js
├── src/
│   ├── app.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── post.controller.js
│   ├── db/
│   │   └── db.js
│   ├── middlewares/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── post.models.js
│   │   └── user.models.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── post.routes.js
│   └── service/
│       ├── ai.service.js
│       └── storage.service.js
```

## Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm or yarn
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/social-media-caption.git
   cd social-media-caption
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file based on the provided `.env.example`.
4. Start the server:
   ```bash
   npm start
   # or
   node server.js
   ```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT

### Posts
- `GET /api/posts` — Get all posts
- `POST /api/posts` — Create a new post
- `PUT /api/posts/:id` — Update a post
- `DELETE /api/posts/:id` — Delete a post

### AI Caption
- `POST /api/ai/caption` — Generate a caption for a post

## Environment Variables
See `.env.example` for all required environment variables.

## Example .env
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/social-media-caption
JWT_SECRET=your_jwt_secret
AI_API_KEY=your_ai_api_key
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the terms of the MIT License. See the [LICENSE](LICENSE) file for details.
