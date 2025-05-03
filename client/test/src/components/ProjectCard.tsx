import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, link }) => {
    const tiltRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, {
                max: 10,
                speed: 50,
                glare: true,
                "max-glare": 0.9,
                transition: false,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                inverted: true
            })
        }
    }, [])

  return (
    <Link to={link}>
      <div ref={tiltRef} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
