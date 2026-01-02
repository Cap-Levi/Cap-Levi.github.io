"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      {/* Animated background grid effect */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(16, 185, 129, 0.1) 25%, rgba(16, 185, 129, 0.1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.1) 75%, rgba(16, 185, 129, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.1) 25%, rgba(16, 185, 129, 0.1) 26%, transparent 27%, transparent 74%, rgba(16, 185, 129, 0.1) 75%, rgba(16, 185, 129, 0.1) 76%, transparent 77%, transparent)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <nav className="relative z-4 border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-accent transition-colors"
          >
            {"> leviii"}
          </Link>
          <Link
            href="/writeups"
            className="px-6 py-2 rounded bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-semibold"
          >
            Writeups
          </Link>
        </div>
      </nav>

      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 ${
          isLoaded ? "fade-in" : "opacity-0"
        }`}
      >
        {/* Hero Section */}
        <section className="mb-24 md:mb-32">
          <div className="space-y-6">
            <div className="text-green-400 font-mono text-sm mb-4 opacity-75">
              $ whoami
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Leviii
            </h1>
            <p className="text-2xl text-accent font-semibold mb-2">
              Cybersecurity Graduate | Blue Team | DFIR
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl">
              I specialise in incident response, digital forensics, and threat
              detection. My focus is on understanding attacker behaviour through
              comprehensive log analysis and defensive security strategies.
            </p>
          </div>
        </section>

        {/* Specialisations */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Specialisation
          </h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Digital Forensics",
                desc: "Evidence collection, analysis, and preservation",
              },
              {
                title: "Incident Response",
                desc: "Rapid detection and containment of security incidents",
              },
              {
                title: "SIEM Operations",
                desc: "Log aggregation, correlation, and threat hunting",
              },
              {
                title: "Blue Team",
                desc: "Defensive security and threat mitigation strategies",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 card-content"
              >
                <h3 className="font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-foreground/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Skills & Tools
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Forensics Tools",
                items: [
                  "Autopsy & The Sleuth Kit",
                  "WinDbg & Volatility",
                  "FTK Imager",
                  "Eric Zimmerman Tools",
                ],
              },
              {
                title: "SIEM & Logs",
                items: [
                  "Splunk & ELK Stack",
                  "Windows Event Logs",
                  "Sysmon & ETW",
                  "Log Analysis",
                ],
              },
              {
                title: "Analysis Tools",
                items: [
                  "Wireshark & tcpdump",
                  "Ghidra & IDA Pro",
                  "Sysinternals Suite",
                  "Process Hacker",
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 card-content"
              >
                <h3 className="font-bold text-accent mb-3">{section.title}</h3>
                <ul className="space-y-1 text-foreground/80 text-sm">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* HackTheBox Status */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">
            HackTheBox Sherlocks
          </h2>
          <div className="p-6 md:p-8 rounded-lg bg-card border-2 border-primary/30 backdrop-blur-sm card-content">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-accent">49 / 128</span>
              <span className="text-foreground/60">Challenges Completed</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-500"
                style={{ width: "37.5%" }}
              />
            </div>
            <p className="text-foreground/70 mt-4">
              Focused exclusively on Sherlock challenges for real-world DFIR
              training
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">Track Record</h2>
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "Sherlocks Solved", value: "49" },
              { label: "Write-ups", value: "1" },
              { label: "Tools Mastered", value: "15+" },
              { label: "Years Experience", value: "3+" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 rounded-lg bg-card border border-border text-center hover:bg-card/80 transition-all duration-300 card-content"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">Experience</h2>
          <div className="space-y-6">
            {[
              {
                title: "Cybersecurity Graduate",
                org: "Dedicated Professional Development",
                desc: "Specialised coursework in incident response, forensics, and defensive security operations",
              },
              {
                title: "HackTheBox Practitioner",
                org: "Hands-on Training",
                desc: "Completed 49+ real-world DFIR scenarios through Sherlock challenge series",
              },
              {
                title: "Threat Analysis & Hunting",
                org: "Blue Team Operations",
                desc: "Proficient in log analysis, threat detection, and incident investigation",
              },
            ].map((exp, idx) => (
              <div
                key={idx}
                className="p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 card-content"
              >
                <h3 className="font-bold text-accent mb-1">{exp.title}</h3>
                <p className="text-sm text-foreground/60 mb-2">{exp.org}</p>
                <p className="text-foreground/80">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About/Interests */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-3xl font-bold text-primary mb-8">About</h2>
          <div className="p-6 md:p-8 rounded-lg bg-card border border-border/50 card-content">
            <p className="text-foreground/80 leading-relaxed mb-4">
              With a strong foundation in cybersecurity fundamentals, I'm
              passionate about solving complex security challenges. My approach
              combines methodical analysis with practical hands-on experience in
              digital forensics and incident response.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I'm continuously learning and evolving my skills through platforms
              like HackTheBox, contributing detailed write-ups that help the
              security community understand real-world attack scenarios and
              defensive strategies.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24 md:mb-32 text-center">
          <Link
            href="/writeups"
            className="inline-flex px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105"
          >
            View Writeups →
          </Link>
        </section>

        {/* Contact Links */}
        <section className="border-t border-border pt-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:fazeelazam56@gmail.com"
              className="px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/fazeelazam56/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://app.hackthebox.com/users/1691773"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              HackTheBox
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
