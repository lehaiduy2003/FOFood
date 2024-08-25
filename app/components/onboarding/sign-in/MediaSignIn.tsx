import { SignIn } from "./submitForm";
const MediaSignIn = () => {
  return (
    <form action={SignIn}>
      <button type="submit">Signin with Google</button>
    </form>
  );
};

export default MediaSignIn;
