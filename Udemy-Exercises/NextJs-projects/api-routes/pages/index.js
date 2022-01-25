import { useRef } from "react";

function HomePage() {
  let emailInputRef = useRef();
  let feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    if (enteredEmail.length > 3 && enteredFeedback.length > 0) {
      const reqBody = {
        email: enteredEmail,
        text: enteredFeedback,
      };

      fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));

        emailInputRef.current.value = "";
        feedbackInputRef.current.value = "";
    } else {
      console.log("Please fill in the empty fields...")
    }
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address: </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback: </label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
