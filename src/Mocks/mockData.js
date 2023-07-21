const singleStudentpreference = {
  email: "student1@assignment.com",
  weeklyPreferences: [
    {
      day: "Monday",
      schedule: [
        { time: "8:00", preference: "0" },
        { time: "9:00", preference: "1" },
        { time: "10:00", preference: "3" },
        { time: "11:00", preference: "4" },
        { time: "12:00", preference: "1" },
        { time: "01:00", preference: "2" },
        { time: "02:00", preference: "3" },
        { time: "03:00", preference: "4" }
      ]
    },
    {
      day: "Tuesday",
      schedule: [
        { time: "8:00", preference: "0" },
        { time: "9:00", preference: "1" },
        { time: "10:00", preference: "3" },
        { time: "11:00", preference: "5" },
        { time: "12:00", preference: "1" },
        { time: "01:00", preference: "2" },
        { time: "02:00", preference: "3" },
        { time: "03:00", preference: "4" }
      ]
    },
    {
      day: "Wednesday",
      schedule: [
        { time: "8:00", preference: "0" },
        { time: "9:00", preference: "1" },
        { time: "10:00", preference: "3" },
        { time: "11:00", preference: "4" },
        { time: "12:00", preference: "5" },
        { time: "01:00", preference: "2" },
        { time: "02:00", preference: "3" },
        { time: "03:00", preference: "4" }
      ]
    },
    {
      day: "Thursday",
      schedule: [
        { time: "8:00", preference: "0" },
        { time: "9:00", preference: "1" },
        { time: "10:00", preference: "3" },
        { time: "11:00", preference: "4" },
        { time: "12:00", preference: "5" },
        { time: "01:00", preference: "2" },
        { time: "02:00", preference: "3" },
        { time: "03:00", preference: "4" }
      ]
    },
    {
      day: "Friday",
      schedule: [
        { time: "8:00", preference: "0" },
        { time: "9:00", preference: "1" },
        { time: "10:00", preference: "3" },
        { time: "11:00", preference: "4" },
        { time: "12:00", preference: "5" },
        { time: "01:00", preference: "2" },
        { time: "02:00", preference: "3" },
        { time: "03:00", preference: "4" }
      ]
    }
  ]
};
const slots = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "1:00",
  "2:00",
  "3:00"
];

const preferenceDescription = {
  "0": "0-Prohibited",
  "1": "1-Strongly Discouraged",
  "2": "2-Discouraged",
  "3": "3-Neutral",
  "4": "4-Preferred",
  "5": "5-Strongly Preferred"
};
const studentsData = [
  { email: "student1@assignment.com", name: "student1", role: "STUDENT" },
  { email: "student2@assignment.com", name: "student21", role: "STUDENT" }
];
export { singleStudentpreference, slots, preferenceDescription, studentsData };
