export function setStrikeStyle(id) {
  switch (id) {
    case 0:
      return "horizontal top";
    case 1:
      return "horizontal middle";
    case 2:
      return "horizontal bottom";
    case 3:
      return "vertical left";
    case 4:
      return "vertical middle";
    case 5:
      return "vertical right";
    case 6:
      return "diagonal left";
    case 7:
      return "diagonal right";
    default:
      return null;
  }
}
