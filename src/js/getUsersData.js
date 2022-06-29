import axios from "axios";
async function getUsersData() {
  let usersData;
  await axios
    .get("https://62bbd125eff39ad5ee157b99.mockapi.io/gamers")
    .then((res) => {
      usersData = res.data;
    });
  return usersData;
}
export default getUsersData;
