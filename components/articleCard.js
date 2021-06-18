import { Card, Badge, Col, Row } from "react-bootstrap";
import Link from "next/link";

function ArticleCard(props) {
  const getDate = () => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date =
      props.date[8] +
      props.date[9] +
      " " +
      month[props.date[5] * 10 + props.date[6] - 1] +
      " " +
      props.date[0] +
      props.date[1] +
      props.date[2] +
      props.date[3];
    return date;
  };
  return (
    <Card className="p-md-3">
      <Row>
        <Col xs={12} md={4}>
          <Card.Img
            variant="top"
            src={
              props.thumbnail
                ? props.thumbnail.replace(/%2F/gi, "/")
                : "/thumbnail/default.png"
            }
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title className="p-md-3">{props.title}</Card.Title>
            <Card.Text>{props.caption}</Card.Text>
            <blockquote className="blockquote mb-0 card-body">
              <footer className="blockquote-footer">
                <small className="text-muted">
                  Written by{" "}
                  <cite title="Source Title">
                    <Link
                      href="/authors/[author]"
                      as={`/authors/${props.author}`}
                    >
                      {props.author}
                    </Link>
                  </cite>
                </small>
              </footer>
            </blockquote>
            <Link href="/posts/[post_id]" as={`/posts/${props._id}`}>
              Read More
            </Link>
            <Card.Text>
              <small className="text-muted">Posted {getDate()}</small>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
      <Card.Footer>
        <small className="text-muted">
          {props.tags.map((item) => (
            <span key={item}>
              <Badge pill variant="warning">
                <Link href="/tags/[tag_name]" as={`/tags/${item}`}>
                  {item.name ? item.name : item}
                </Link>
              </Badge>{" "}
            </span>
          ))}
        </small>
      </Card.Footer>
      <Row className="pt-2 text-center">
        <Col>
          <Badge className="px-5 py-1" pill variant="primary" as="button">
            Update
          </Badge>
        </Col>
        <Col>
          <Badge className="px-5 py-1" pill variant="danger" as="button">
            Delete
          </Badge>
        </Col>
        <Col>
          <Badge className="px-5 py-1" pill variant="warning" as="button">
            Hide
          </Badge>
        </Col>
      </Row>
    </Card>
  );
}

export default ArticleCard;
