import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import AuthShell from "../components/AuthShell.jsx";
import AuthField from "../components/AuthField.jsx";
import loginAnim from "../lottie/Login.json";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (ev) => {
    ev.preventDefault();
    const e = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Enter your password";
    setErrors(e);
    if (Object.keys(e).length) return;
    // TODO: connect to the BENWINK login API here (POST form).
  };

  return (
    <AuthShell anim={loginAnim} eyebrow="Secure login" title="Welcome back" subtitle="Log in to manage your stakes."
      footer={<>New here? <Link to="/register">Create an account</Link></>}>
      <form className="au__form" onSubmit={submit} noValidate>
        <AuthField label="Email" type="email" icon={<FiMail />} value={form.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" error={errors.email} />
        <AuthField label="Password" type="password" icon={<FiLock />} value={form.password} onChange={set("password")} placeholder="Your password" autoComplete="current-password" error={errors.password} />
        <Link to="/forgot-password" className="au__forgot">Forgot password?</Link>
        <button className="bw-btn bw-btn--dark" type="submit">Login</button>
      </form>
    </AuthShell>
  );
}
