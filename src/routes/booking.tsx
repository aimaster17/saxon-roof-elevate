import { createFileRoute } from "@tanstack/react-router";
import { BookingPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/booking")({
 head:()=>({meta:[{title:"Request a Free Roofing Quote | Saxon Roofing & Sons"},{name:"description",content:"Request a free roofing quote from Saxon Roofing & Sons for your South Yorkshire property."},{property:"og:title",content:"Request a Free Roofing Quote | Saxon Roofing & Sons"},{property:"og:description",content:"Request a free roofing quote from Saxon Roofing & Sons for your South Yorkshire property."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/booking"}],links:[{rel:"canonical",href:"/booking"}]}),
 component:()=> <SiteShell><BookingPage/></SiteShell>,
});
