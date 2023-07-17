import { useAuth } from "../hooks/useAuth";
import { useIfNotAuthenticated } from "../hooks/useIfNotAuthenticated";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  const user = useAuth();
  //check to see if user logged in
  const RedirectMessage = useIfNotAuthenticated();
  //if not logged in
  if (RedirectMessage) {
    return RedirectMessage;
  }

  return (
    <div>
      {/* <div>This is profile of {user.displayName}</div> */}
      <h1 className="heading">Profile</h1>
      <UserProfile />

    </div>



  );
}
