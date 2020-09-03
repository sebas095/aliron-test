function getName(matches) {
  switch (matches) {
    case 16:
      return "Dieciseisavos De Final";
    case 8:
      return "Octavos De Final";
    case 4:
      return "Cuartos De Final";
    case 2:
      return "Semifinal";
    case 1:
      return "Final";
    default:
      return "";
  }
}

module.exports = { getName };
