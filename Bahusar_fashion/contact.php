<!DOCTYPE html>
<html class="no-js">
<?php include 'components/header-links.php'; ?>
<style>
	.page_breadcrumbs.background_cover {
		background-image: url(img/parallax/map.jpg) !important;
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
		</div>
	</div>
	<!-- eof .modal -->
	<!-- wrappers for visual page editor and boxed version of template -->
	<div id="canvas">
		<div id="box_wrapper">
			<?php include 'components/header-navbar.php'; ?>
			<section class="page_breadcrumbs ls background_cover section_padding_50">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 text-center">
							<h1 class="sr-only">Contacts</h1>
							<ol class="breadcrumb darklinks">
								<li> <a href="index.html">
										Home
									</a> </li>
								<li class="active"> <span>Contacts</span> </li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section
				class="ls section_padding_top_150 section_padding_bottom_150 columns_padding_30 columns_margin_bottom_40">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<h2>Location</h2>
							<section id="map" class="ls ms"
								data-address="522 Chapel St, South Yarra VIC 3141, Australia">
								<!-- marker description and marker icon goes here -->
								<div class="map_marker_description">
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8028819374263!2d77.50295367454773!3d13.048215613195007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df6ef947cab%3A0x188aa6b1d93b6567!2sBhahusar%20Fashions%20%26%20uniforms!5e0!3m2!1sen!2sin!4v1732190880089!5m2!1sen!2sin"
										width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
										referrerpolicy="no-referrer-when-downgrade"></iframe>
								</div>

							</section>
						</div>
						<div class="clearfix toppadding_10"></div>
						<div class="col-xs-12 col-md-6">
							<h2>Get in Touch</h2>
							<p>Your email address will not be published. We promise not to spam!</p>
							<div class="toppadding_15"></div>
							<form class="contact-form row" method="post"
								action="https://html.modernwebtemplates.com/qtyler/">
								<div class="col-xs-12">
									<div class="form-group bottommargin_0"> <label for="name">Full Name</label> <input
											type="text" aria-required="true" size="30" value="" name="name" id="name"
											class="form-control with_icon" placeholder="Full Name"> <i
											class="qtyler-user grey"></i> </div>
								</div>
								<div class="col-xs-12">
									<div class="form-group bottommargin_0"> <label for="email">Email address</label>
										<input type="email" aria-required="true" size="30" value="" name="email"
											id="email" class="form-control with_icon" placeholder="Email Address"> <i
											class="qtyler-envelope grey"></i>
									</div>
								</div>
								<div class="col-xs-12">
									<div class="form-group bottommargin_0"> <label for="phone">Phone Number</label>
										<input type="tel" size="30" value="" name="phone" id="phone"
											class="form-control with_icon" placeholder="Phone Number"> <i
											class="qtyler-phone grey"></i>
									</div>
								</div>
								<div class="col-xs-12">
									<div class="form-group bottommargin_0"> <label for="message">Your Message</label>
										<textarea aria-required="true" rows="3" cols="45" name="message" id="message"
											class="form-control with_icon" placeholder="Your Message"></textarea> <i
											class="qtyler-comment grey"></i>
									</div>
								</div>
								<div class="col-xs-12 bottommargin_0">
									<div class="contact-form-submit"> <button type="submit" id="contact_form_submit"
											name="contact_submit" class="theme_button min_width_button margin_0">Submit
											now</button> </div>
								</div>
							</form>
						</div>
						<div class="col-xs-12 col-md-6">
							<h2>Contact Info</h2>
							<p>We at Unitex welcome you to another year of School Wear Uniforming.</p>
							<p>Our company, <strong>BHAHUSAR FASHIONS</strong>, specializes in Uniform Fabrics since
								1990, with the trademark <strong>WOCKY TOCKY</strong>.</p>
							<div class="toppadding_20"></div>
							<ul class="list1 no-bullets">
								<li>
									<div class="media teaser media-icon-teaser">
										<div class="media-left media-middle">
											<div class="teaser_icon size_normal"> <i
													class="qtyler-phone highlight2"></i> </div>
										</div>
										<div class="media-body media-middle">
											<h3>Phone</h3>
											<p>9845821109</p>
										</div>
									</div>
								</li>
								<li>
									<div class="media teaser media-icon-teaser">
										<div class="media-left media-middle">
											<div class="teaser_icon size_normal"> <i
													class="qtyler-envelope highlight3"></i> </div>
										</div>
										<div class="media-body media-middle">
											<h3>Email</h3>
											<p><a href="mailto:raghubahusar@gmail.com">raghubahusar@gmail.com</a>
											</p>
										</div>
									</div>
								</li>
								<li>
									<div class="media teaser media-icon-teaser">
										<div class="media-left media-middle">
											<div class="teaser_icon size_normal"> <i
													class="qtyler-map-marker highlight"></i> </div>
										</div>
										<div class="media-body media-middle">
											<h3>Location</h3>
											<p>No.65, 2nd Main Road,MS Ramaiah Layout, Nagasandra
												Post, 8th Mile, Bangalore - 560073</p>
										</div>
									</div>
								</li>
							</ul>
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