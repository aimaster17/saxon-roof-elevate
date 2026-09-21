import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/services")({
 head:()=>({meta:[{title:"Roofing Services in Doncaster | Saxon Roofing & Sons"},{name:"description",content:"Roof repairs, new roofs, tiling, flat roofing, chimney work, fascias, soffits and guttering across South Yorkshire."},{property:"og:title",content:"Roofing Services in Doncaster | Saxon Roofing & Sons"},{property:"og:description",content:"Roof repairs, new roofs, tiling, flat roofing, chimney work, fascias, soffits and guttering across South Yorkshire."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/services"}],links:[{rel:"canonical",href:"/services"}]}),
 component:()=> <SiteShell><ServicesPage/></SiteShell>,
});
