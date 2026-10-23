import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import AuthShell from "../components/AuthShell.jsx";
import AuthField from "../components/AuthField.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (ev) => {
    ev.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email");
    setError("");
    // TODO: connect to the BENWINK password-reset API here.
    setSent(true);
  };

  return (
    <AuthShell title="Forgot password?" subtitle="Enter your registered email and we will help you reset it."
      footer={<>Remembered it? <Link to="/login">Back to login</Link></>}>
      {sent ? (
        <p className="au__ok">If {email} is registered with BENWINK, a password reset link will be sent to it.</p>
      ) : (
        <form className="au__form" onSubmit={submit} noValidate>
          <AuthField label="Email" type="email" icon={<FiMail />} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" error={error} />
          <button className="bw-btn bw-btn--dark" type="submit">Send reset link</button>
        </form>
      )}
    </AuthShell>
  );
}
