import React from "react";
import ContentLayout from "./ContentLayout";

export default function Clint() {
  return (
    <ContentLayout>
       <section>
        <p className="text-green-400 text-3xl font-medium">Clint Jabagat</p>
        <div className="flex items-center my-1">
          <p className="btn btn-xs ">Position</p>
          <p className=" btn btn-xs ml-2 font-semibold">General Manager</p>
        </div>
        <div className="grid my-2">
          <p className="font-bold border-b-4 text-lg">Summary:</p>
          <p className="max-w-xl mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Nisi architecto libero dignissimos,
            iure expedita mollitia minus deserunt voluptas atque officia!
          </p>
        </div>
      </section>
    </ContentLayout>
  );
}
