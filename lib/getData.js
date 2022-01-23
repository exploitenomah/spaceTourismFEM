
const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://space-tourism-fem.vercel.app";

  export function getData(request, context) {
  const res = fetch(`${server}/data/data.json`)
    .then((res) => res.json())
    .then((data) => {
      return data[request];
    });
  if (!res) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return res;
}
