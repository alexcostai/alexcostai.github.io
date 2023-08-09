//project imports
import ProjectItem from "./ProjectItem";

export default function ProjectsList({ projects, onClickItem }) {
  return projects.map((project, idx) => (
    <ProjectItem onClick={onClickItem} project={project} key={idx} />
  ));
}
