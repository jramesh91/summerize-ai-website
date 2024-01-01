import { React, useState } from "react";
import { Input, Button } from "@material-tailwind/react";

function UninstallFeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { feedback, email };

    console.log(formData);

    console.log(formData);
    const response = await fetch("/api/submitFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Feedback submitted");
      // Reset the form or navigate the user to a thank you page
    } else {
      console.error("Failed to submit feedback");
      // Inform the user that the submission failed
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center p-4 min-h-screen bg-gradient-to-r from-purple-400 to-yellow-500 via-pink-400"
    >
      <div className="bg-white p-12 rounded-lg shadow-2xl max-w-lg mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
          We are sorry to see you go 😔
        </h2>
        <div className="text-left">
          <p className="text-base text-lg font-semibold mb-6 text-gray-600">
            Before you leave, we hope you've had the chance to explore all the
            amazing features our app can do for you.
          </p>

          <div className="mb-6">
            <Input
              type="text"
              color="lightGray"
              size="lg"
              outline={true}
              placeholder="Please share where you feel unsatisfied"
              className="text-lg"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <p className="text-base text-lg font-semibold mb-6 text-gray-600">
            Leave your email to hear from us
          </p>

          <div className="mb-10">
            <Input
              type="email"
              color="lightGray"
              size="lg"
              outline={true}
              placeholder="Your email"
              className="text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            color="lightBlue"
            buttonType="filled"
            size="lg"
            block={false}
            iconOnly={false}
            ripple="light"
            className="text-lg py-3"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default UninstallFeedbackForm;
