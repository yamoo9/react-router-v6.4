import { useEffect } from 'react';
import { Form, NavLink, SubmitFunction } from 'react-router-dom';

interface Props {
  contacts: ContactType[];
  onSubmit: SubmitFunction;
  q: string;
}

export function Sidebar({ contacts, q, onSubmit }: Props): JSX.Element {
  useEffect(() => {
    (document.getElementById('q') as HTMLInputElement).value = q;
  }, [q]);

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
            defaultValue={q}
            onChange={(e) => {
              onSubmit?.(e.currentTarget.form);
            }}
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
