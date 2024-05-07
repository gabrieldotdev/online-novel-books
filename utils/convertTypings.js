export const convertTypings = (type) => {
  switch (type) {
    case "vote":
      return "Lượt bình chọn";
    case "view":
      return "Lượt xem";
    case "like":
      return "Lượt thích";
    case "comment":
      return "Lượt bình luận";
    case "new":
      return "Mới nhất";
    case "test":
      return "Test";
    default:
      return "Type not found";
  }
};
