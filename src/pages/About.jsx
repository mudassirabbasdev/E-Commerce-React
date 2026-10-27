
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AnimatedText from '../components/common/AnimatedText'
import aboutHero from '../assets/img/about-hero.jpg'
import teamBg from '../assets/img/team-bg.jpg'
import qualityCard from '../assets/img/quality-card.jpg'
import pricingCard from '../assets/img/pricing-card.jpg'
import careCard from '../assets/img/care-card.jpg'
import SpecularButton from '../components/animations/SpecularButton'
import FlipCard from '../components/animations/FlipCard'

const stats = [
  { value: '10K+', label: 'Happy customers' },
  { value: '500+', label: 'Products' },
  { value: '50+', label: 'Brands' },
  { value: '24/7', label: 'Support' },
]

const values = [
  { img: qualityCard, title: 'Quality First', text: 'Every product is checked before it reaches you.', more: 'We inspect each item, work only with trusted brands and remove anything that does not meet our standard.' },
  { img: pricingCard, title: 'Fair Pricing', text: 'Honest prices with no hidden fees.', more: 'What you see is what you pay. No surprise shipping charges and no inflated "before" prices.' },
  { img: careCard, title: 'Customer Care', text: 'A friendly team ready to help whenever you need.', more: 'Real people answer within hours, every day. Returns are free for 30 days.' },
]

const story = [
  { year: '2019', title: 'The idea', text: 'Verdora began as a small online shop with a handful of products.' },
  { year: '2021', title: 'Growing fast', text: 'We passed 5,000 orders and opened a dedicated support team.' },
  { year: '2023', title: 'Nationwide delivery', text: 'Faster shipping partners now bring orders to every major city.' },
  { year: 'Today', title: '10K+ customers', text: 'Hundreds of products, trusted brands and a community that keeps growing.' },
]

const team = [
  { name: 'Ayesha Khan', role: 'Founder & CEO', initials: 'AK', photo: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Bilal Ahmed', role: 'Head of Operations', initials: 'BA', photo: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Sara Malik', role: 'Customer Experience', initials: 'SM', photo: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Hamza Ali', role: 'Product Curator', initials: 'HA', photo: 'https://randomuser.me/api/portraits/men/75.jpg' },
]

const About = () => {
  const navigate = useNavigate()
  return (
    <div className="space-y-10">

      {/* Hero (same style as the Home hero) */}
      <section
        className="relative isolate -mt-32 ml-[calc(50%-50vw)] flex min-h-screen w-screen items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-center"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="w-full px-6 pt-28 pb-16 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc4ad]">
            About us
          </p>

          <AnimatedText
            as="h1"
            text="We make online shopping simple"
            className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white"
            delay={0.2}
          />

          <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">
            Verdora started with one idea: great products should be easy to find,
            fairly priced and delivered fast. Today we serve thousands of customers
            and keep improving every day.
          </p>

          <div className="mt-10 flex items-center justify-center gap-5">
          <SpecularButton
            size="md"
            radius={14}
            tint="#000000"
            tintOpacity={0.85}
            textColor="#60cfaa"
            lineColor="#60cfaa"
            baseColor="#4a8f78"
            onClick={() => navigate('/shop')}
          >
            Shop Now
          </SpecularButton>
          <SpecularButton
            size="md"
            radius={14}
            tint="#000000"
            tintOpacity={0.85}
            textColor="#60cfaa"
            lineColor="#60cfaa"
            baseColor="#4a8f78"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </SpecularButton>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 text-center shadow-sm transition hover:border-[#4a8f78] hover:shadow-md"
          >
            <p className="text-3xl font-bold text-[#4a8f78]">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-[#163d33]/70">
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* Values */}
      <section>
        <AnimatedText
          as="h2"
          text="What we stand for"
          className="anim-underline text-center text-2xl font-bold tracking-tight text-[#163d33]"
        />

        <p className="mt-2 text-center text-sm text-[#163d33]/70">Click or drag a card to flip it</p>
        <div className="mt-8 grid justify-items-center gap-8 md:grid-cols-3">
          {values.map((v) => (
            <FlipCard
              key={v.title}
              width={300}
              height={220}
              background="#163d33"
              color="#f8f7f2"
              shadowColor="#102c25"
              shadowOpacity={0.3}
              ariaLabel={`${v.title} - flip card`}
              front={
                <div className="relative h-full">
                  <img src={v.img} alt="" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/10" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                    <h3 className="text-xl font-bold text-[#8fc4ad]">{v.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{v.text}</p>
                  </div>
                </div>
              }
              back={
                <div className="flex h-full items-center justify-center bg-[#f8f7f2] p-6 text-center text-sm leading-6 text-[#163d33]">
                  {v.more}
                </div>
              }
            />
          ))}
        </div>
      </section>

      {/* Our story (timeline) */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#4a8f78]">
            Our journey
          </p>
          <AnimatedText
            as="h2"
            text="Our Story"
            className="anim-underline mt-3 text-3xl font-extrabold tracking-tight text-[#163d33]"
          />
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {story.map((item) => (
            <div
              key={item.year}
              className="relative rounded-xl border border-[#4a8f78]/20 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#4a8f78]/10 px-3 py-1 text-xs font-bold text-[#4a8f78]">
                {item.year}
              </span>
              <h3 className="mt-4 font-semibold text-[#163d33]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#163d33]/70">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        className="relative isolate overflow-hidden rounded-2xl bg-cover bg-center px-6 py-12 sm:px-10"
        style={{ backgroundImage: `url(${teamBg})` }}
      >
        <div className="absolute inset-0 -z-10 bg-[#0b2a22]/75" />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#8fc4ad]">
            The people behind Verdora
          </p>
          <AnimatedText
            as="h2"
            text="Meet Our Team"
            className="anim-underline mt-3 text-3xl font-extrabold tracking-tight text-white"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-[#8fc4ad]/40 bg-[#f8f7f2] p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#4a8f78] hover:shadow-lg"
            >
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-[#163d33] text-xl font-bold text-[#8fc4ad]">
                {m.initials}
                <img src={m.photo} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 font-semibold text-[#163d33]">{m.name}</h3>
              <p className="mt-1 text-xs text-[#4a8f78]">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="rounded-2xl bg-[#163d33] px-6 py-12 text-center text-[#f8f7f2]">
        <h2 className="text-2xl font-bold">
          Ready to start shopping?
        </h2>

        <Link
          to="/shop"
          className="mt-6 inline-block rounded-lg bg-[#8fc4ad] px-8 py-3 text-sm font-semibold text-[#102c25] transition hover:bg-[#f8f7f2] hover:text-[#163d33]"
        >
          Browse products
        </Link>
      </section>

    </div>
  )
}

export default About
