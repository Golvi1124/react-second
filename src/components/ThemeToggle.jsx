import { useTheme } from '../themes/themeContext';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} style={{ marginBottom: '1rem' }}>
      Toggle Theme
    </button>
  );
}