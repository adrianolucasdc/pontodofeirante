import React from "react";

export default ({ form, field }) => (
  <input
    className="mb-3"
    name="imgproduto"
    id="imgproduto"
    type="file"
    accept="image/*"
    onChange={e => form.setFieldValue("imgproduto", e.target.files[0])}
  />
);
