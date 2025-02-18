import { SearchBar } from './search-bar'; // Client Components

// page.tsxなどのServer Componentsから利用される
export default function Header() {
  return (
    <header>
      <h1>My App</h1>
      <SearchBar />
    </header>
  );
}
