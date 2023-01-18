import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from 'react-router-dom';
import { Detail, Sidebar } from '@/components';
import { getContacts, createContact } from '@/services/contacts';

export default function RootLayout() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const { contacts, q } = useLoaderData() as {
    contacts: ContactType[];
    q?: string;
  };

  return (
    <>
      <Sidebar contacts={contacts} q={q} onSubmit={submit} />
      <Detail className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </Detail>
    </>
  );
}

export async function loader({ request }: any) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q') as string;
  const contacts = await getContacts(q);
  return { contacts };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
