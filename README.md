# Weather Next

A modern weather application built with Next.js that allows users to search for cities and view their current weather conditions. The application features a clean, responsive interface and includes functionality to save favorite cities for quick access.

## Features

- 🔍 Real-time city search with autocomplete
- 🌤️ Detailed weather information display
- ⭐ Save and manage favorite cities
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Built with Next.js 15 and React 19

## Tech Stack

- **Framework**: Next.js 15.1.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with class-variance-authority
- **State Management**: React Hooks
- **API Integration**: Google Places API & Weather API

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-next.git
cd weather-next
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your API keys:

```env
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
WEATHER_API_KEY=your_weather_api_key
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
weather-next/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   └── lib/
│       ├── actions/      # API actions and data fetching
│       └── types/        # TypeScript type definitions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code linting

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
