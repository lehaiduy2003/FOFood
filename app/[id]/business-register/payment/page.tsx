import InputForm from "@/app/components/InputForm";
import SetUpPayment from "@/app/components/SetUpPayment";

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
