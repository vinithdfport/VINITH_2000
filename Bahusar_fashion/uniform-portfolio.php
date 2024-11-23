<!DOCTYPE html>
<html class="no-js">

<?php include 'components/header-links.php'; ?>
<style>
	.page_breadcrumbs.background_cover {
		background-image: url(images/gallery/17.jpg) !important;
	}

	.custom-size {
		width: 400px !important;
		height: 400px !important;
		object-fit: cover;
	}
</style>

<body>

	<div class="preloader">
		<div class="preloader_image"></div>
	</div>
	<!-- search modal -->
	<div class="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal"> <button
			type="button" class="close" data-dismiss="modal" aria-label="Close">
			<span aria-hidden="true">
				<i class="rt-icon2-cross2"></i>
			</span>
		</button>
		<div class="widget widget_search">
			<form method="get" class="searchform search-form form-inline"
				action="https://html.modernwebtemplates.com/qtyler/">
				<div class="form-group bottommargin_0"> <input type="text" value="" name="search" class="form-control"
						placeholder="Search keyword" id="modal-search-input"> </div> <button type="submit"
					class="theme_button color1 no_bg_button">Search</button>
			</form>
		</div>
	</div>
	<!-- Unyson messages modal -->
	<div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
		<div class="fw-messages-wrap ls with_padding">
			<!-- Uncomment this UL with LI to show messages in modal popup to your user: -->
			<!--
		<ul class="list-unstyled">
			<li>Message To User</li>
		</ul>
		-->
		</div>
	</div>
	<!-- eof .modal -->
	<!-- wrappers for visual page editor and boxed version of template -->
	<div id="canvas">
		<div id="box_wrapper">
			<!-- template sections -->
			<?php include 'components/header-navbar.php'; ?>
			<section class="page_breadcrumbs ls background_cover section_padding_50">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 text-center">
							<ol class="breadcrumb darklinks">
								<li> <a href="index.html">
										Home
									</a> </li>
								<li> <a href="#">Portfolio</a> </li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section
				class="ls page_portfolio section_padding_top_140 section_padding_bottom_150 columns_padding_0 container_padding_0">
				<div class="container-fluid">
					<div class="row">
						<div class="col-sm-12">
							<div class="filters isotope_filters">
								<a href="#" class="selected" data-filter="*">All</a>
								<a href="#" data-filter=".primary">Primary</a>
								<a href="#" data-filter=".secondary">Secondary</a>
								<a href="#" data-filter=".corporate">Corporate </a>
								<a href="#" data-filter=".factory">Factory</a>
								<a href="#" data-filter=".hotel">Hotel</a>
								<a href="#" data-filter=".hospital">Hospital</a>
								<a href="#" data-filter=".blazers">Blazers</a>
								<a href="#" data-filter=".waisecoat">Waisecoat</a>
								<a href="#" data-filter=".tshirts">T-Shirts</a>
							</div>
							<div class="isotope_container isotope row masonry-layout columns_margin_0 columns_padding_0"
								data-filters=".isotope_filters">
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img64.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img64.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Morbi euismod
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks small-text"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 secondary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/sec1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/sec1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Secondary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 corporate">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/cor5.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/cor5.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan3">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Corporate</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hotel">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hot1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hot1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hotel</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hospital">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hos3.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hos3.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hospital</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 waisecoat">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/coat1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/coat1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Waisecoat</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img92.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img92.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Sarmiento museum
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 secondary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/sec2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/sec2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Secondary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 corporate">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/cor6.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/cor6.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan3">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Corporate</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 factory">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/fac2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/fac2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Factory</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hotel">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hot2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hot2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hotel</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hospital">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hos1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hos1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hospital</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 waisecoat">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/coat2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/coat2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Waisecoat</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 blazers">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/bla1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/bla1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Blazer</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img99.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img99.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 secondary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/sec3.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/sec3.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Secondary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 corporate">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/cor3.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/cor3.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Corporate</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 factory">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/fac1.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/fac1.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Factory</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hospital">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hos2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hos2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hospital</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 blazers">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/bla2.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/bla2.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Blazer</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img106.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img106.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 secondary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/sec4.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/sec4.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Secondary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 corporate">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/cor4.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/cor4.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Corporate</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 hospital">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/hos4.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/hos4.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Hospital</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 blazers">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/gallery/bla3.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/gallery/bla3.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Blazer</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img113.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img113.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img120.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img120.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img127.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img127.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img134.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img134.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img141.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img141.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img148.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img148.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img155.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img155.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
								<div class="isotope-item col-lg-3 col-md-4 col-sm-6 primary">
									<article class="vertical-item gallery-item content-padding text-center">
										<div class="item-media"> <img class="custom-size" src="images/shop/img162.jpg"
												alt="">
											<div class="media-links">
												<div class="links-wrap"> <a class="p-view prettyPhoto " title=""
														data-gal="prettyPhoto[gal]" href="images/shop/img162.jpg"></a>
												</div>
											</div>
										</div>
										<div class="item-content plan4">
											<header class="entry-header">
												<!-- <h3 class="entry-title"> <a href="gallery-single.html" rel="bookmark">
														Phasellus volutpat
													</a> </h3> -->
												<div class="categories-links small-text highlightlinks"> <a
														href="#">Primary</a> </div>
											</header>
										</div>
									</article>
								</div>
							</div>
							<!-- eof .isotope_container.row -->
							<div class="text-center topmargin_30"> <a id="load-more-btn" href="#"
									class="theme_button min_width_button margin_0">Load More</a> </div>
						</div>
					</div>
				</div>
			</section>
			<?php include 'components/footer-main.php'; ?>
		</div>
		<!-- eof #box_wrapper -->
	</div>
	<!-- eof #canvas -->
	<?php include 'components/footer-scripts.php'; ?>
</body>

</html>