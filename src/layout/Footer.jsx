import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/Manjit-Kumar-Mahato",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/manjit-mahato-a92578338/",
        label: "LinkedIn",
    },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#profiles", label: "Coding Profiles" },
    { href: "#journey", label: "Developer Journey" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <a
                            href="#"
                            className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
                        >
                            MKM<span className="text-primary">.</span>
                        </a>

                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} Manjit Kumar Mahato. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="mt-8 pt-8 border-t border-border/50 text-center">
                    <p className="text-sm text-muted-foreground">
                        Built with React, Tailwind CSS and ❤️ by Manjit Kumar Mahato
                    </p>
                </div>
            </div>
        </footer>
    );
};