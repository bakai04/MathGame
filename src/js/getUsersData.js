function getUsersData() {
  const usersData = JSON.parse(localStorage.getItem("data"));
  return  usersData ?? [];
}
export default getUsersData;
