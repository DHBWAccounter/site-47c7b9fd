import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ServicesHero } from "@/components/services-hero";
import { ServiceDetail } from "@/components/service-detail";
import { ServicesCTA } from "@/components/services-cta";

export const metadata = {
  title: "Our Services | White Tree Systems",
  description:
    "Comprehensive SAP consulting services including implementation, optimization, managed services, and training. Solutions crafted for enterprises across Middle-earth.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "s4hana",
      title: "SAP S/4HANA Implementation",
      description:
        "The transition to S/4HANA represents the most significant transformation in enterprise systems since the founding of the White City. Our implementation methodology combines deep technical expertise with strategic business acumen, ensuring your organization realizes the full potential of real-time analytics and streamlined processes.",
      approach: `We begin with a comprehensive assessment of your current landscape, identifying opportunities for process improvement and technical optimization. Our Stewards of Strategy work alongside your leadership to define success metrics and establish governance frameworks that will guide the transformation.

Implementation proceeds through carefully orchestrated phases, with continuous validation against business objectives. We do not simply install software — we forge a new operational foundation for your enterprise.`,
      engagement: "12-24 months depending on organizational complexity and scope of transformation.",
      icon: "layers",
    },
    {
      id: "optimization",
      title: "Business Process Optimization",
      description:
        "Even the mightiest kingdom can fall to inefficiency. Our process optimization services identify bottlenecks, redundancies, and opportunities within your existing SAP environment, breathing new life into systems that have grown stagnant.",
      focusAreas: [
        {
          title: "Financial Close Optimization",
          description:
            "Reduce your close cycle from weeks to days, with the precision of the archives of Minas Tirith",
        },
        {
          title: "Supply Chain Excellence",
          description:
            "Create visibility and responsiveness across your entire value chain",
        },
        {
          title: "Human Capital Management",
          description:
            "Streamline workforce processes from recruitment through retirement",
        },
        {
          title: "Procurement Transformation",
          description:
            "Achieve savings of 15-40% through strategic sourcing and process automation",
        },
      ],
      experience:
        "Our consultants bring an average of 15 years of experience, having served organizations ranging from regional trading companies to the largest sovereign treasuries in Middle-earth.",
      icon: "optimize",
    },
    {
      id: "managed-services",
      title: "Managed Services & Support",
      description:
        "Like the garrison that stands eternal watch upon the walls, our managed services team provides continuous support for your SAP environment. We offer flexible engagement models from 8x5 to 24x7 coverage, ensuring assistance is available whenever your organization requires it.",
      tiers: [
        {
          name: "Steward Level",
          description:
            "Comprehensive application management including incident resolution, minor enhancements, and proactive monitoring. Ideal for organizations seeking to focus internal resources on strategic initiatives.",
        },
        {
          name: "Ranger Level",
          description:
            "Enhanced support with dedicated resources, accelerated response times, and quarterly optimization reviews. Named for those who watch over the borders, ensuring no issue goes undetected.",
        },
        {
          name: "Captain of the Guard Level",
          description:
            "Our premium tier includes all services plus a dedicated team embedded within your organization, providing both operational support and strategic guidance.",
        },
      ],
      knowledgeArchives:
        "All tiers include access to our Knowledge Archives — a repository of solutions refined across thousands of engagements.",
      icon: "support",
    },
    {
      id: "training",
      title: "Training & Knowledge Transfer",
      description:
        "A kingdom is only as strong as its people. Our training programs ensure your team masters the systems they depend upon, transforming end users into power users and power users into internal experts.",
      modalities: [
        {
          title: "Academy Sessions",
          description:
            "Structured classroom training at our facilities in Minas Tirith or at your location",
        },
        {
          title: "Virtual Instruction",
          description:
            "Live remote training for distributed teams across multiple realms",
        },
        {
          title: "Self-Paced Learning",
          description: "On-demand courses through our digital learning portal",
        },
        {
          title: "Hands-On Workshops",
          description:
            "Practical exercises using your actual configuration in a sandbox environment",
        },
      ],
      certification:
        "We develop custom curricula for each engagement, ensuring content relevance and maximum knowledge retention. Graduates receive certification recognized across the SAP professional community.",
      icon: "training",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        {services.map((service, index) => (
          <ServiceDetail key={service.id} service={service} index={index} />
        ))}
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
