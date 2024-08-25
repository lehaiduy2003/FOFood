import SignInForm from "@/app/components/onboarding/SignInForm";
import SignUp from "@/app/components/onboarding/sign-up/SetUpInfor";

const InformationPage = () => {
  return (
    <div className="flex justify-center">
      <SignInForm
        id="container"
        width="w-full"
        action="/id/business-register/information"
      >
        <SignUp />
      </SignInForm>
    </div>
  );
};

export default InformationPage;
