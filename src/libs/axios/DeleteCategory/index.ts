export default async function DeleteCategory(data: string) {
  await fetch("https://mock-api.arikmpt.com/api/category/" + data, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer" + localStorage.getItem("token"),
    },
  });
}
