import Card from "../card/Card";

const Portfolio = () => {
  return (
    <div id="Projects" className="mt-20">
      <h1 className="text-3xl lg:text-4xl w-32 lg:w-40 mx-auto font-extrabold border-b-4  border-green-500 text-center pb-4">Project</h1>
      <div className="p-4 m-4 lg:p-8 lg:m-8 flex flex-col lg:flex-row gap-6 lg:gap-8 lg:flex-wrap justify-center items-center">
        {/* card tofolist */}
        <Card url="https://app-todolist-mugni.vercel.app/" name="TaskMate" title="A Simple and Intuitive To-Do List for Daily Productivity" img="/src/assets/todo-rresponsive.png" />
        {/* app chill movie */}
        <Card url="https://app-todolist-mugni.vercel.app/" name="Chill Movie" title="Chill Movie: Relaxed & Modern UI Design for Movie Discovery" img="/src/assets/chill-responsive.png" />
        {/* dashboard chill movie */}
        <Card url="https://my-project-pi-beige.vercel.app/" name="Admin Dashboard Chill Movie" title="Chill Movie Admin Dashboard: Streamlined Management for Movie Curation" img="/src/assets/admin.png" />
      </div>
    </div>
  );
};

export default Portfolio;
