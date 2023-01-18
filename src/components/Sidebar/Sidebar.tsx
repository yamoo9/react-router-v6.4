import { Form, NavLink } from 'react-router-dom';

interface Props {
  contacts: ContactType[];
}

export function Sidebar({ contacts }: Props): JSX.Element {
  return (
    <div id="sidebar">
      <h1>React Router Contracts</h1>
      <div>
        <Form id="search-from" role="search">
          <input
            type="search"
            id="q"
            name="q"
            aria-label="Search contacts"
            placeholder="Search"
          />
          <div id="search-spinner" aria-hidden hidden={true}></div>
          <div className="sr-only" aria-live="polite"></div>
        </Form>

        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </div>

      <nav aria-label="User Contacts">
        {contacts.length ? (
          <ul>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <NavLink
                  to={`contacts/${contact.id}`}
                  className={({ isActive, isPending }) =>
                    isActive ? 'active' : isPending ? 'pending' : ''
                  }
                >
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
                </NavLink>
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
