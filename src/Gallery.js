import React, { Component } from "react";
import { Carousel, CarouselItem, Row, Col } from "react-bootstrap";
import imgLinks from "./Modules/ImgLinks";
import captions from "./Modules/ImgCaptions";

export default class Gallery extends Component {
	state = {
		active: 0,
		captions: captions(),
		brokenImgs: [],
	};

	handleClick = e => {
		const selection = typeof e !== "number" ? Number(e.target.id) : e;
		this.setState({
			active: selection,
		});
	};

	getCarouselItems() {
		return imgLinks[this.props.tab].map(img => {
			if (!this.state.brokenImgs.includes(img)) {
				return (
					<CarouselItem key={img}>
						<img className="gallery_carousel" src={img} alt={`${img}-lg`} />
						<Carousel.Caption>
							<h2 id="textCaption">
								{this.state.captions.streetsampler[img.slice(67, -4)]}
							</h2>
						</Carousel.Caption>
					</CarouselItem>
				);
			} else return null;
		});
	}

	getGalleryItems(start, end) {
		return imgLinks[this.props.tab].slice(start, end).map(img => {
			if (!this.state.brokenImgs.includes(img)) {
				return (
					<img
						key={img}
						className="gallery_img"
						src={img}
						id={imgLinks[this.props.tab].indexOf(img)}
						onClick={this.handleClick}
						alt={`${img}-thumb`}
						onError={() =>
							this.setState({
								brokenImgs: this.state.brokenImgs.concat(img),
							})
						}
					/>
				);
			} else return null;
		});
	}

	render() {
		return (
			<div className="gallery">
				<Row className="gallery_row" noGutters={true}>
					<Col className="gallery_wrap_col" md={12} lg={4}>
						<Col xs={12} className="gallery_col">
							{this.getGalleryItems(0, 8)}
						</Col>
						<Col xs={12} className="gallery_col">
							{this.getGalleryItems(8, 16)}
						</Col>
						<Col xs={12} className="gallery_col">
							{this.getGalleryItems(16, 24)}
						</Col>
					</Col>

					<Col className="gallery_carousel" md={12} lg={8}>
						<Carousel
							slide={false}
							activeIndex={this.state.active}
							onSelect={this.handleClick}
							interval={null}
						>
							{this.getCarouselItems()}
						</Carousel>
					</Col>
				</Row>
			</div>
		);
	}
}
