import { useEffect, useState } from "react";
import { useUsers } from "../context/UsersContext";

const Home = () => {
  const { users, loading, error } = useUsers();

  if (loading) {
    return (
      <h1 className="text-center text-2xl font-bold text-[darkcyan]">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-center text-2xl font-bold text-red-400">{error}</h1>
    );
  }

  const [filteredUsers, setFilteredUsers] = useState(users);

  const [searchTerm, setSearchTerm] = useState("");

  console.log({ users, loading, error });

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search users..."
          className="w-full text-center border border-[darkcyan] rounded p-2 focus:outline-none mb-6"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers && filteredUsers.length ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="cursor-pointer border border-[darkcyan] rounded p-4 shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h2 className="text-center text-xl font-bold mb-2">
                {user.username}
              </h2>
              <h2 className="text-[darkcyan] mb-1">
                <span className="font-bold">Full Name: </span>
                {user.name}
              </h2>
              <p className="text-[darkcyan] mb-1">
                <span className="font-bold">Email: </span>
                {user.email}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-[darkcyan] col-span-1 md:col-span-2 lg:col-span-3">
            No users to show
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
