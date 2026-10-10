import {SolutionDetailPage} from '@/components/legacy-pages';
import {findSolution, solutionTitle, solutions} from '@/lib/solutions';
export function generateStaticParams(){return solutions.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=findSolution(slug);return {title:s?solutionTitle('en',s):'Industry solutions'}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <SolutionDetailPage lang="en" slug={slug}/>}
