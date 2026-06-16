import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "REST APIs",
  "MySQL",
  "Data Structures",
  "Algorithms",
  "PostgreSQL",
  "Spring MVC",
  "Thymeleaf",
  "JDBC",
  "Servlets",
  "JSP",
  "Maven",
  "Git",
  "GitHub",
  "JUnit",
  "Tomcat",
  "AWS",
  "OOP",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

const highlightedSkills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "Spring Data JPA",
    "REST APIs",
    "MySQL",
    "Data Structures",
    "Algorithms",
];


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Green Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Java Developer • Spring Boot • DSA Enthusiast
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Building <span className="text-primary glow-text">scalable</span>
                                <br />
                                backend solutions
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    with clean code.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Manjit Kumar Mahato, a Java Developer specializing in
                                Spring Boot and Scalable Backend Applications. I enjoy solving
                                Data Structure and Algorithmic problems and building real-world
                                projects that deliver meaningful user experiences.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <AnimatedBorderButton>
                                <Download className="w-5 h-5" />
                                Download CV
                            </AnimatedBorderButton>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                { icon: FaGithub, href: "https://github.com/Manjit-Kumar-Mahato" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/manjit-mahato-a92578338/" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                    </div>


                    {/* Right Column - Profile Image */}
                    <div className="relatice animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0 
                                rounded-2xl bg-gradient-to-br 
                                from-primary/30 via-transparent 
                                to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Pedro Machado"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />

                                {/* Floating Badge */}
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">
                                            Available for work
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute -top-8 -left-8 glass rounded-2xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-primary">Java Developer</div>
                                    <div className="text-xs text-muted-foreground">
                                        Spring Boot • DSA
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-8 text-center uppercase tracking-wider">
                        Technologies I work with
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                        {skills.map((skill, idx) => (
                            <div
                                key={idx}
                                className={`
  glass
  px-4 py-2
  rounded-2xl
  text-sm md:text-base
  font-medium
  transition-all duration-300
  hover:-translate-y-1
  hover:shadow-[0_0_25px_rgba(32,178,166,0.15)]

  ${highlightedSkills.includes(skill)
                                        ? "text-primary border border-primary/30 glow-border"
                                        : "text-muted-foreground hover:text-foreground"
                                    }
`}
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};  