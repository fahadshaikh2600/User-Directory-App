import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsers, setError } from "../redux/Slice";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const { list, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/users");
        dispatch(setUsers(res.data.users));
      } catch (err) {
        dispatch(setError("Failed to fetch users."));
      } finally {
        setLoading(false);
      }
    };

    if (list.length === 0) fetchUsers();
  }, [dispatch, list.length]);

  const filteredUsers = list.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>User Directory</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
