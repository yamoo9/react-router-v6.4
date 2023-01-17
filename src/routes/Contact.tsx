import { Favorite } from '@/components';
import { Form } from 'react-router-dom';

export default function Contact() {
  const contact: Omit<ContactType, 'id'> = {
    first: 'Your',
    last: 'Name',
    avatar: 'https://placekitten.com/200/200',
    twitter: 'your_handle',
    notes: 'Some notes',
    favorite: true,
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    if (!confirm('Please confirm you want to delete this record.')) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact">
      <div>
        <img src={contact.avatar} alt="" />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
          <Favorite contact={contact as ContactType} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form method="post" action="destory" onSubmit={handleSubmit}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
