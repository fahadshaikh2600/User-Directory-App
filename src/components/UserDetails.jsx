import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserDetail() {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.list.find((u) => u.id === parseInt(id))
  );

  if (!user) return <p>User not found. Please go back.</p>;

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Age: {user.age}</p>
      <p>
        Address: {user.address?.address}, {user.address?.city}
      </p>
      <Link to="/">← Back</Link>
    </div>
  );
}
