import InputForm from "@/app/components/onboarding/InputForm";
import SetUpPayment from "@/app/components/onboarding/sign-up/SetUpPayment";

const PaymentPage = () => {
  return (
    <div className="flex justify-center">
      <InputForm
        id="container"
        width="w-full"
        action="/id/business-register/information"
      >
        <SetUpPayment />
      </InputForm>
    </div>
  );
};

export default PaymentPage;
