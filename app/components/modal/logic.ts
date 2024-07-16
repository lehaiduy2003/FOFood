export const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  id: string,
  formData: Object,
  onClose: () => void
) => {
  e.preventDefault();
  try {
    // Send data to your API
    const response = await fetch(`/api/order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result); // Handle success response
    onClose(); // Close the modal on success
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
