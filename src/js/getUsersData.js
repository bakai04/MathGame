async function getUsersData() {
  let usersData = await JSON.parse(localStorage.getItem("data"));
  if(!usersData) usersData=[];
  return usersData;
}
export default getUsersData;
