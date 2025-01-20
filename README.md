# RAKU AI Landing Page

A modern, responsive landing page for RAKU AI, showcasing its features and capabilities.

## Features

- Responsive design
- Interactive carousel
- Smooth scrolling
- Animated sections
- Mobile-first approach
- Integration showcase
- Privacy Policy and Terms & Conditions pages

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/raku-ai-web.git
cd raku-ai-web
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
PORT=3000
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000` (or the port specified in your .env file).

## Project Structure

```
raku-ai-web/
├── app.js              # Main application file
├── public/             # Static files
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Image assets
├── views/             # EJS templates
│   ├── partials/      # Reusable template parts
│   ├── index.ejs      # Home page
│   ├── privacy-policy.ejs
│   └── terms-conditions.ejs
└── package.json       # Project configuration
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Contact

- Website: https://raku.id
- Email: info@raku.id 