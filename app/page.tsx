import Image from "next/image";
export default function EmperusWebsite() {
  const features = [
    {
      title: "Applied AI Systems",
      text: "We design practical AI systems that help businesses automate operations, improve decisions, and scale intelligently.",
    },
    {
      title: "Machine Learning Solutions",
      text: "From predictive models to custom workflows, we build machine learning products that solve real-world problems.",
    },
    {
      title: "Automation That Works",
      text: "We focus on useful automation that reduces manual effort and turns complexity into clear action.",
    },
  ];

  const services = [
    "AI strategy and consulting",
    "Custom machine learning product development",
    "Workflow automation and intelligent systems",
    "Prototype to production deployment",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <nav className="mb-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 shadow-lg shadow-cyan-400/20">
              <Image
              src="/logo1.png"
              alt="Emperus logo"
              width={180}
              height={180}
              className="h-auto w-auto max-h-32 object-contain"
              priority
            />
              </div>
              <div>
                <div className="text-lg font-semibold tracking-[0.25em]">EMPERUS</div>
                <div className="text-xs text-white/50">Where Machines Learn to Handle the World</div>
              </div>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                Where Machines Learn to Handle the World
              </div>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Intelligent systems built for business impact.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Emperus builds AI-powered solutions that help organizations automate complex work,
                unlock better decisions, and create scalable digital operations.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-black shadow-xl transition hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8">
                  <div className="mx-auto flex h-72 max-w-md items-center justify-center rounded-[1.5rem] border border-cyan-400/10 bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_45%)]">
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 shadow-lg shadow-cyan-400/20">
                        <Image
                          src="/logo1.png"
                          alt="Emperus logo"
                          width={180}
                          height={180}
                          className="h-24 w-24 rounded-full object-cover"
                        />
                      </div>
                      <div className="text-3xl font-semibold tracking-[0.3em]">EMPERUS</div>
                      <div className="mt-3 text-sm text-white/55">
                       Where Machines Learn to Handle the World
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">About Emperus</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Building the next generation of machine intelligence.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
              Emperus exists to turn advanced machine learning into systems that organizations can actually use.
              We bridge strategy, engineering, and automation to create technology that is powerful, reliable,
              and grounded in practical outcomes.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-semibold">AI</div>
              <p className="mt-2 text-white/65">Designed for real workflows, not just demos.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-semibold">ML</div>
              <p className="mt-2 text-white/65">Built to learn, adapt, and deliver measurable value.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">What We Do</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Services built around execution.</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-cyan-300/20"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Capabilities</p>
              <h3 className="mt-3 text-2xl font-semibold">From idea to deployment.</h3>
            </div>
            <div className="grid gap-3 text-white/75">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="rounded-[2rem] border border-cyan-400/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(168,85,247,0.08),rgba(255,255,255,0.04))] p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-200">Why Emperus</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Technology with strategic direction.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                We combine product thinking, machine learning expertise, and business execution to help
                companies move from experimentation to meaningful adoption.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">Clear strategy and execution roadmap</div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">Modern AI architecture and workflow design</div>
              <div className="rounded-3xl border border-white/10 bg-black/25 p-5">Solutions tailored to business reality</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/80">Contact</p>
              <h2 className="text-3xl font-semibold md:text-4xl">Let’s build intelligent systems that matter.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Ready to explore how Emperus can help your organization adopt AI and automation with confidence?
                Reach out to start the conversation.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-sm text-white/70 shadow-lg">
              <div className="font-medium text-white">Emperus</div>
              <div className="mt-2">emperus.co</div>
              <div className="mt-1">hello@emperus.co</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
