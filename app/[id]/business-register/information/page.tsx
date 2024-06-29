import InputForm from "@/app/components/onboarding/InputForm";
import SignUp from "@/app/components/onboarding/sign-up/SetUpInfor";

const InformationPage = () => {
  return (
    <div className="flex justify-center">
      <InputForm
        id="container"
        width="w-full"
        action="/id/business-register/information"
      >
        <SignUp />
      </InputForm>
    </div>
  );
};

export default InformationPage;
