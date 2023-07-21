import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { getStudents } from "../services/services";
import Typography from "@mui/material/Typography";

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchStudents();
  }, []);
  const fetchStudents = async () => {
    let studentsList = await getStudents();
    setStudents(studentsList);
  };
  const onClickHandler = (email) => {
    navigate(`/view/${email}/admin`);
  };
  let [students, setStudents] = useState([]);
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textDecoration: "underline" }}
      >
        Students List
      </Typography>
      {students.map((item) => {
        return (
          <List key={item.name}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={item.name}
                  onClick={() => onClickHandler(item.email)}
                />
              </ListItemButton>
            </ListItem>
          </List>
        );
      })}
    </>
  );
};
export default Admin;
