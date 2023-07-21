const baseURl =
  "https://ab61-2405-201-c035-d0c0-a4e5-2fd1-5c45-160f.ngrok-free.app";
const GET_PREF = (email) => {
  return `${baseURl}/preference/view/${email}`;
};
const CREATE_PREF = () => {
  return `${baseURl}/preference/create`;
};
const UPDATE_PREF = () => {
  return `${baseURl}/preference/update`;
};
const GET_STUDENTS = `${baseURl}/admin/view/student`;
export { GET_PREF, GET_STUDENTS, CREATE_PREF, UPDATE_PREF };
