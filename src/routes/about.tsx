import { createFileRoute } from "@tanstack/react-router";
import { AboutPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/about")({
 head:()=>({meta:[{title:"About Saxon Roofing & Sons | Doncaster Roofers"},{name:"description",content:"Meet the family-run roofing team owned by James Flint, serving Doncaster and South Yorkshire with quality workmanship."},{property:"og:title",content:"About Saxon Roofing & Sons | Doncaster Roofers"},{property:"og:description",content:"Meet the family-run roofing team owned by James Flint, serving Doncaster and South Yorkshire with quality workmanship."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/about"}],links:[{rel:"canonical",href:"/about"}]}),
 component:()=> <SiteShell><AboutPage/></SiteShell>,
});
