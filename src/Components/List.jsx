import { people } from "../data";
import { getImageUrl } from "../utils";

export default function List() {
  const listItems = people.map((person) => (
    <li
      key={person.id}
      style={{ display: "flex", width: "350px", margin: "20px" }}
    >
      <img
        className="avatar"
        src={getImageUrl(person)}
        style={{ borderRadius: "50%" }}
      />
      <p style={{ marginLeft: "20px" }}>
        <b>{person.name}:</b>
        <br />
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article
      style={{
        backgroundColor: "white",
        color: "black",
        width: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
