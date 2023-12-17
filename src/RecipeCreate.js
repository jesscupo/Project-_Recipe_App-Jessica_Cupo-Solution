import React, { useState } from "react";

function RecipeCreate( {addRecipe}) {

  const initialFormState = {
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
      <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Name"
            required={true}
          />
        </td>
        <td> 
          <input
            id="cuisine"
            name="cuisine"
            onChange={handleChange}
            value={formData.cuisine}
            placeholder="Cuisine"
            required={true}
          />
        </td>
        <td> 
          <input
            id="photo"
            name="photo"
            onChange={handleChange}
            value={formData.photo}
            placeholder="Photo"
            required={true}
          />
        </td>
        <td> 
          <textarea
            id="ingredients"
            name="ingredients"
            onChange={handleChange}
            value={formData.ingredients}
            placeholder="Ingredients"
            required={true}
          />
        </td>
        <td> 
          <textarea
            id="preparation"
            name="preparation"
            onChange={handleChange}
            value={formData.preparation}
            placeholder="Preparation"
            required={true}
          />
        </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
