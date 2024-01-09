export default async function UpdateCategory(data: string) {
  await fetch("https://mock-api.arikmpt.com/api/category/update", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + localStorage.getItem("token"),
    },
    body: data,
  });
}
