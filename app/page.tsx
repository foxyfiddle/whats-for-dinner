import React from "react";
import Button from "../component/Button";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
      <Button title="Button"/>
      <h1 className="text-4xl font-bold">Hello, world!</h1>
    </div>
  );
}
