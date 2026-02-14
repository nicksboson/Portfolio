import ShowcaseCard from "./ShowcaseCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import projects from "../../data/projects";

export default function ShowcaseGrid() {
    const gridRef = useScrollAnimation();

    return (
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
            {projects.map((item, index) => (
                <ShowcaseCard
                    key={index}
                    title={item.title}
                    category={item.category}
                    image={item.image}
                    bgColor={item.bgColor}
                    href={`/work/${item.slug}`}
                />
            ))}
        </div>
    );
}
