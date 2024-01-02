import { React, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { DialogOverlay } from "../components/DialogOverlay";

function UninstallFeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
        records: [
            {
                fields: {
                    Feedback: feedback,
                    Email: email,
                },
            },
        ],
    };

    try {
        const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_TABLE_NAME}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
            body: JSON.stringify(formData),
        });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        setDialogMessage("Thank you, your feedback has been submitted!"); // Set the thank you message
        setShowDialog(true); // Show the dialog
        setFeedback(""); // Reset feedback
        setEmail(""); 
      } else {
        console.error('Failed to submit feedback');
        setDialogMessage("Failed to submit feedback, please try again."); // Set error message
        setShowDialog(true); // Show the dialog
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setDialogMessage("An error occurred, please try again."); // Set error message
      setShowDialog(true); // Show the dialog
    }
  };
  return (
    
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center p-4 min-h-screen bg-gradient-to-r from-purple-400 to-yellow-500 via-pink-400"
    >
        {/* ... existing form code ... */}
        {showDialog && <DialogOverlay onClose={() => setShowDialog(false)} message={dialogMessage} />}
        
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
              placeholder="Please tell us how we can improve"
              className="text-lg"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </div>

          <p className="text-base text-lg font-semibold mb-6 text-gray-600">
            We hope to stay in touch and share updates
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
