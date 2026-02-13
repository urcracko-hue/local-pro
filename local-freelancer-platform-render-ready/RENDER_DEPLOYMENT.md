# 🚀 Deploying to Render.com

## Steps:

1. Push this project to GitHub.
2. Go to https://render.com
3. Create a New Web Service.
4. Connect your GitHub repository.
5. Render will auto-detect Node.js.

## Settings:

- Build Command: npm install
- Start Command: npm start
- Environment Variables:
    - MONGO_URI = your MongoDB Atlas connection string
    - PORT = 10000 (optional — Render sets this automatically)

## Notes:
- Do NOT upload node_modules.
- Make sure MongoDB Atlas allows connections from 0.0.0.0/0 or from Render IPs.
