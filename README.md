# Money Builder App

A compound interest investment calculator built with React and Vite. Enter your investment details and see your projected returns year by year.

## Features

- Set an initial investment amount and monthly contributions
- Adjust annual return rate and time period
- Choose compound frequency (annually, quarterly, or monthly)
- View final balance, total invested, and interest earned
- Year-by-year breakdown table

## React Concepts Used

- **Functional components** — all UI is built with function-based components
- **JSX** — HTML-like syntax used to describe the UI
- **Props** — components like `InputField`, `ResultCard`, `FrequencySelector`, and `BreakdownTable` receive data from `App` via props
- **useState** — tracks user inputs (principal, rate, years, etc.) and re-renders the UI when they change
- **useMemo** — recalculates the compound interest result only when inputs change, avoiding unnecessary recalculations
- **Component-based architecture** — the UI is split into small, reusable components in `src/components/`

## Project Structure

```
src/
├── App.jsx                      # Root component, holds state and layout
└── components/
    ├── InputField.jsx           # Reusable number input with prefix/suffix
    ├── ResultCard.jsx           # Displays a single summary stat
    ├── FrequencySelector.jsx    # Toggle buttons for compound frequency
    └── BreakdownTable.jsx       # Year-by-year results table
```

## Running Locally

**Prerequisites:** Node.js installed

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.
