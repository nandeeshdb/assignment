import * as Yup from "yup";

export const formSchema = Yup.object({
  userName: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be at most 30 characters")
    .required("Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(30, "Password must be at most 30 characters")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"),

  hobbies: Yup.array()
    .min(1, "Please select at least one hobby")
    .max(10, "You can select at most two hobbies")
    .required("Hobbies is required"),

  interests: Yup.array()
    .min(1, "Please select at least one hobby")
    .max(2, "You can select at most two hobbies")
    .required("Interests is required"),
  radio: Yup.string().required("Radio is required"),
  file: Yup.mixed()
    .test(
      "fileSize",
      "Image file is too large",
      function (this: Yup.TestContext) {
        const { originalValue } = this;
        if (originalValue !== undefined && originalValue !== null) {
          return (originalValue as Blob).size <= 1024 * 1024;
        }
        return true;
      }
    )
    .test("fileType", "Only PDF or DOC files are supported", function (value) {
      if (value !== undefined && value !== null) {
        const file = value as File;
        const supportedFormats = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return supportedFormats.includes(file.type);
      }
      return true;
    }),
});
