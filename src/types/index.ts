  type FormData = {
  userName: string;
  password: string;
  gender: string;
  hobbies: { value: string }[];
  interests: string[];
  radio: string;
  file:string | null
};

export default FormData
