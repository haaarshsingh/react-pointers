import Link from "next/link";
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Layout from "./Layout";

const socials = [
  {
    icon: <BsGithub />,
    href: "https://github.com/harshhhdev/react-pointers",
    label: "GitHub",
  },
  {
    icon: <BsTwitter />,
    href: "https://github.com/harshhhdev/react-pointers",
    label: "Twitter",
  },
  {
    icon: <BsDiscord />,
    href: "https://discord.com/users/518432133111611397",
    label: "Discord",
  },
];

export default () => (
  <Layout bottom>
    <div className="flex items-center justify-between px-4 py-4">
      <Link href="#" draggable={false}>
        <Icon />
      </Link>
      <div className="flex items-center gap-x-3">
        {socials.map((social, index) => (
          <a
            href={social.href}
            target="_blank"
            rel="noreferrer"
            key={index}
            aria-label={social.label}
            className="text-lg text-neutral-400 transition-colors hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400"
          >
            {social.icon}
          </a>
        ))}
        <a
          href="https://github.com/harshhhdev/react-pointers/blob/master/README.md"
          target="_blank"
          rel="noreferrer"
          className="group ml-3 flex items-center rounded-lg bg-neutral-200 px-4 py-3 text-sm transition-colors hover:bg-neutral-300 active:bg-neutral-400/50 dark:bg-neutral-800 dark:hover:bg-neutral-700/75"
        >
          Documentation
          <FiArrowRight className="ml-1.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  </Layout>
);

const Icon = () => (
  <svg
    width="517"
    height="550"
    viewBox="0 0 517 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
  >
    <path
      d="M50 318.5V253L102.756 257.395H106V265L117.5 275.5L182 323.5L167.5 67L182 33L239 29L271.5 42.5L277.5 139.5L285.5 169L352 181L370 193.5L419 209.5L449 230L491 247.5V425.5L408 502L178 506.5V471.5H93.5V318.5H50Z"
      fill="#F1F1F1"
    />
    <path d="M149.6 35.2H182.6V330H149.6V35.2Z" fill="#010101" />
    <path d="M105.6 257.4H149.6V292.6H105.6V257.4Z" fill="#010101" />
    <path d="M35.2 222.2H105.6L105.6 257.4H35.2V222.2Z" fill="#010101" />
    <path d="M182.6 0H253V35.2H182.6V0Z" fill="#010101" />
    <path d="M257.4 222.2V35.2H292.6V222.2H257.4Z" fill="#010101" />
    <path d="M176 550V514.8H411.4V550H176Z" fill="#010101" />
    <path d="M105.6 514.8V479.6H176V514.8H105.6Z" fill="#010101" />
    <path d="M70.4 479.6V409.2H105.6L105.6 479.6L70.4 479.6Z" fill="#010101" />
    <path d="M35.2 409.2L35.2 338.8H70.4L70.4 409.2H35.2Z" fill="#010101" />
    <path
      d="M3.55811e-06 338.8L0 257.4H35.2L35.2 338.8L3.55811e-06 338.8Z"
      fill="#010101"
    />
    <path d="M292.6 151.8H365.2V187H292.6V151.8Z" fill="#010101" />
    <path d="M365.2 187H437.8V222.2H365.2V187Z" fill="#010101" />
    <path d="M437.8 222.2H517V257.4H437.8L437.8 222.2Z" fill="#010101" />
    <path d="M481.8 444.4V257.4H517V444.4H481.8Z" fill="#010101" />
    <path
      d="M446.6 479.6V444.4L481.8 444.4L481.8 479.6H446.6Z"
      fill="#010101"
    />
    <path d="M411.4 514.8V479.6L446.6 479.6V514.8H411.4Z" fill="#010101" />
    <path d="M141 35.2H150V258H141V35.2Z" fill="#3A3A3A" />
    <path d="M253 0H259.6V35.2H253V0Z" fill="#3A3A3A" />
    <path d="M176 0H182.6V35.2H176V0Z" fill="#3A3A3A" />
    <path d="M358.6 187H365.2V222.2H358.6V187Z" fill="#3A3A3A" />
    <path d="M398.2 479.6L411.4 479.6V514.8H398.2V479.6Z" fill="#3A3A3A" />
    <path d="M433.4 444.4L446.6 444.4V479.6H433.4V444.4Z" fill="#3A3A3A" />
    <path
      d="M468.6 409.2H481.8L481.8 444.4L468.6 444.4V409.2Z"
      fill="#3A3A3A"
    />
    <path d="M176 479.6L189.2 479.6V514.8H176V479.6Z" fill="#3A3A3A" />
    <path
      d="M149.6 292.6H140.8V340.999H193.6V35.1992L182.6 35.2V330H149.6V292.6Z"
      fill="#B9B9B9"
    />
    <path
      d="M244.2 35.1992L257.4 35.2V222.2L244.2 222.199V35.1992Z"
      fill="#B9B9B9"
    />
    <path d="M189.2 479.6H398.2V514.8H189.2V479.6Z" fill="#B9B9B9" />
    <path
      d="M398.2 444.4L433.4 444.4V479.6H398.2L398.2 444.4Z"
      fill="#B9B9B9"
    />
    <path
      d="M433.4 409.199L468.6 409.2V444.4L433.4 444.4L433.4 409.199Z"
      fill="#B9B9B9"
    />
    <path
      d="M189.2 453.2L189.2 479.6L105.6 479.6L105.6 409.2H70.4L70.4 338.8H35.2L35.2 257.4L60.5002 257.4V315.7H97.9002V387.2H123.2V453.2H189.2Z"
      fill="#B9B9B9"
    />
  </svg>
);

const DarkIcon = () => (
  <svg
    width="1024"
    height="1024"
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1024" height="1024" rx="108" fill="#0A0A0A" />
    <path
      d="M303 555.5V490L355.756 494.395H359V502L370.5 512.5L435 560.5L420.5 304L435 270L492 266L524.5 279.5L530.5 376.5L601.5 409.5L689 451.5L702 467L744 484.5V662.5L661 739L431 743.5V708.5H346.5V555.5H303Z"
      fill="#212121"
    />
    <path d="M402.6 272.2H435.6V567H402.6V272.2Z" fill="white" />
    <path d="M358.6 494.4H402.6V529.6H358.6V494.4Z" fill="white" />
    <path d="M288.2 459.2H358.6L358.6 494.4H288.2V459.2Z" fill="white" />
    <path d="M435.6 237H506V272.2H435.6V237Z" fill="white" />
    <path d="M510.4 459.2V272.2H545.6V459.2H510.4Z" fill="white" />
    <path d="M429 787V751.8H664.4V787H429Z" fill="white" />
    <path d="M358.6 751.8V716.6H429V751.8H358.6Z" fill="white" />
    <path d="M323.4 716.6V646.2H358.6L358.6 716.6L323.4 716.6Z" fill="white" />
    <path d="M288.2 646.2L288.2 575.8H323.4L323.4 646.2H288.2Z" fill="white" />
    <path d="M253 575.8L253 494.4H288.2L288.2 575.8L253 575.8Z" fill="white" />
    <path d="M545.6 388.8H618.2V424H545.6V388.8Z" fill="white" />
    <path d="M618.2 424H690.8V459.2H618.2V424Z" fill="white" />
    <path d="M690.8 459.2H770V494.4H690.8L690.8 459.2Z" fill="white" />
    <path d="M734.8 681.4V494.4H770V681.4H734.8Z" fill="white" />
    <path d="M699.6 716.6V681.4L734.8 681.4L734.8 716.6H699.6Z" fill="white" />
    <path d="M664.4 751.8V716.6L699.6 716.6V751.8H664.4Z" fill="white" />
    <path d="M394 272.2H403V495H394V272.2Z" fill="#B2B2B2" />
    <path d="M506 237H512.6V272.2H506V237Z" fill="#B2B2B2" />
    <path d="M429 237H435.6V272.2H429V237Z" fill="#B2B2B2" />
    <path d="M611.6 424H618.2V459.2H611.6V424Z" fill="#B2B2B2" />
    <path d="M651.2 716.6L664.4 716.6V751.8H651.2V716.6Z" fill="#B2B2B2" />
    <path d="M686.4 681.4L699.6 681.4V716.6H686.4V681.4Z" fill="#B2B2B2" />
    <path
      d="M721.6 646.2H734.8L734.8 681.4L721.6 681.4V646.2Z"
      fill="#B2B2B2"
    />
    <path d="M429 716.6L442.2 716.6V751.8H429V716.6Z" fill="#B2B2B2" />
    <path
      d="M402.6 529.6H393.8V577.999H446.6V272.199L435.6 272.2V567H402.6V529.6Z"
      fill="#323232"
    />
    <path
      d="M497.2 272.199L510.4 272.2V459.2L497.2 459.199V272.199Z"
      fill="#323232"
    />
    <path
      d="M545.6 377.801L545.6 388.8H618.2V424H690.8V459.2L697.4 459.201V415.201H627V377.801H545.6Z"
      fill="#323232"
    />
    <path d="M442.2 716.6H651.2V751.8H442.2V716.6Z" fill="#323232" />
    <path
      d="M651.2 681.4L686.4 681.4V716.6H651.2L651.2 681.4Z"
      fill="#323232"
    />
    <path
      d="M686.4 646.199L721.6 646.2V681.4L686.4 681.4L686.4 646.199Z"
      fill="#323232"
    />
    <path
      d="M442.2 690.2L442.2 716.6L358.6 716.6L358.6 646.2H323.4L323.4 575.8H288.2L288.2 494.4L313.5 494.4V552.7H350.9V624.2H376.2V690.2H442.2Z"
      fill="#323232"
    />
  </svg>
);
