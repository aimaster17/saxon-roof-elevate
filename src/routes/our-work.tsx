import { createFileRoute } from "@tanstack/react-router";
import { WorkPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/our-work")({
 head:()=>({meta:[{title:"Our Roofing Work | Saxon Roofing & Sons"},{name:"description",content:"See roof repairs, new roofs, tiling, roofline and chimney work completed by Saxon Roofing & Sons."},{property:"og:title",content:"Our Roofing Work | Saxon Roofing & Sons"},{property:"og:description",content:"See roof repairs, new roofs, tiling, roofline and chimney work completed by Saxon Roofing & Sons."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/our-work"}],links:[{rel:"canonical",href:"/our-work"}]}),
 component:()=> <SiteShell><WorkPage/></SiteShell>,
});
