import { useEffect, useState } from "react";
import fetchAllPeople from "./utils/people";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("JAMES");
        const data = await fetchAllPeople();
        console.log(data);
        setPeople(data);
      } catch (error) {
        console.error("Failed to fetch people:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <p>
              <strong>First Name:</strong> {person.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {person.lastName}
            </p>
            <p>
              <strong>Age:</strong> {person.age}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
