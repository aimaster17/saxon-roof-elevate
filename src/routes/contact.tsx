import { createFileRoute } from "@tanstack/react-router";
import { ContactPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/contact")({
 head:()=>({meta:[{title:"Contact Saxon Roofing & Sons | Free Roofing Quote"},{name:"description",content:"Contact James for a free roofing quote in Doncaster, South Yorkshire and surrounding areas."},{property:"og:title",content:"Contact Saxon Roofing & Sons | Free Roofing Quote"},{property:"og:description",content:"Contact James for a free roofing quote in Doncaster, South Yorkshire and surrounding areas."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/contact"}],links:[{rel:"canonical",href:"/contact"}]}),
 component:()=> <SiteShell><ContactPage/></SiteShell>,
});
