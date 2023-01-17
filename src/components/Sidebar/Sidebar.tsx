export function Sidebar() {
  return (
    <div id="sidebar">
      <h1>React Router Contracts</h1>
      <div>
        <form id="search-from" role="search">
          <input
            type="search"
            id="q"
            name="q"
            aria-label="Search contacts"
            placeholder="Search"
          />
          <div id="search-spinner" aria-hidden hidden={true}></div>
          <div className="sr-only" aria-live="polite"></div>
        </form>

        <form method="POST">
          <button type="submit">New</button>
        </form>
      </div>

      <nav aria-label="User Contacts">
        <ul>
          <li>
            <a href="/contacts/1">Your Name</a>
          </li>
          <li>
            <a href="/contacts/1">Your Name</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
