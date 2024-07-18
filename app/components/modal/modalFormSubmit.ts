import { Base64 } from "js-base64";

export const handleSubmit = async (
  id: string,
  formData: Object,
  e: React.FormEvent<HTMLFormElement>,
  onClose: () => void
) => {
  try {
    e.preventDefault();
    // Send data to your API
    const response = await fetch(`http://localhost:3000/api/order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey: Base64.encode("Basic " + process.env.NEXT_PUBLIC_API_KEY),
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result); // Handle success response
    onClose();
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
