export function RepositoryItem(props) {
  const repoName = props.repository.name;
  const description = props.repository.description;
  const url = props.repository.html_url;

  return (
    <li>
      <strong> {repoName} </strong>
      <p>{description}</p>
      <a href={url}>Acessar repositório</a>
    </li>
  );
}
