import { GoogleLogin } from "@react-oauth/google";
const MediaSignIn = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Error");
      }}
    />
  );
};

export default MediaSignIn;
