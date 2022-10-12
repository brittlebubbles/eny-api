import * as yup from "yup";

const incidentSchema = yup.object({
  client_id: yup.number().required(),
  incident_desc: yup.string().required(),
  city: yup.string().required(),
  country: yup.string().required(),
});

export default incidentSchema;
