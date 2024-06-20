import { CredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
const MediaLogin = () => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const responseMessage = (res: CredentialResponse) => {
        console.log(res);
    };
    const errorMessage = () => {
        console.log("Error");
    };
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </GoogleOAuthProvider>,
        </>
    )
}

export default MediaLogin