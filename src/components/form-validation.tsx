/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { formSchema } from "../schemas";
import Select from "react-select";
import FormData from "../types"
import hobbiesOptions from "../utils/libs/hobby.ts"




function FormValidation() {
  const initialValues: FormData = {
    userName: "",
    password: "",
    gender: "",
    hobbies: [],
    interests: [],
    radio: "",
    file:null
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
      alert('Form submitted')
    },
  });

  const handleHobbiesChange = (selectedOptions: any) => {
    setFieldValue("hobbies", selectedOptions);
  };

   const toggleCheckbox = (interest: string) => {
     const updatedInterests = values.interests.includes(interest)
       ? values.interests.filter((item) => item !== interest)
       : [...values.interests, interest];
     setFieldValue("interests", updatedInterests);
   };

  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFieldValue("file", event.currentTarget.files[0]);
    }
  };


  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">UserName</label>
        <div className="flex flex-col gap-1 relative">
          {errors.userName && touched.userName && (
            <p className="text-red-600 text-xs bottom-7">{errors.userName}</p>
          )}
          <input
            type="text"
            value={values.userName}
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-black"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Password</label>
        <div className="flex flex-col gap-1 relative">
          {errors.password && touched.password && (
            <p className="text-red-600 text-xs bottom-7">{errors.password}</p>
          )}
          <input
            type="password"
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-black"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Gender</label>
        <div className="flex flex-col gap-1 relative">
          {errors.gender && touched.gender && (
            <p className="text-red-600 text-xs bottom-7">{errors.gender}</p>
          )}
          <select
            value={values.gender}
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border border-black"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Hobbies</label>
        <div className="flex flex-col gap-1 relative">
          {errors.hobbies && touched.hobbies && (
            <p className="text-red-600 text-xs bottom-7">
              Hobbies are required
            </p>
          )}
          <Select
            isMulti
            value={values.hobbies}
            name="hobbies"
            options={hobbiesOptions}
            onChange={handleHobbiesChange}
            onBlur={handleBlur}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Interests:</label>
        <div className="flex flex-col gap-1">
          {errors.interests && touched.interests && (
            <p className="text-red-600 text-xs">
              Please select at least one interest.
            </p>
          )}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label>Coding</label>
              <input
                type="checkbox"
                name="coding"
                checked={values.interests.includes("coding")}
                onChange={() => toggleCheckbox("coding")}
                onBlur={handleBlur}
                className="border border-black"
              />
            </div>

            <div className="flex items-center gap-2">
              <label>Dancing</label>
              <input
                type="checkbox"
                name="dancing"
                checked={values.interests.includes("dancing")}
                onChange={() => toggleCheckbox("dancing")}
                onBlur={handleBlur}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Radio</label>
        <div className="flex flex-col gap-1">
          {errors.radio && touched.radio && (
            <p className="text-red-600 text-xs">Please select an option.</p>
          )}
          <div className="flex items-center gap-3">
            <input
              type="radio"
              name="radio"
              value="option1"
              checked={values.radio === "option1"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Option 1</label>
            <input
              type="radio"
              name="radio"
              value="option2"
              checked={values.radio === "option2"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Option 2</label>
            <input
              type="radio"
              name="radio"
              value="option3"
              checked={values.radio === "option3"}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label>Option 3</label>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <label className="text-base font-medium w-[80px]">Image</label>
        <div className="flex flex-col gap-1 relative">
          {errors.file && touched.file && (
            <p className="text-red-600 text-xs bottom-7">{errors.file}</p>
          )}
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            onBlur={handleBlur}
            className="border border-black"
          />
        </div>
      </div>

      <button type="submit" className="bg-black w-full text-white py-2">
        Submit
      </button>
    </form>
  );
}

export default FormValidation;
