# Plan Tracker App

A beautiful plan tracking application built with Next.js, TypeScript, and Shadcn/UI components. Track your daily plans and mark them as accepted or declined with a stunning dark purple/black theme.

## Features

- ✅ **Arabic Verse Display**: Beautiful display of "وَلَا تَهِنُوا وَلَا تَحْزَنُوْا وَأَنْتُمُ الأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ"
- ✅ **English Translation**: "And do not weaken and do not grieve, and you will be superior if you are believers"
- ✅ **Plan Management**: Add new plans and track your decisions
- ✅ **Visual Status Indicators**: 
  - Purple border for pending plans
  - Green border with checkmark for accepted plans
  - Red border with X for declined plans
- ✅ **Dark Theme**: Beautiful purple/black gradient with glassmorphism effects
- ✅ **Responsive Design**: Works on all screen sizes
- ✅ **Modern UI**: Built with Shadcn/UI components

## Tech Stack

- **Next.js 15.3.2** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **React 19** - Frontend library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or extract the project**
   ```bash
   cd plan-tracker-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:8000](http://localhost:8000)

## Available Scripts

- `npm run dev` - Start development server on port 8000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
plan-tracker-app/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles with dark theme
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main plan tracker page
│   ├── components/
│   │   └── ui/              # Shadcn/UI components
│   ├── hooks/               # Custom React hooks
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Key Components

### Main Page (`src/app/page.tsx`)
- Plan tracking interface
- Add new plans functionality
- Yes/No decision buttons
- Visual status indicators

### Layout (`src/app/layout.tsx`)
- Root layout with dark theme
- Font configuration
- Metadata setup

### Global Styles (`src/app/globals.css`)
- Tailwind CSS imports
- Dark theme color variables
- Custom styling

## Usage

1. **View the Arabic verse** at the top of the page
2. **Add new plans** using the input field in the "Add New Plan" section
3. **Track decisions** by clicking "Yes" or "No" on each plan
4. **Visual feedback** shows the status of each plan:
   - **Pending**: Purple border with ⏳ icon
   - **Accepted**: Green border with ✓ checkmark
   - **Declined**: Red border with ✗ mark

## Customization

### Theme Colors
The app uses a purple/black gradient theme. You can customize colors in `src/app/globals.css`:

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... other color variables */
}
```

### Adding New Features
- Modify `src/app/page.tsx` to add new functionality
- Use existing Shadcn/UI components from `src/components/ui/`
- Follow the existing TypeScript patterns

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the Next.js and Shadcn/UI documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/UI Documentation](https://ui.shadcn.com)
