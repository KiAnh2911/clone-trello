// board detail
import Container from "@mui/material/Container";
import AppBar from "@src/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

const BoardDetail = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default BoardDetail;
