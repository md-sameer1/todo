import NoDataAnimation from "@/components/no-data-animation";
import TodoList from "@/components/todo-list";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const Placeholder = styled.div`
  background-color: #f0f0f0;
  width: 98vw;
  height: 97vh;
`;

const Background = styled.div`
  background-image: url("/image.jpg");
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
  width: 98vw;
  height: 97vh;
  padding: "0px";
  margintop: "0px";
`;

const Todo = () => {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [listIndex, setListIndex] = useState(-1);
  const [imageLoaded, setImageLoaded] = useState(false);

  console.log("task", task);
  console.log("list", list);

  const handleAddTask = () => {
    if (task?.length === 0) {
      alert("Please add a task");
      return;
    }
    if (listIndex > -1) {
      const newList = [...list];

      newList.splice(listIndex, 1, task);

      setList(newList);
      setTask("");
      setListIndex(-1);
    } else {
      setList([...list, task]);
      setTask("");
    }
  };

  const handleEditList = (idx: number) => {
    const data: any = list?.find((d: any, index: any) => idx === index);
    console.log("data", data);
    setListIndex(idx);
    setTask(data?.toString());
  };

  const handleDeleteList = (idx: number) => {
    let dummyList = [...list];
    console.log("dummy list", dummyList);

    dummyList.splice(idx, 1);
    setList(dummyList);
  };

  console.log("lisittt", list);

  useEffect(() => {
    const img = new Image();
    img.src = "/image.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <Background>
      {imageLoaded ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            bottom: 0,
          }}>
          <Typography
            variant="h2"
            component={"h2"}
            gutterBottom
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              textAlign: "center",
              background: "linear-gradient(45deg, #2196F3 10%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            }}>
            {"My Todo's"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
              height: "50%",
              mb: 5,
            }}>
            <TextField
              inputProps={{ style: { textTransform: "capitalize" } }}
              sx={{ bgcolor: "white", borderRadius: 1 }}
              fullWidth
              label={"Enter the Task"}
              name="task"
              onChange={(e) => {
                setTask(e?.target.value);
              }}
              value={task}
            />

            <Button sx={{ ml: 1 }} onClick={handleAddTask} variant="contained">
              {"Add"}
            </Button>
          </Box>

          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "60%",
              height: "50%",
              flexDirection: "column",
            }}>
            {list?.length > 0 ? (
              <TodoList
                list={list}
                handleDeleteList={(index: number) => {
                  console.log("index", index);

                  handleDeleteList(index);
                }}
                handleEditList={(index: number) => {
                  handleEditList(index);
                }}
              />
            ) : (
              <Box sx={{ mb: 2 }}>
                <NoDataAnimation
                  text={
                    <Typography variant="h6" textAlign="center" sx={{ mt: 2 }}>
                      {"No Tasks!"}
                    </Typography>
                  }
                />
              </Box>
            )}
          </Card>
        </Box>
      ) : (
        <Placeholder />
      )}
    </Background>
  );
};

export default Todo;
