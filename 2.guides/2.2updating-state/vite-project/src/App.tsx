import { usePersonStore } from './store';

function App() {
  const firstName = usePersonStore((state) => state.firstName);
  const lastName = usePersonStore((state) => state.lastName);
  const updateFirstName = usePersonStore((state) => state.updateFirstName);
  const updateLastName = usePersonStore((state) => state.updateLastName);

  return (
    <main>
      <label>
        First name{' '}
        <input
          value={firstName}
          onChange={(e) => updateFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last name{' '}
        <input
          value={lastName}
          onChange={(e) => updateLastName(e.target.value)}
        />
      </label>
      <p>
        Hello,{' '}
        <strong>
          {firstName} {lastName}
        </strong>
      </p>
    </main>
  );
}

export default App;
