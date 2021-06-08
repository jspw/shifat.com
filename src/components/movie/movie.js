import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Movie = () => {
  const [movieLink, setMovieLink] = useState("");

  const [movieLinkInputValue, setMovieLinkInputValue] = useState("");

  const onplay = (event) => {
    event.preventDefault();
    setMovieLink(movieLinkInputValue);
  };

  const movieLinkInputOnChange = (event) => {
    setMovieLinkInputValue(event.target.value);
  };

  return (
    <Container style={{ marginTop: 100 }}>
      <h1>Welcome to Movie Party!</h1>
      <Form onSubmit={onplay}>
        <Form.Group>
          <Form.Label>Movie Link</Form.Label>
          <Form.Control
            onChange={movieLinkInputOnChange}
            value={movieLinkInputValue}
            type="text"
          />
        </Form.Group>
        <Button type="submit">Play</Button>
      </Form>
      <br></br>
      <iframe
        width="100%"
        height="100%"
        src="../../../../../../../Desktop/netflix and chill/Copy of MLWBD.com The.Girl.On.The.Train.2021.Hindi.720p.WEB-DL.DD5.1.x264.mkv.mp4"
      ></iframe>
    </Container>
  );
};

export default Movie;
