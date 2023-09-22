const port = 3000;


await Deno.writeTextFile("./hello.txt", "Hello Deno World!");
console.log("File written to ./hello.txt");



const text = await Deno.readTextFile("./hello.txt");
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);





const handler = (request: Request): Response => {
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
  const body = `Your user-agent is:\n\n${
    request.headers.get("user-agent") ?? "Unknown"
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:3000`);
Deno.serve({ port }, handler);