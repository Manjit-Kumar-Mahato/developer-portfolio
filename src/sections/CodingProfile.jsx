export const CodingProfile = () => {
  const profiles = [
    {
      platform: "LeetCode",
      rating: "1800+",
      solved: "300+ Problems Solved",
      description:
        "Strong foundation in Data Structures & Algorithms, Dynamic Programming, Graphs, Trees, and Advanced Problem Solving.",
      link: "https://leetcode.com/u/Manjit-Kumar-Mahato/",
    },
    {
      platform: "Codeforces",
      rating: "1600+",
      solved: "50+ Problems Solved",
      description:
        "Regular contest participation focused on implementation, greedy algorithms, binary search, and problem solving.",
      link: "https://codeforces.com/profile/Manjit_Kumar_Mahato",
    },
    {
      platform: "CodeChef",
      rating: "1500+",
      solved: "40+ Problems Solved",
      description:
        "Strengthened algorithmic thinking through rated contests and competitive programming challenges.",
      link: "https://www.codechef.com/users/manjit_kumar",
    },
  ];

  return (
    <section id="profiles" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Coding Profiles
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Competitive Programming{" "}
            <span className="font-serif italic font-normal text-primary">
              Journey.
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            A showcase of my competitive programming achievements,
            problem-solving skills, and performance across coding platforms.
          </p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                glass rounded-2xl p-6 border border-primary/20
                hover:border-primary/50
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_rgba(32,178,170,0.25)]
                transition-all duration-300
                group
              "
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {profile.platform}
              </h3>

              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Rating:</span>{" "}
                  {profile.rating}
                </p>

                <p>
                  <span className="font-semibold">Solved:</span>{" "}
                  {profile.solved}
                </p>

                <p className="text-muted-foreground text-sm">
                  {profile.description}
                </p>

                <div className="pt-4 text-primary font-medium group-hover:translate-x-1 transition-transform">
                  View Profile →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};