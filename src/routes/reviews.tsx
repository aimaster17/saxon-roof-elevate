import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage, SiteShell } from "@/components/saxon-site";
export const Route = createFileRoute("/reviews")({
 head:()=>({meta:[{title:"Customer Reviews | Saxon Roofing & Sons"},{name:"description",content:"Read genuine customer recommendations for Saxon Roofing & Sons in Doncaster and South Yorkshire."},{property:"og:title",content:"Customer Reviews | Saxon Roofing & Sons"},{property:"og:description",content:"Read genuine customer recommendations for Saxon Roofing & Sons in Doncaster and South Yorkshire."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{property:"og:url",content:"/reviews"}],links:[{rel:"canonical",href:"/reviews"}]}),
 component:()=> <SiteShell><ReviewsPage/></SiteShell>,
});
