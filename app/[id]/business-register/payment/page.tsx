import SignInForm from "@/app/components/onboarding/SignInForm";
import SetUpPayment from "@/app/components/onboarding/sign-up/SetUpPayment";

const PaymentPage = () => {
  return (
    <div className="flex justify-center">
      <SignInForm
        id="container"
        width="w-full"
        action="/id/business-register/information"
      >
        <SetUpPayment />
      </SignInForm>
    </div>
  );
};

export default PaymentPage;
