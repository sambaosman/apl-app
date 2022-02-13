import { Form } from "./models";
import { DataStore } from "aws-amplify";

export const updateForm = async (
  editedPlayer,
  firstName,
  lastName,
  email,
  getForms,
  setForms
) => {
  try {
    const original = await DataStore.query(Form, editedPlayer);
    const update = await DataStore.save(
      Form.copyOf(original, (updated) => {
        updated.firstName = firstName;
        updated.lastName = lastName;
        updated.email = email;
      })
    );
    getForms(setForms);
  } catch (err) {
    console.log(err);
  }
};

export const submitForm = async (firstName, lastName, email, setForms) => {
  const form = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  const newForm = await DataStore.save(new Form(form));
  getForms(setForms);
};

export const getForms = async (setForms) => {
  const models = await DataStore.query(Form);
  setForms(models);
};

export const deleteForm = async (form, setForms) => {
  const toDelete = await DataStore.query(Form, form.id);
  await DataStore.delete(toDelete);
  getForms(setForms);
};
