import * as Yup from "yup";

export const samplePageData = [
  {
    text: "lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerStepData = [
  { tittle: "personal", detail: "Add personal details" },
  { tittle: "Address", detail: "Add additional info" },
  { tittle: "Message", detail: "Add message(optional)" },
  { tittle: "Done", detail: "Complete.. !" },
];