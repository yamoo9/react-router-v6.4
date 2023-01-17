import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import { Detail, Sidebar } from '@/components';
import { getContacts, createContact } from '@/services/contacts';

export default function RootLayout() {
  const { contacts } = useLoaderData() as { contacts: ContactType[] };

  return (
    <>
      <Sidebar contacts={contacts} />
      <Detail>
        <Outlet />
      </Detail>
    </>
  );
}

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
