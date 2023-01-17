import { Form } from 'react-router-dom';

interface Props {
  contact: ContactType;
}

export function Favorite({ contact }: Props): JSX.Element {
  const { favorite } = contact;

  return (
    <Form method="post">
      <button
        type="submit"
        name="favorite"
        value={favorite ? 'false' : 'true'}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  );
}
