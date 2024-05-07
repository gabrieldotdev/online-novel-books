export const convertTypings = (type) => {
  switch (type) {
    case "access":
      return "Lượt truy cập";
    case "newly-released":
      return "Mới được phát hành";
    case "number-of-words":
      return "Số từ";
    case "nominations":
      return "Đề cử";
    case "test":
      return "Test";
    default:
      return "Type not found";
  }
};
