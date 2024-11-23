<footer
    class="page_footer parallax overlay_color ds ms section_padding_top_20 section_padding_bottom_20 columns_padding_30">
    <div class="container" style="padding-bottom: 20px !important;">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="widget widget_text">
                    <div class="logo">
                        <img src="img\uniform-logo.png" alt="Uniform Logo">
                    </div>
                    <p>We at Unitex welcome you to another year of School Wear Uniforming.</p>
                    <p>Our company, <strong>BHAHUSAR FASHIONS</strong>, specializes in Uniform Fabrics since
                        1990, with the trademark <strong>WOCKY TOCKY</strong>.</p>
                </div>
            </div>

            <div class="col-md-6 col-sm-6">
                <div class="widget" style="display: flex;flex-direction: column;">
                    <h3 class="widget-title">Contacts</h3>
                    <div class="media small-teaser">
                        <div class="media-left"> <i class="rt-icon2-map2 highlight fontsize_24"></i> </div>
                        <div class="media-body"> No.65, 2nd Main Road,MS Ramaiah Layout, Nagasandra
                            Post, 8th Mile, Bangalore - 560073 </div>
                    </div>
                    <div class="media small-teaser">
                        <div class="media-left"> <i class="rt-icon2-printer2 highlight fontsize_24"></i>
                        </div>
                        <div class="media-body"> 9845821109</div>
                    </div>
                    <div class="media small-teaser">
                        <div class="media-left"> <i class="rt-icon2-mail2 highlight fontsize_24"></i> </div>
                        <div class="media-body"> <a href="mailto:raghubahusar@gmail.com">raghubahusar@gmail.com</a>
                        </div>
                    </div>
                    <!-- <div class="topmargin_20"> <a href="#" class="social-icon color-bg-icon socicon-facebook"></a><a
                            href="#" class="social-icon color-bg-icon socicon-twitter"></a><a href="#"
                            class="social-icon color-bg-icon socicon-google"></a>
                        <a href="#" class="social-icon color-bg-icon socicon-linkedin"></a>
                        <a href="#" class="social-icon color-bg-icon socicon-pinterest"></a>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</footer>
<section class="ds ms page_copyright parallax overlay_color section_padding_15 with_top_border_container">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 text-center">
                <p>&copy; Copyright 2024 All Rights Reserved</p>
            </div>
        </div>
    </div>
</section>
<section class="ftco-section">
    <div class="login-wrap" id="popupForm">
        <!-- Static Header -->
        <div class="popup-header"
            style="position: sticky; top: 0; z-index: 1000;background: #150282;padding: 5px;color: #fff;">
            <span class="popup-close-button" onclick="closeForm()"
                style="float: right; font-size: 24px; cursor: pointer;">&times;</span>
            <div class="img"
                style="background-image: url(img/uniform-logo1.png); height: 60px; background-size: contain; background-repeat: no-repeat;">
            </div>
            <h3 class="text-center mb-4" style="margin: 10px 0;font-size: 14px;font-weight:600 !important;">Have
                Questions? We're Here to Help!
            </h3>
        </div>

        <!-- Scrollable Form -->
        <div class="popup-content" style="overflow-y: auto; max-height: calc(100vh - 150px); padding: 15px;">
            <form action="FormMail.php" class="signup-form" method="post" id="contactForm"
                onsubmit="return validateForm()">
                <div class="form-group">
                    <input type="text" class="form-controls" placeholder="Full Name" id="full_name" name="full_name"
                        maxlength="60">
                    <div id="nameError" class="error">Enter your name</div>
                </div>
                <div class="form-group">
                    <input type="email" class="form-controls" placeholder="Email ID" id="form_email" name="form_email">
                    <div id="form_emailError" class="error">Enter a valid email address</div>
                </div>
                <div class="form-group">
                    <input type="tel" class="form-controls" placeholder="Contact Number" id="form_phone"
                        name="form_phone">
                    <div id="form_phoneError" class="error">Enter a valid contact number</div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-controls" placeholder="Institution/Company Name"
                        id="institution_name" name="institution_name">
                    <div id="institutionError" class="error">Enter your institution or company name</div>
                </div>
                <div class="form-group">
                    <input type="text" class="form-controls" placeholder="Place" id="place" name="place">
                    <div id="placeError" class="error">Enter your place</div>
                </div>
                <div class="form-group">
                    <textarea id="requirement" name="requirement" class="form-controls" rows="3"
                        placeholder="Enter Your Requirement" style="padding: 10px;"></textarea>
                </div>
                <div class="form-group">
                    <button type="submit" class="form-controls btn btn-primary submit px-3">Submit</button>
                </div>
            </form>
        </div>

    </div>
</section>