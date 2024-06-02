import React from "react";

export default ({ form, field }) => (
  <input
    className="mb-3"
    name={field.name}
    type="file"
    accept="image/*"
    onChange={e => form.setFieldValue(field.name, e.target.files[0])}
  />
);
