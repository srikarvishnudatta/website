export interface ProjectType{
    projectid: number;
    projectName:string;
    projectStack: string[];
    projectDescription:string;
    projectImg:string;
    projectLink:string;
}
export const data: ProjectType[] = [{
    projectid:1,
    projectName: "Splits App",
    projectStack: ["React", "Springboot", "TypeScript", "Java", "SQL", "AWS"],
    projectDescription: "A web app to split expenses among friends without a need for them to create an account. ",
    projectImg:"/project",
    projectLink:""
}, 
{
    projectid:2,
    projectName: "Emotion Detection Analysis",
    projectStack: ["Python", "PyTorch", "Pandas", "Matplotlib"],
    projectDescription: "A CNN based model to detect human emotionss",
    projectImg:"/project",
    projectLink:""

}, 
{
    projectid:3,
    projectName: "A job based application system",
    projectStack: ["React", "Springboot", "Java", "SQL"],
    projectDescription: "A react based job application portal for both recruiters and candidates to apply for jobs.",
    projectImg:"/project",
    projectLink:""

}, 
{
    projectid:4,
    projectName: "Elasticsearch and kubernetes",
    projectStack: ["Python", "Elasticsearch", "Kibana", "Docker", "Kubenetes"],
    projectDescription: "A react based job application portal for both recruiters and candidates to apply for jobs.",
    projectImg:"/project",
    projectLink:""

}, 
]