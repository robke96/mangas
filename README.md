<p align="center">

![Mangas](.github/images/banner.webp)
</p>
<p align="center"><strong>Mangas</strong> - Streamer website built with Next.js, featuring live status, follower stats, recent streams, and donation/social media links.</p>

## Features
- 🎥 **Live Status:** Shows whether the streamer is currently live.
- 👥 **Follower Count:** Displays the total number of followers.
- 📅 **Recent Streams:** Lists recent broadcasts with timestamps.
- 💸 **Donation Link:** Provides direct link to support the streamer.
- 🌐 **Social Links:** Easy access to the streamer's social media profiles.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**
    ```bash
   git clone https://github.com/robke96/mangas.git
   cd mangas
   ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Run the development server**
    ```bash
    npm run dev
    ```

## Configuration
Update the configuration files to match your streamer's details:
- ``.env`` Contains environment-specific variables. Refer to ``.example.env`` for the required values and their descriptions.
- ``data`` **folder**: Contains TypeScript files for configuration:
    - ``hardware.ts``: Define hardware details.
    - ``categories.ts``: Define categories for stream content.

## Deployment
For deployment instructions, refer to the: [Next.js deplyoment documentation.](https://nextjs.org/docs/pages/building-your-application/deploying)

