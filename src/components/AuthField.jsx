import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthField({ label, icon, error, type = "text", ...rest }) {
  const [show, setShow] = useState(false);
  const isPass = type === "password";
  return (
    <label className={`au__field ${error ? "has-error" : ""}`}>
      <span>{label}</span>
      <div className="au__input">
        {icon}
        <input type={isPass && show ? "text" : type} {...rest} />
        {isPass && (
          <button type="button" onClick={() => setShow(!show)} aria-label={show ? "Hide password" : "Show password"}>
            {show ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>
      {error && <em className="au__err">{error}</em>}
    </label>
  );
}
