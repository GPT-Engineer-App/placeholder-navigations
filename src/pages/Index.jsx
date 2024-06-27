import React from "react";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <header className="bg-blue-500 text-white text-center p-4">Header</header>
      <div className="flex flex-1">
        <main className="bg-blue-700 text-white flex-1 p-4">Content</main>
        <aside className="bg-blue-600 text-white w-1/4 p-4">Sider</aside>
      </div>
      <footer className="bg-blue-500 text-white text-center p-4">Footer</footer>
    </div>
  );
};

export default Index;