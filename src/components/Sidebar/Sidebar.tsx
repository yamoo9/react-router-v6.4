import { Link } from 'react-router-dom';

interface Props {
  contacts: ContactType[];
}

export function Sidebar({ contacts }: Props): JSX.Element {
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
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <p>
                      <i>No Name</i>
                    </p>
                  )}{' '}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>No contacts</i>
          </p>
        )}
      </nav>
    </div>
  );
}
