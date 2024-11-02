import {
  Box,
  Card,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface TodoListProps {
  list: any[];
  handleDeleteList: (index: number) => void;
  handleEditList: (index: number) => void;
}

const TodoList = (props: TodoListProps) => {
  const { list, handleDeleteList, handleEditList } = props;

  console.log("list inside", list);

  return (
    <Card
      sx={{
        width: "100%",
        maxHeight: "450px",
        overflow: "hidden",
      }}>
      <Table sx={{ width: "100%", tableLayout: "fixed" }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">{"S.No."}</TableCell>
            <TableCell align="left" sx={{ width: "65%" }}>
              {"Task"}
            </TableCell>
            <TableCell align="center" sx={{ width: "15%" }}>
              {"Actions"}
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>

      <Box
        sx={{
          maxHeight: "400px", // Height for the scroll area
          overflowY: "auto",
        }}>
        <Table
          sx={{
            width: "100%",
            tableLayout: "fixed",
          }}>
          <TableBody>
            {list?.map((d: any, index: number) => (
              <TableRow key={index}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left" sx={{ width: "70%" }}>
                  <Typography
                    variant="body2"
                    sx={{ textTransform: "capitalize" }}>
                    {d}
                  </Typography>
                </TableCell>
                <TableCell align="center" sx={{ width: "10%" }}>
                  <Box sx={{ display: "flex" }}>
                    <IconButton onClick={() => handleEditList(index)}>
                      <SvgIcon>
                        <EditIcon />
                      </SvgIcon>
                    </IconButton>
                    <IconButton onClick={() => handleDeleteList(index)}>
                      <SvgIcon>
                        <DeleteIcon />
                      </SvgIcon>
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};

export default TodoList;
