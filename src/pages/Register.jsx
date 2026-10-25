import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FiUser, FiUsers, FiMail, FiLock, FiPhone, FiHash } from "react-icons/fi";
import AuthShell from "../components/AuthShell.jsx";
import AuthField from "../components/AuthField.jsx";
import loginAnim from "../lottie/Login.json";

export default function Register() {
  const [params] = useSearchParams();
  const [form, setForm] = useState({
    username: "", fullName: "", email: "", password: "", phone: "",
    sponsorId: params.get("ref") || params.get("sponsor") || "",
  });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.username.trim()) e.username = "Enter a user name";
    if (!form.fullName.trim()) e.fullName = "Enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (form.password.length < 6) e.password = "Use at least 6 characters";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone)) e.phone = "Enter a valid number";
    if (!form.sponsorId.trim()) e.sponsorId = "Enter your sponsor ID";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    // TODO: connect to the BENWINK registration API here (POST form).
    setDone(true);
  };

  if (done) {
    return (
      <AuthShell title="Account request received" subtitle={`Welcome to BENWINK, ${form.fullName}.`}
        footer={<>Ready to sign in? <Link to="/login">Login</Link></>}>
        <p className="au__ok">Your registration details have been submitted. You can now login with your registered email and password.</p>
      </AuthShell>
    );
  }

  return (
    <AuthShell anim={loginAnim} eyebrow="Secure sign-up" title="Create your account" subtitle="Register to start staking SOL, BNB or ZMAX."
      footer={<>Already registered? <Link to="/login">Login</Link></>}>
      <form className="au__form" onSubmit={submit} noValidate>
        <div className="au__row">
          <AuthField label="User name" icon={<FiUser />} value={form.username} onChange={set("username")} placeholder="Choose a user name" autoComplete="username" error={errors.username} />
          <AuthField label="Full name" icon={<FiUsers />} value={form.fullName} onChange={set("fullName")} placeholder="Your full name" autoComplete="name" error={errors.fullName} />
        </div>
        <AuthField label="Email" type="email" icon={<FiMail />} value={form.email} onChange={set("email")} placeholder="you@example.com" autoComplete="email" error={errors.email} />
        <div className="au__row">
          <AuthField label="Password" type="password" icon={<FiLock />} value={form.password} onChange={set("password")} placeholder="Create a password" autoComplete="new-password" error={errors.password} />
          <AuthField label="Number" type="tel" icon={<FiPhone />} value={form.phone} onChange={set("phone")} placeholder="Mobile number" autoComplete="tel" error={errors.phone} />
        </div>
        <AuthField label="Sponsor ID" icon={<FiHash />} value={form.sponsorId} onChange={set("sponsorId")} placeholder="Who invited you?" error={errors.sponsorId} />
        <button className="bw-btn bw-btn--dark" type="submit">Register</button>
      </form>
    </AuthShell>
  );
}
