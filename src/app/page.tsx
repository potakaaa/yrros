"use client";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";
import Image from "next/image";

const words =
  "i know it was hard, but it was hard for me too. you may think na gina pasagdan ra tika, but i strongly disagree. i was constantly worried, to the point that not having your realtime location would make me anxious, and it was always like that, on days that we are like this. you may also think na wala ra saako and i can go on my day like normal, but no. i’d say that men are just better in hiding emotions. i was suffering too, not being able to hold you on your lowest times, the fear of losing you, the fear of not having the future like we talked and planned to. it also came to me that i feel pity for myself, for always begging on times like these, that im always the one hanging on the rope, and its always on me. however, i then realized how much i don’t want to lose you, how much i don’t want to leave and break the promises that we made too. i’m here now, sorry for taking too long, sorry for the things that made you mad. i only hope that you heal from the despairs and suffering that you’re experiencing right now. i’ll be here.";

const page = () => {
  const [isPressed, setIsPressed] = React.useState(false);
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      <Button
        variant={"default"}
        onClick={() => {
          setIsPressed(true);
        }}
        className={`${isPressed ? "hidden" : "block"} transition duration-300`}
      >
        Start App
      </Button>
      {isPressed && (
        <div className="border-card border shadow-md p-4 py-7 rounded-xl flex flex-col space-y-2 items-center justify-center">
          <h1 className="text-left text-xl font-bold">IM SORRY</h1>
          <TextGenerateEffect words={words} className="font-medium" />
          <Image
            src="https://media2.giphy.com/media/9JnRMIFMYAKpaHRXRF/giphy.gif?cid=6c09b9523lhabfgokvysq8k0qgncj62yhxhqjfosv5tz53ep&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="heart"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default page;
