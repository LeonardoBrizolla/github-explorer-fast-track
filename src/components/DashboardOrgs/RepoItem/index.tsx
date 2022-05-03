import { Button, Card } from 'react-bootstrap';

import { Container, NewCard } from './styles';

export function RepoItem({ repo }) {
  return (
    <Container>
      <NewCard>
        <Card.Img
          variant='top'
          src={repo.owner.avatar_url}
          style={{ width: '150px' }}
        />
        <Card.Body>
          <Card.Title>{repo.name}</Card.Title>
          <Card.Text>{repo.description}</Card.Text>
          <Button variant='primary' href={repo.html_url}>
            Acessar repo
          </Button>
        </Card.Body>
      </NewCard>
    </Container>
  );
}
