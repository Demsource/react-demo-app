import { Link, useParams } from "react-router-dom";
import { useUsers } from "../context/UsersContext";

const Details = () => {
  const { users, loading, error } = useUsers();

  const { userId } = useParams();

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

  const user = users.find((user) => user.id === +userId);

  if (!user) {
    return (
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-red-400 text-2xl font-bold mb-6">
            No such user to display
          </h1>
          <Link to="/" className="font-bold text-[darkcyan]">
            Go Back To The Main Page
          </Link>
        </div>
      </div>
    );
  }

  const getNameInitials = (name) => {
    const names = name.split(" ");
    let initials = "";

    if (names[0]) initials += names[0][0];
    if (names[1]) initials += names[1][0];

    return initials || "N/A";
  };

  return (
    <div>
      <div>
        <Link to="/">⬅️ Back to home page</Link>
      </div>
      <div className="w-100 shadow-md rounded-2xl overflow-hidden mt-4">
        <div className="bg-gray-200 w-full h-25"></div>
        <div>
          <div className="flex justify-center items-center w-28 h-28 bg-white rounded-full -mt-14 ml-[50%] translate-x-[-50%]">
            <div className="flex justify-center items-center font-bold text-4xl text-white w-25 h-25 rounded-full bg-[darkcyan]">
              {getNameInitials(user.name)}
            </div>
          </div>
          <h2 className="font-bold text-xl text-black text-center mt-4">
            {user.name}
          </h2>
          <h2 className="text-[darkcyan] text-center mt-2">@{user.username}</h2>
        </div>
        <div className="border-t border-gray-200 mx-10 mt-4 p-4">
          <div>
            <p>
              <b>Email:</b>
            </p>
            <p>{user.email}</p>
          </div>
          <div className="mt-2">
            <p>
              <b>Phone:</b>
            </p>
            <p>{user.phone}</p>
          </div>
          <div className="mt-2">
            <p>
              <b>Website:</b>
            </p>
            <p>{user.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
