"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Star,
  GitFork,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      "js",
      "ts",
      "wasm",
      "solidity",
      "php",
      "cpp",
      "java",
      "python",
      "go",
      "rust",
    ],
  },
  {
    category: "Frontend",
    skills: ["react", "nextjs", "vite", "remix", "tailwind", "materialui"],
  },
  {
    category: "Backend",
    skills: ["nestjs", "express", "nodejs", "laravel", "flutter", "jest"],
  },
  {
    category: "Database",
    skills: ["mongodb", "mysql", "postgres", "sqlite", "firebase"],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "docker",
      "kubernetes",
      "jenkins",
      "aws",
      "azure",
      "googlecloud",
      "terraform",
      "nginx",
    ],
  },
  {
    category: "Version Control & CI/CD",
    skills: ["git", "github"],
  },
  {
    category: "Blockchain",
    skills: [
      "ethereum",
      "bitcoin",
      "the-graph",
      "solana",
      "matic",
      "trx",
      "bnb",
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: ["tensorflow", "pytorch", "anaconda"],
  },
  {
    category: "Tools & IDEs",
    skills: ["vscode", "postman"],
  },
  {
    category: "Design",
    skills: ["blender", "figma", "ai", "ps", "xd"],
  },
  {
    category: "Other",
    skills: ["kafka", "redis", "rabbitmq"],
  },
];

export function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Section */}
        <div className="text-center bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="relative w-32 h-32 mx-auto mb-4">
            <Image
              src="https://avatars.githubusercontent.com/u/44573643?v=4" // Replace with your GitHub profile picture URL
              alt="Profile Picture"
              width={128}
              height={128}
              className="rounded-full border-4 border-blue-500"
            />
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
          </div>
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Nawab Khairuzzaman Mohammad Kibria
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Full Stack Developer | Blockchain Specialist | Mobile App Developer
            | AI Enthusiast
          </p>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <span className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              Rangpur, Bangladesh - 5400
            </span>
            <span className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-1" />
              +880 1700792973
            </span>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="mailto:nawabkhairuzzaman@gmail.com">
              {" "}
              {/* Updated to include mailto link */}
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href={"https://linkedin.com/in/nawab-kibria"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Linkedin className="h-5 w-5 text-blue-600" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href={"https://github.com/nawab69"}>
              <Button
                variant="outline"
                size="icon"
                className="bg-white hover:bg-gray-100"
              >
                <Github className="h-5 w-5 text-gray-800" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* About Me Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">About Me</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-4">
              Highly skilled and experienced Full Stack developer with a passion
              for building innovative web and mobile applications. With
              expertise in both front-end and back-end development, I excel in
              creating seamless user experiences across various platforms.
            </p>
            <p className="text-gray-700 mb-4">
              As a seasoned React Native app developer, I have a proven track
              record of designing and developing high-performance mobile apps
              that meet the needs of diverse stakeholders. My proficiency in
              JavaScript, along with my experience with the React Native
              framework, enables me to craft intuitive and visually appealing
              interfaces.
            </p>
            <p className="text-gray-700">
              {`In addition, I possess a deep understanding of blockchain
              technology and its applications. With expertise in developing
              smart contracts and decentralized applications (dApps), I can help
              businesses harness the power of blockchain to drive efficiency,
              security, and transparency in their operations. I'm also
              enthusiastic about AI and machine learning, constantly exploring
              new ways to integrate these technologies into innovative
              solutions.`}
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Skills</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-semibold text-lg mb-2">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-center bg-gray-100 rounded-lg p-2 hover:bg-gray-200 transition-colors w-12 h-12"
                    >
                      {category.category === "Blockchain" ? (
                        <Image
                          src={`/icons/${skill}.svg`} // Use custom icons for blockchain skills
                          alt={`${skill} icon`}
                          width={32}
                          height={32}
                        />
                      ) : (
                        <Image
                          src={`https://skillicons.dev/icons?i=${skill}`}
                          alt={`${skill} icon`}
                          width={32}
                          height={32}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Education</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  Computer Science and Engineering
                </h3>
                <p className="text-gray-600">
                  Begum Rokeya University, Rangpur
                </p>
              </div>
              <p className="text-gray-600">2020 - Present</p>
            </div>
          </CardContent>
        </Card>

        {/* Awards Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">Awards</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div>
              <h3 className="font-semibold text-lg">
                Blockchain Olympiad Bangladesh 2022
              </h3>
              <p className="text-gray-600">
                Project: dEDU - A Decentralized Education System
              </p>
              <p className="text-gray-600">EduTech Category Award</p>
            </div>
          </CardContent>
        </Card>

        {/* Work Experience Section */}
        <Card className="bg-white border shadow-lg">
          <CardHeader className="border-b border-gray-200">
            <CardTitle className="text-2xl text-blue-600">
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">
                  Blockchain Developer and Advisor (Team Lead)
                </h3>
                <p className="text-gray-600">2020 - Present</p>
              </div>
              <p className="font-medium">Multicone</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>GhaCoin: Fractional Ownership in Real Estate</li>
                <li>
                  Escrow Trade: A p2p escrow trading platform on multiple
                  blockchains
                </li>
                <li>
                  AlleleGroupPlant: An ERC998 Composable Unique Identity Asset
                  Marker Genomic NFT marketplace
                </li>
                <li>KnightBridge: A gamified Crypto Exchange</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Full-Stack Developer</h3>
                <p className="text-gray-600">2020 - Present</p>
              </div>
              <p className="font-medium">GcBuying</p>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                <li>Developed and maintained the GcBuying Website</li>
                <li>
                  Created and upgraded the GcBuying App, migrating from native
                  to React Native
                </li>
                <li>
                  Implemented scalability upgrades, moving to a
                  Microservice-based system
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:underline">
                    GcBuying Platform
                  </a>
                </CardTitle>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500"
                >
                  <path
                    d="M7.5 0.75L9.75 5.25L14.25 6L10.875 9.375L11.625 14.25L7.5 12L3.375 14.25L4.125 9.375L0.75 6L5.25 5.25L7.5 0.75Z"
                    fill="currentColor"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">
                  A comprehensive platform for gift card and cryptocurrency
                  trading.
                </p>
                <div className="flex items-center mt-4 text-xs text-gray-600">
                  <span className="flex items-center mr-4">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                    React Native
                  </span>
                  <span className="flex items-center mr-4">
                    <Star className="w-4 h-4 mr-1" />
                    24
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />8
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:underline">
                    Escrow Trade
                  </a>
                </CardTitle>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500"
                >
                  <path
                    d="M7.5 0.75L9.75 5.25L14.25 6L10.875 9.375L11.625 14.25L7.5 12L3.375 14.25L4.125 9.375L0.75 6L5.25 5.25L7.5 0.75Z"
                    fill="currentColor"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">
                  A p2p escrow trading platform supporting multiple blockchains.
                </p>
                <div className="flex items-center mt-4 text-xs text-gray-600">
                  <span className="flex items-center mr-4">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                    Solidity
                  </span>
                  <span className="flex items-center mr-4">
                    <Star className="w-4 h-4 mr-1" />
                    18
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />5
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-colors">
              <CardHeader className="flex flex-row  items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:underline">
                    GhaCoin
                  </a>
                </CardTitle>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500"
                >
                  <path
                    d="M7.5 0.75L9.75 5.25L14.25 6L10.875 9.375L11.625 14.25L7.5 12L3.375 14.25L4.125 9.375L0.75 6L5.25 5.25L7.5 0.75Z"
                    fill="currentColor"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">
                  Fractional Ownership in Real Estate using blockchain
                  technology.
                </p>
                <div className="flex items-center mt-4 text-xs text-gray-600">
                  <span className="flex items-center mr-4">
                    <span className="w-3 h-3 rounded-full bg-purple-500 mr-1"></span>
                    Blockchain
                  </span>
                  <span className="flex items-center mr-4">
                    <Star className="w-4 h-4 mr-1" />
                    32
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    12
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="bg-white border border-gray-200 hover:border-blue-500 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:underline">
                    dEDU
                  </a>
                </CardTitle>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500"
                >
                  <path
                    d="M7.5 0.75L9.75 5.25L14.25 6L10.875 9.375L11.625 14.25L7.5 12L3.375 14.25L4.125 9.375L0.75 6L5.25 5.25L7.5 0.75Z"
                    fill="currentColor"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-600">
                  A Decentralized Education System (Award-winning project)
                </p>
                <div className="flex items-center mt-4 text-xs text-gray-600">
                  <span className="flex items-center mr-4">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                    Blockchain
                  </span>
                  <span className="flex items-center mr-4">
                    <Star className="w-4 h-4 mr-1" />
                    28
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    10
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
