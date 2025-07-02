import React from "react";
import { Col, Container, Row } from "react-bootstrap"
import Picture from "./Picture"
import {PictureGridProps} from "./types";

const PictureGrid = (props: PictureGridProps) => {
    let i = 0

    return (
        <Container fluid>
            {
                <Row
                >
                    {props.images.map((img) =>
                        <Col
                            key={i++}
                            sm={props.sm}
                            md={props.md}
                            lg={props.lg}
                            xl={props.xl}
                            className="p-0"
                        >
                            <Picture
                                image={img}
                                rounded={props.rounded}
                                roundedCircle={props.roundedCircle}
                                thumbnail={props.thumbnail}
                                className="w-100"
                                width={props.width}
                                height={props.height}
                                interactive={props.interactive}
                                onImageClick={props.onImageClick}
                                in={true}
                            />
                        </Col>
                    )}
                </Row>
            }
        </Container>

    )
}

export default PictureGrid
