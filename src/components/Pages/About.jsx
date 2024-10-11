import React from "react";

function About() {
  return (
    <div className="bg-white flex flex-col items-center justify-center gap-4 w-full h-[660px] text-wrap text-black font-bold px-20">
      <h1 className="text-4xl font-bold text-orange-500">About Swiftask</h1>
      <p className="text-lg w-6/12">
        Swiftask is a simple Kanban board application that allows users to
        create, update, and delete tasks. This project was built as part of the
        Ironhack Web-Development Course. The project is built using React and
        Tailwindcss.
      </p>
      <h1 className="text-4xl font-bold text-orange-500">Lorem</h1>
      <p className="text-lg w-6/12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        libero mauris, aliquet vitae venenatis at, mattis vitae nulla. Nullam
        erat mi, sagittis aliquam imperdiet non, bibendum ut turpis. Etiam
        lobortis mauris odio, vitae blandit eros sollicitudin id. Maecenas
        tincidunt massa eu metus congue, vel aliquet nisl auctor. Nullam nec
        mauris id ex auctor blandit id id leo. Donec porttitor, tellus eu
        pharetra varius, orci est pellentesque mi, sed sollicitudin tortor dui
        rutrum nibh.
      </p>
    </div>
  );
}

export default About;
