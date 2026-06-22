import { Q as reactExports, I as jsxRuntimeExports } from "./server-tH0qczex.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$m = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode$m);
const __iconNode$l = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$l);
const __iconNode$k = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$k);
const __iconNode$j = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$j);
const __iconNode$i = [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
];
const CodeXml = createLucideIcon("code-xml", __iconNode$i);
const __iconNode$h = [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
];
const Container = createLucideIcon("container", __iconNode$h);
const __iconNode$g = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$g);
const __iconNode$f = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$f);
const __iconNode$e = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode$e);
const __iconNode$d = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$d);
const __iconNode$c = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("linkedin", __iconNode$c);
const __iconNode$b = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$b);
const __iconNode$a = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$a);
const __iconNode$9 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$9);
const __iconNode$8 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
];
const PanelsTopLeft = createLucideIcon("panels-top-left", __iconNode$8);
const __iconNode$7 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$7);
const __iconNode$6 = [
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
      key: "u4xsad"
    }
  ],
  [
    "path",
    {
      d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
      key: "676m9"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05", key: "92ym6u" }]
];
const Rocket = createLucideIcon("rocket", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
];
const Server = createLucideIcon("server", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
];
const Workflow = createLucideIcon("workflow", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
      key: "1ngwbx"
    }
  ]
];
const Wrench = createLucideIcon("wrench", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const resume = "/assets/Aiswarya_V_S-C4ylSK8m.pdf";
const codeLines = [
  { t: "class", v: "Engineer:", c: "text-[oklch(0.75_0.16_300)]" },
  { t: "    name", v: '= "Aiswarya V S"', c: "text-primary" },
  { t: "    role", v: '= "Python Developer"', c: "text-accent" },
  { t: "    focus", v: '= "Scalable Backends"', c: "text-[oklch(0.8_0.15_85)]" },
  { t: "    stack", v: '= ["Django", "FastAPI", "DRF"]', c: "text-primary" },
  { t: "    location", v: '= "UAE"', c: "text-accent" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-mesh absolute inset-0 -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 right-0 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-6s]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 -z-10 opacity-[0.04]",
        style: {
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          "Own visa, UAE"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl", children: [
          "Hi, I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient bg-[length:200%_auto] animate-gradient", children: "Aiswarya" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-primary", children: "Python" }),
          " developer."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg", children: [
          "Experienced Software Engineer specializing in building scalable backends with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Django" }),
          ",",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " Django REST Framework" }),
          ", and",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: " FastAPI" }),
          " — shipping 50+ production APIs across healthcare, rental, and queue-management platforms."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#projects",
              className: "group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]",
              children: [
                "View Projects",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: resume,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
                "Resume"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/aiswarya-v-s-31ba37371",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "transition-colors hover:text-primary",
              "aria-label": "LinkedIn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/Aiswaryvs", target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-primary", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-px bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            "UAE — Open to relocation"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-fade-up [animation-delay:200ms]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass overflow-hidden rounded-2xl shadow-[var(--shadow-card)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border bg-surface-elevated/50 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.65_0.22_25)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-[oklch(0.8_0.15_85)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 font-mono text-xs text-muted-foreground", children: "aiswarya.py" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "overflow-x-auto p-6 font-mono text-sm leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
            codeLines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "animate-fade-up opacity-0",
                style: { animationDelay: `${400 + i * 120}ms`, animationFillMode: "forwards" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                    String(i + 1).padStart(2, "0"),
                    "  "
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: line.c, children: line.t }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/90", children: line.v })
                ]
              },
              i
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-4 animate-fade-up opacity-0",
                style: { animationDelay: "1200ms", animationFillMode: "forwards" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "08  " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.75_0.16_300)]", children: "def" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "ship" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "():" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "animate-fade-up opacity-0",
                style: { animationDelay: "1350ms", animationFillMode: "forwards" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "09  " }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "    return" }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.8_0.15_85)]", children: '"scalable APIs"' })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-3 flex items-center gap-2 animate-fade-up opacity-0",
                style: { animationDelay: "1550ms", animationFillMode: "forwards" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "$" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/80", children: "python" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "aiswarya.py" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 inline-block h-4 w-2 animate-pulse bg-primary" })
                ]
              }
            )
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
function SectionHeading({
  kicker,
  title,
  subtitle,
  center
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: center ? "text-center max-w-2xl mx-auto" : "max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-[0.2em] text-primary", children: kicker }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-balance font-display text-3xl font-bold tracking-tight md:text-4xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: subtitle })
  ] });
}
const stats = [
  { icon: Briefcase, value: "Prof.", label: "Experience" },
  { icon: Server, value: "50+", label: "REST APIs shipped" },
  { icon: Rocket, value: "7+", label: "Production products" },
  { icon: GraduationCap, value: "MCA", label: "Master's degree" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        kicker: "01 — About",
        title: "A backend engineer who cares about clean systems."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-10 md:grid-cols-5 md:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-pretty text-lg leading-relaxed text-muted-foreground", children: [
          "I'm ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Aiswarya V S" }),
          ", a results-driven Software Engineer specializing in Python web development. At",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Pearlsoft Technologies" }),
          ", I've designed and shipped production-grade backends with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Django" }),
          ",",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Django REST Framework" }),
          ", and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "FastAPI" }),
          " across healthcare, rental, and queue-management platforms."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-pretty text-lg leading-relaxed text-muted-foreground", children: [
          "I care deeply about secure auth done right — JWT, OAuth 2.0, RBAC — building asynchronous pipelines with ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Celery" }),
          " and",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "RabbitMQ" }),
          ", and integrating React frontends with well-documented REST APIs. I thrive in Agile teams and enjoy turning messy domain requirements into clean, maintainable systems."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-surface/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4 text-primary" }),
            "Education"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Master of Computer Application" }),
                " · Kerala, India"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: "2018 – 2022 · CGPA 7.92" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Bachelor of Computer Application" }),
                " · Kerala, India"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs", children: "2015 – 2018 · CGPA 7.18" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 md:grid-cols-1", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group flex items-center gap-4 rounded-xl border border-border bg-surface/50 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-surface-elevated",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: s.label })
            ] })
          ]
        },
        s.label
      )) }) })
    ] })
  ] }) });
}
const groups = [
  {
    icon: CodeXml,
    title: "Languages",
    items: ["Python", "JavaScript"]
  },
  {
    icon: Server,
    title: "Frameworks",
    items: ["FastAPI", "Django", "Django REST Framework"]
  },
  {
    icon: Database,
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"]
  },
  {
    icon: Workflow,
    title: "APIs",
    items: ["RESTful APIs", "API Integration", "API Documentation"]
  },
  {
    icon: Shield,
    title: "Auth & Security",
    items: ["JWT", "OAuth 2.0", "RBAC", "Token-Based Auth", "Session Management"]
  },
  {
    icon: Workflow,
    title: "Async Processing",
    items: ["Celery", "RabbitMQ"]
  },
  {
    icon: PanelsTopLeft,
    title: "Frontend",
    items: ["React", "HTML", "CSS"]
  },
  {
    icon: Container,
    title: "DevOps",
    items: ["Docker"]
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Jira"]
  }
];
const marqueeItems = [
  "Python",
  "FastAPI",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Celery",
  "RabbitMQ",
  "Docker",
  "Redis",
  "JWT",
  "OAuth 2.0",
  "React",
  "Git",
  "DRF"
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-x-0 top-0 -z-10 h-px",
        style: {
          background: "linear-gradient(90deg, transparent, var(--border), transparent)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          kicker: "02 — Skills",
          title: "The tools I reach for, every day.",
          subtitle: "A pragmatic stack focused on shipping reliable, maintainable software."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: groups.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated",
          style: { animationDelay: `${i * 60}ms` },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: g.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: g.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "li",
              {
                className: "rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground",
                children: item
              },
              item
            )) })
          ]
        },
        g.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative mt-16 overflow-hidden",
          style: {
            maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)"
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-8 py-2", children: [...marqueeItems, ...marqueeItems].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "span",
            {
              className: "font-mono text-2xl font-bold uppercase tracking-tight text-muted-foreground/40 transition-colors hover:text-primary md:text-4xl",
              children: [
                item,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "/" })
              ]
            },
            i
          )) })
        }
      )
    ] })
  ] });
}
const highlights = [
  "Developed and optimized 50+ RESTful APIs for the Spacio platform — rental management, invoicing, payments, grievance handling, and reporting — improving response performance and system stability.",
  "Architected backend workflows for patient survey collection, questionnaire routing, and healthcare analytics for Smart ER, enabling faster data processing and accurate survey insights.",
  "Integrated React frontends with Django REST APIs, reducing communication issues and improving page load responsiveness by ~30%.",
  "Implemented Celery + RabbitMQ asynchronous pipelines for the high-traffic QSync queue-management system, increasing throughput and eliminating processing delays at peak load.",
  "Automated full-stack data migration from MongoDB to PostgreSQL with Python scripts and cron-based scheduled syncs, reducing manual work and discrepancies by 90%.",
  "Built a dynamic quotation and budgeting engine for Felsomat robotic-machinery proposals, improving proposal delivery time by 40% through autogenerated costing reports.",
  "Engineered secure Django REST APIs for Hero pathology specimen tracking — chain-of-custody logging, audit trails, and automated status updates.",
  "Designed a centralized digital visitor entry-pass system serving multiple IT-park offices, improving access-control efficiency and reducing manual verification time.",
  "Collaborated across cross-functional Agile teams (frontend, QA, design, product) to deliver scalable features within sprint timelines while maintaining code quality and documentation standards."
];
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        kicker: "03 — Experience",
        title: "Shipping production backends at scale.",
        subtitle: "Software Engineer at Pearlsoft Technologies, building real systems used every day."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-8 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-28 rounded-2xl border border-border bg-surface/60 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold leading-tight", children: "Pearlsoft Technologies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Kerala, India" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Software Engineer" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-xs text-muted-foreground", children: "Sep 2022 — Aug 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: ["Python", "Django", "DRF", "FastAPI", "Celery", "RabbitMQ", "PostgreSQL", "MongoDB", "React", "Docker"].map(
          (t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "li",
            {
              className: "rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground",
              children: t
            },
            t
          )
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative space-y-5 border-l border-border pl-6", children: highlights.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "group relative animate-fade-up opacity-0",
          style: { animationDelay: `${i * 70}ms`, animationFillMode: "forwards" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border border-primary/40 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary transition-all group-hover:scale-150 group-hover:shadow-[0_0_12px_var(--primary)]" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-pretty text-muted-foreground leading-relaxed", children: h })
          ]
        },
        i
      )) }) })
    ] })
  ] }) });
}
const projects = [
  {
    title: "Spacio — Rental Management Platform",
    description: "Developed 50+ RESTful APIs powering rental management, invoicing, payments, grievance handling, and reporting modules. Improved response performance and overall system stability.",
    tags: ["Django", "DRF", "PostgreSQL", "REST", "React"],
    accent: "from-primary/30 to-accent/20"
  },
  {
    title: "Smart ER — Healthcare Survey & Analytics",
    description: "Architected backend workflows for patient survey collection, questionnaire routing, and healthcare analytics — enabling faster data processing and more accurate survey insights.",
    tags: ["Django", "DRF", "PostgreSQL", "JWT"],
    accent: "from-accent/30 to-primary/20"
  },
  {
    title: "QSync — Queue Management System",
    description: "High-traffic queue platform with Celery + RabbitMQ asynchronous pipelines. Increased request throughput and eliminated processing delays during peak load.",
    tags: ["FastAPI", "Celery", "RabbitMQ", "Redis", "Docker"],
    accent: "from-[oklch(0.7_0.15_300)]/30 to-primary/20"
  },
  {
    title: "Felsomat — Quotation & Budgeting Engine",
    description: "Dynamic quotation and budgeting engine for robotic-machinery proposals. Autogenerated costing reports improved proposal delivery time by 40%.",
    tags: ["Django", "Python", "PostgreSQL", "PDF"],
    accent: "from-primary/30 to-[oklch(0.7_0.15_300)]/20"
  },
  {
    title: "Hero — Pathology Specimen Tracking",
    description: "Secure Django REST APIs for chain-of-custody logging, audit trails, and automated status updates for pathology specimen tracking.",
    tags: ["Django", "DRF", "RBAC", "PostgreSQL"],
    accent: "from-accent/30 to-primary/20"
  },
  {
    title: "Digital Visitor Entry-Pass System",
    description: "Centralized visitor entry-pass system serving multiple IT-park offices. Improved access-control efficiency and dramatically reduced manual verification time.",
    tags: ["Django", "DRF", "MySQL", "OAuth 2.0"],
    accent: "from-primary/30 to-accent/20"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        kicker: "04 — Selected work",
        title: "Products I've shipped."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-40 blur-3xl transition-all duration-500 group-hover:opacity-70`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold tracking-tight md:text-2xl", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "GitHub",
                    className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    "aria-label": "Open",
                    className: "grid h-9 w-9 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all group-hover:rotate-45 hover:border-primary/40 hover:text-primary",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-pretty text-muted-foreground", children: p.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "li",
              {
                className: "rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground",
                children: t
              },
              t
            )) })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border bg-surface/70 p-10 md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:-8s]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          kicker: "05 — Contact",
          title: "Let's build something solid together.",
          center: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:vsaiswarya98@gmail.com",
            className: "group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
              "vsaiswarya98@gmail.com",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid w-full max-w-md gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+971503253316",
              className: "flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
                "+971 50 325 3316"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }),
            "UAE · Own Visa"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.linkedin.com/in/aiswarya-v-s-31ba37371",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://github.com/Aiswaryvs",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "GitHub",
              className: "grid h-11 w-11 place-items-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" })
            }
          )
        ] })
      ] })
    ] })
  ] }) }) });
}
const logoA = "/assets/logo-a-C9J0xIwJ.png";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${scrolled ? "glass shadow-lg" : "bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-2xl bg-primary/30 blur-xl opacity-50 transition-all duration-500 group-hover:opacity-90 group-hover:bg-primary/50 animate-glow" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-0.5 rounded-xl bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-primary/40 bg-background/60 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:border-primary/80 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: logoA,
                      alt: "Aiswarya logo",
                      className: "h-full w-full object-contain p-0.5 drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)] transition-transform duration-500 group-hover:scale-110"
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col -space-y-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-sm tracking-tight leading-tight", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "aiswarya" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-bold", children: ".py" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-3 bg-primary/40" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground", children: "Software Engineer" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-1 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  className: "relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  "aria-label": "Toggle menu",
                  className: "grid h-9 w-9 place-items-center rounded-md text-foreground md:hidden",
                  onClick: () => setOpen((v) => !v),
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass mt-2 rounded-2xl p-3 md:hidden animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "block rounded-md px-4 py-3 text-sm text-muted-foreground ho ver:bg-secondary hover:text-foreground",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", {})
        ] }) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "$" }),
      " © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Aiswarya V S — Crafted with Python & ☕"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed & built with attention to detail." })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
