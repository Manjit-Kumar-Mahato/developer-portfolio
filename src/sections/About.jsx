import { BookOpen, Brain, Code2, Lightbulb, Rocket, Server, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable and scalable software that stands the test of time.",
    },
    {
        icon: Brain,
        title: "Problem Solving",
        description:
            "Leveraging DSA principles to build efficient and optimized solutions.",
    },
    {
        icon: Server,
        title: "System Design",
        description:
            "Creating reliable backend architectures with performance and scalability in mind.",
    },
    {
        icon: BookOpen,
        title: "Growth Mindset",
        description:
            "Continuously learning and adapting to emerging technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                WHO I AM
                            </span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                            Building reliable
                            <span className="text-primary"> backend systems</span>,
                            <span className="font-serif italic font-normal text-white">
                                one solution at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a passionate Java Developer and DSA enthusiast who enjoys solving
                                complex problems and building scalable backend applications. My journey
                                into software development began with curiosity about how systems work
                                behind the scenes, and it has evolved into a strong foundation in Java
                                and modern backend technologies.
                            </p>

                            <p>
                                I specialize in Java, Spring Boot, Spring Data JPA, Hibernate, and
                                RESTful API development. I enjoy designing efficient solutions,
                                optimizing application performance, and writing clean, maintainable code
                                that delivers real-world value.
                            </p>

                            <p>
                                Beyond backend development, I actively practice Data Structures and
                                Algorithms to strengthen my problem-solving abilities. I'm constantly
                                exploring new technologies, building projects, and improving my skills
                                to become a better software engineer every day.
                            </p>
                        </div>

                        <div className="glass p-8 rounded-3xl">
                            <p className="text-xl italic font-medium">
                                "My mission is to build scalable and efficient software solutions
                                while continuously growing as an engineer through learning,
                                problem-solving, and real-world development."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Hilights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="
                                    group
                                    glass
                                    p-6
                                    rounded-2xl
                                    animate-fade-in
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:-translate-y-3
                                    hover:scale-[1.02]
                                    hover:shadow-[0_0_35px_rgba(32,178,166,0.15)]
                                    hover:border-primary/30
                                    "
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div
                                    className="
                                        w-12 h-12 rounded-xl bg-primary/10
                                        flex items-center justify-center mb-4
                                        transition-all duration-300
                                        group-hover:bg-primary/20
                                        group-hover:scale-110
                                        group-hover:rotate-6
                                    "
                                >
                                    <item.icon
                                        className="
            w-6 h-6 text-primary
            transition-all duration-300
            group-hover:scale-110
        "
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
};