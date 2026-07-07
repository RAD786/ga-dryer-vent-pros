export type ServicePageConfig = {
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  problemTitle: string;
  problemText: string;
  symptoms: string[];
  needTitle: string;
  needItems: string[];
  howItWorks: [string, string][];
  whyItMatters: string;
  relatedServices: { title: string; href: string }[];
  faqs: { question: string; answer: string }[];
  placeholder: string;
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  problemImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const baseRelated = [
  { title: "Dryer Vent Cleaning", href: "/dryer-vent-cleaning" },
  { title: "Service Areas", href: "/service-areas" }
];

export const servicePages: ServicePageConfig[] = [
  {
    slug: "dryer-vent-repair",
    title: "Dryer Vent Repair in Georgia",
    shortTitle: "Dryer Vent Repair",
    keyword: "dryer vent repair Georgia",
    metaTitle: "Dryer Vent Repair Georgia",
    metaDescription:
      "Request dryer vent repair in select Georgia communities. Connect with local providers for damaged ducts, loose connections, crushed venting, exterior vent issues, and airflow problems.",
    heroText:
      "Request help for damaged, disconnected, crushed, or poorly exhausting dryer vent components. Georgia Dryer Vent Pros connects homeowners and property owners with local dryer vent service providers where coverage is available.",
    problemTitle: "Dryer vent damage can restrict airflow",
    problemText:
      "A dryer vent may need repair when ducting is crushed behind the dryer, sections are loose, an exterior cap is damaged, or vent material no longer moves air properly. These issues can make the dryer run longer and may increase heat around the appliance.",
    symptoms: [
      "Dryer hose or ducting is visibly crushed or disconnected.",
      "The exterior vent cap is broken, stuck, missing, or loose.",
      "Lint collects around a damaged connection point.",
      "The dryer was moved and the vent no longer lines up correctly.",
      "Airflow seems weak even after lint has been cleaned nearby."
    ],
    needTitle: "When homeowners request dryer vent repair",
    needItems: [
      "After remodeling or moving laundry equipment.",
      "When flexible ducting is kinked behind the dryer.",
      "When an exterior wall cap or cover is damaged.",
      "When a visible vent connection keeps coming loose.",
      "When cleaning alone may not resolve the airflow concern."
    ],
    howItWorks: [
      ["Submit the issue", "Share your city, contact details, and what appears damaged or disconnected."],
      ["Request routing", "The service request is reviewed against current provider coverage and service area availability."],
      ["Provider follow-up", "A local provider may contact you to discuss repair scope, timing, access, and pricing."]
    ],
    whyItMatters:
      "Repairing damaged vent components can help restore a clearer exhaust path and reduce the strain created by crushed, disconnected, or obstructed venting.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Inspection", href: "/dryer-vent-inspection" },
      { title: "Dryer Vent Rerouting", href: "/dryer-vent-rerouting" }
    ],
    faqs: [
      {
        question: "Can a damaged dryer vent be repaired instead of replaced?",
        answer:
          "Sometimes. The local provider that follows up can review the visible damage, vent material, access, and safety concerns before confirming whether repair or replacement is appropriate."
      },
      {
        question: "Is crushed ducting behind the dryer a repair issue?",
        answer:
          "Yes. Crushed or kinked ducting can restrict airflow and may need to be adjusted, repaired, or replaced depending on the setup."
      },
      {
        question: "Do you perform dryer vent repairs directly?",
        answer:
          "Georgia Dryer Vent Pros is a connection service. Requests may be routed to an independent local dryer vent service provider where coverage is available."
      }
    ],
    placeholder: "Image placeholder - 16:9 dryer vent repair photo",
    heroImage: {
      src: "/images/dryer-vent-repair-hero.png",
      alt: "Dryer vent repair service for damaged or disconnected dryer vent components",
      width: 1672,
      height: 941
    },
    problemImage: {
      src: "/images/dryer-vent-repair-problem.png",
      alt: "Damaged dryer vent connection restricting airflow behind a dryer",
      width: 1672,
      height: 941
    }
  },
  {
    slug: "dryer-vent-installation",
    title: "Dryer Vent Installation in Georgia",
    shortTitle: "Dryer Vent Installation",
    keyword: "dryer vent installation Georgia",
    metaTitle: "Dryer Vent Installation Georgia",
    metaDescription:
      "Request dryer vent installation in select Georgia communities. Connect with local providers for new dryer vent runs, laundry room changes, replacement venting, and exterior terminations.",
    heroText:
      "Need a dryer vent installed for a new laundry setup, remodel, replacement run, or changed appliance location? Submit a service request to connect with local dryer vent service providers where coverage is available.",
    problemTitle: "A dryer needs a proper exhaust path",
    problemText:
      "Dryers should move hot, moist air outside through an appropriate vent path. Installation requests may involve a missing vent, outdated material, a changed laundry location, or a new exterior termination point.",
    symptoms: [
      "A new dryer location does not have a proper vent path.",
      "Existing vent material is outdated, damaged, or not suitable.",
      "A remodel changed where the dryer sits.",
      "The vent needs to terminate outside the home.",
      "A replacement dryer exposes an old or poorly fitting setup."
    ],
    needTitle: "When homeowners request dryer vent installation",
    needItems: [
      "During laundry room remodels or relocations.",
      "When replacing old or unsafe vent materials.",
      "When adding laundry to a finished basement, garage, or utility area.",
      "When a vent path needs a new exterior exit.",
      "When property owners need a clearer long-term vent setup."
    ],
    howItWorks: [
      ["Send the request", "Provide the city, property type, and basic laundry setup details."],
      ["Coverage check", "The request is matched to available local provider coverage and service scope."],
      ["Confirm details", "A provider may follow up to discuss access, vent path, materials, and scheduling."]
    ],
    whyItMatters:
      "A practical dryer vent installation can help the dryer exhaust moisture and heat more effectively, reducing avoidable airflow problems from the start.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Inspection", href: "/dryer-vent-inspection" },
      { title: "Dryer Vent Rerouting", href: "/dryer-vent-rerouting" }
    ],
    faqs: [
      {
        question: "Can I request installation for a new laundry room?",
        answer:
          "Yes. You can submit the request with your city and setup details. A local provider may follow up if installation service is available in that area."
      },
      {
        question: "Will the provider determine the best vent route?",
        answer:
          "The provider that follows up can review the property layout, access, and applicable service scope before confirming installation options."
      },
      {
        question: "Can installation requests include replacement venting?",
        answer:
          "Yes. Replacement vent runs and updated exterior termination requests can be submitted through the same form."
      }
    ],
    placeholder: "Image placeholder - 16:9 dryer vent installation photo",
    heroImage: {
      src: "/images/dryer-vent-installation-hero.png",
      alt: "Dryer vent installation service for a new laundry exhaust path",
      width: 1672,
      height: 941
    },
    problemImage: {
      src: "/images/dryer-vent-install.png",
      alt: "Dryer vent installation showing a proper dryer exhaust path",
      width: 1672,
      height: 941
    }
  },
  {
    slug: "dryer-vent-inspection",
    title: "Dryer Vent Inspection in Georgia",
    shortTitle: "Dryer Vent Inspection",
    keyword: "dryer vent inspection Georgia",
    metaTitle: "Dryer Vent Inspection Georgia",
    metaDescription:
      "Request a dryer vent inspection in select Georgia communities. Connect with local providers for airflow concerns, visible vent checks, exterior termination issues, and blockage symptoms.",
    heroText:
      "A dryer vent inspection request can help homeowners understand visible vent concerns, exterior termination issues, and common signs of restricted airflow before a larger problem develops.",
    problemTitle: "Small dryer vent issues can be easy to miss",
    problemText:
      "Some vent problems are visible, while others show up through symptoms like longer dry times, unusual heat, or lint near the exterior vent. An inspection request helps connect you with a provider who can review accessible concerns.",
    symptoms: [
      "Drying takes longer but the cause is not obvious.",
      "The exterior vent flap does not open normally.",
      "A homeowner recently moved into the property.",
      "The vent path looks long, hidden, or difficult to understand.",
      "There may be nesting material or lint buildup outside."
    ],
    needTitle: "When homeowners request dryer vent inspection",
    needItems: [
      "After buying or moving into a home.",
      "Before deciding whether cleaning, repair, or rerouting is needed.",
      "When the exterior vent appears blocked or damaged.",
      "When the dryer runs hot or takes too long.",
      "When property managers need a service request documented."
    ],
    howItWorks: [
      ["Describe symptoms", "Share what you are seeing, hearing, smelling, or noticing during dryer operation."],
      ["Route the request", "The request is matched to local coverage for dryer vent inspection and related services."],
      ["Provider review", "A local provider may follow up to confirm what can be inspected and what access is needed."]
    ],
    whyItMatters:
      "Inspection can help identify whether a dryer vent concern is more likely related to lint buildup, damage, nesting material, installation problems, or an inefficient vent path.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Repair", href: "/dryer-vent-repair" },
      { title: "Bird Nest Removal", href: "/bird-nest-removal" }
    ],
    faqs: [
      {
        question: "What does a dryer vent inspection usually look for?",
        answer:
          "A local provider may review accessible vent connections, exterior termination points, visible blockage signs, and airflow-related symptoms. Exact scope depends on provider availability and property access."
      },
      {
        question: "Should I request inspection or cleaning first?",
        answer:
          "If you already see lint buildup or long dry times, cleaning may be appropriate. If the issue is unclear, an inspection request can help a provider review visible concerns."
      },
      {
        question: "Can inspection lead to repair or rerouting recommendations?",
        answer:
          "Yes. If a provider identifies damage, inefficient routing, or access concerns, they may discuss next steps based on their service scope."
      }
    ],
    placeholder: "Image placeholder - 16:9 dryer vent inspection photo",
    heroImage: {
      src: "/images/inspection-hero.png",
      alt: "Dryer vent inspection service for visible vent and airflow concerns",
      width: 1672,
      height: 941
    },
    problemImage: {
      src: "/images/inspection-problem.png",
      alt: "Dryer vent inspection identifying small airflow and exterior vent issues",
      width: 1672,
      height: 941
    }
  },
  {
    slug: "bird-nest-removal",
    title: "Bird Nest Removal from Dryer Vents in Georgia",
    shortTitle: "Bird Nest Removal",
    keyword: "bird nest removal dryer vent Georgia",
    metaTitle: "Bird Nest Removal Dryer Vent Georgia",
    metaDescription:
      "Request bird nest removal from dryer vents in select Georgia communities. Connect with local providers for blocked exterior vents, nesting material, vent cap concerns, and related cleaning.",
    heroText:
      "Birds and nesting material can block exterior dryer vent openings and restrict exhaust. Submit a request to connect with local dryer vent service providers where bird nest removal service is available.",
    problemTitle: "Nesting material can block the exterior vent",
    problemText:
      "A dryer vent that exits through an exterior wall can attract nesting activity when the cap is damaged, open, or easy to access. Nesting material may stop the vent flap from opening and can trap heat and moisture.",
    symptoms: [
      "Twigs, straw, or debris are visible at the outside dryer vent.",
      "Bird activity is noticeable around the vent opening.",
      "The exterior flap is stuck or will not open.",
      "Drying times increased during nesting season.",
      "Lint and nesting material appear mixed near the vent cap."
    ],
    needTitle: "When homeowners request bird nest removal",
    needItems: [
      "When nesting material is visible in or near the vent.",
      "When a vent cap is damaged or missing.",
      "When airflow suddenly gets worse in spring or nesting season.",
      "When lint cleaning is needed after debris removal.",
      "When a property owner wants the exterior vent checked."
    ],
    howItWorks: [
      ["Submit visible details", "Share your city and what you see around the outside vent opening."],
      ["Request routing", "The request is routed based on local coverage for dryer vent blockage and nest removal concerns."],
      ["Provider follow-up", "A local provider may contact you to discuss access, removal, cleaning, and prevention options."]
    ],
    whyItMatters:
      "Removing nesting material can help restore exhaust airflow and may prevent a blocked exterior opening from creating longer dry times, heat buildup, and recurring lint accumulation.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Inspection", href: "/dryer-vent-inspection" },
      { title: "Dryer Vent Repair", href: "/dryer-vent-repair" }
    ],
    faqs: [
      {
        question: "Can a bird nest block a dryer vent?",
        answer:
          "Yes. Nesting material can restrict or block the exterior dryer vent opening, which can reduce airflow and cause longer dry times."
      },
      {
        question: "Will the provider clean the vent after nest removal?",
        answer:
          "Many requests involve both debris removal and related vent cleaning, but the exact service scope is confirmed by the provider that follows up."
      },
      {
        question: "Can a damaged vent cap be addressed too?",
        answer:
          "If available in your area, a local provider may be able to discuss vent cap issues or related repair needs during follow-up."
      }
    ],
    placeholder: "Image placeholder - 16:9 bird nest removal photo",
    heroImage: {
      src: "/images/bird-nest-removal-hero.png",
      alt: "Bird nest removal from an exterior dryer vent opening",
      width: 1672,
      height: 941
    },
    problemImage: {
      src: "/images/bird-nest-removal.png",
      alt: "Nesting material blocking an exterior dryer vent",
      width: 1672,
      height: 941
    }
  },
  {
    slug: "dryer-vent-rerouting",
    title: "Dryer Vent Rerouting in Georgia",
    shortTitle: "Dryer Vent Rerouting",
    keyword: "dryer vent rerouting Georgia",
    metaTitle: "Dryer Vent Rerouting Georgia",
    metaDescription:
      "Request dryer vent rerouting in select Georgia communities. Connect with local providers for long vent runs, inefficient routing, remodel changes, damaged paths, and airflow concerns.",
    heroText:
      "Some dryer vent problems come from the route itself. Georgia Dryer Vent Pros can help route requests for dryer vent rerouting when a path is too long, damaged, inefficient, or no longer works for the property layout.",
    problemTitle: "Some vent paths are too long or inefficient",
    problemText:
      "A vent route with too many turns, long hidden runs, damaged sections, or difficult exits can make dryer performance worse. Rerouting may be requested when cleaning or repair does not address the underlying path issue.",
    symptoms: [
      "The vent route is long, hidden, or difficult to access.",
      "Drying remains slow after cleaning.",
      "A remodel changed the laundry room layout.",
      "The current vent exits through a difficult location.",
      "Repeated lint buildup happens in the same vent run."
    ],
    needTitle: "When homeowners request dryer vent rerouting",
    needItems: [
      "After remodeling a laundry room.",
      "When the existing vent path is inefficient.",
      "When a route is damaged or hard to maintain.",
      "When a dryer location changes.",
      "When a provider recommends reviewing a better exhaust path."
    ],
    howItWorks: [
      ["Describe the layout", "Share where the dryer sits, where the vent exits, and what problems you are noticing."],
      ["Coverage review", "The request is matched to providers who may handle rerouting in current service areas."],
      ["Provider assessment", "A provider may follow up to review routing options, access, feasibility, and pricing."]
    ],
    whyItMatters:
      "A better dryer vent route may improve access, reduce recurring restrictions, and help the dryer exhaust heat and moisture more effectively.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Installation", href: "/dryer-vent-installation" },
      { title: "Dryer Vent Repair", href: "/dryer-vent-repair" }
    ],
    faqs: [
      {
        question: "When is dryer vent rerouting needed?",
        answer:
          "Rerouting may be considered when the current path is long, inefficient, damaged, difficult to clean, or no longer fits the property layout."
      },
      {
        question: "Is rerouting the same as installation?",
        answer:
          "They are related, but rerouting usually changes an existing vent path while installation may create or replace a vent path."
      },
      {
        question: "Can every dryer vent be rerouted?",
        answer:
          "No. Feasibility depends on the home layout, access, exterior termination options, and provider service scope."
      }
    ],
    placeholder: "Image placeholder - 16:9 dryer vent rerouting photo"
  },
  {
    slug: "commercial-dryer-vent-cleaning",
    title: "Commercial Dryer Vent Cleaning in Georgia",
    shortTitle: "Commercial Dryer Vent Cleaning",
    keyword: "commercial dryer vent cleaning Georgia",
    metaTitle: "Commercial Dryer Vent Cleaning Georgia",
    metaDescription:
      "Request commercial dryer vent cleaning in select Georgia communities. Connect with local providers for laundries, multifamily laundry rooms, salons, gyms, rentals, and high-use dryer vent systems.",
    heroText:
      "Commercial and high-use laundry areas can create faster lint buildup and more frequent airflow concerns. Submit a service request to connect with local dryer vent service providers where commercial coverage is available.",
    problemTitle: "High-use dryers can build lint faster",
    problemText:
      "Businesses, shared laundry rooms, rental properties, and facilities with repeated dryer use may need more frequent vent attention than a typical home. Restricted airflow can affect drying performance and operating routines.",
    symptoms: [
      "Multiple dryers are taking longer than normal.",
      "Shared laundry rooms feel hot or humid.",
      "Lint collects around exterior terminations.",
      "Dryers run frequently throughout the day.",
      "Property staff need provider follow-up for scheduling."
    ],
    needTitle: "When commercial properties request service",
    needItems: [
      "Apartment or multifamily laundry rooms.",
      "Salons, gyms, spas, or towel-heavy businesses.",
      "Rental properties and managed homes.",
      "Laundromats or shared laundry areas.",
      "Facilities with recurring lint or airflow concerns."
    ],
    howItWorks: [
      ["Send property details", "Share your city, property type, number of dryers, and the issue you are seeing."],
      ["Route by coverage", "The request is reviewed for local commercial dryer vent service availability."],
      ["Provider coordination", "A provider may follow up to discuss access, timing, scope, and scheduling needs."]
    ],
    whyItMatters:
      "Commercial dryer vent cleaning can help reduce airflow restrictions in higher-use environments and support more predictable dryer performance.",
    relatedServices: [
      ...baseRelated,
      { title: "Dryer Vent Inspection", href: "/dryer-vent-inspection" },
      { title: "Dryer Vent Repair", href: "/dryer-vent-repair" }
    ],
    faqs: [
      {
        question: "Can commercial properties request dryer vent cleaning?",
        answer:
          "Yes. Commercial, multifamily, rental, and managed property contacts can submit a request. Availability depends on local provider coverage and service scope."
      },
      {
        question: "What property details should I provide?",
        answer:
          "Include the city, property type, number of dryers, access notes, and the main issue such as longer dry times, heat, lint buildup, or exterior blockage."
      },
      {
        question: "Do commercial dryer vents need cleaning more often?",
        answer:
          "High-use dryer systems may need attention more often than typical residential systems, but timing depends on use, vent layout, and provider recommendations."
      }
    ],
    placeholder: "Image placeholder - 16:9 commercial dryer vent service photo"
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export const servicePageRoutes = servicePages.map((service) => `/${service.slug}`);
