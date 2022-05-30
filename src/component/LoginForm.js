import React, { useState } from "react";
const initialForm = {
  userName: "",
  password: "",
};

const LoginForm = ({ sendForm, setIsLoading }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendForm(form);
    setIsLoading(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="userName" className="col-sm-2 col-form-label">
          UserName
        </label>
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            name="userName"
            onChange={handleChange}
            value={form.userName}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-12">
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
