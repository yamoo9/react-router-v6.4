import { useRef, useEffect } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

export default function ContactEdit() {
  const contact = useLoaderData() as ContactType;

  const nameLabelRef = useRef<HTMLSpanElement | null>(null);
  const firstNameInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (nameLabelRef.current) {
      nameLabelRef.current.addEventListener('click', () => {
        if (firstNameInputRef.current) {
          firstNameInputRef.current.focus();
        }
      });
    }
  }, []);

  return (
    <Form method="post" id="contact-form">
      <p>
        <span ref={nameLabelRef}>Name</span>
        <input
          ref={firstNameInputRef}
          type="text"
          name="first"
          aria-label="First name"
          placeholder="First"
          defaultValue={contact.first}
        />
        <input
          type="text"
          name="last"
          aria-label="Last name"
          placeholder="Last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@yamoo9"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>
          Avatar <abbr title="Uniform Resorce Locator">URL</abbr>
        </span>
        <input
          type="text"
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" rows={6} defaultValue={contact.notes} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="reset" style={{ color: '#808080' }}>
          Cancel
        </button>
      </p>
    </Form>
  );
}
