<head>
    <title>Bahusar</title>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/main.css" class="color-switcher-link">
    <link rel="stylesheet" href="css/shop.css" class="color-switcher-link">
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <style>
        .logo img {
            max-width: 250px !important;
            height: 80px !important;
        }

        i.fab.fa-whatsapp {
            font-size: 20px !important;
        }

        .ls .darklinks a {
            font-weight: 800 !important;
        }

        .ds.ms {
            background-color: #150282 !important;
        }

        .core-value-item {
            margin-bottom: 20px;
        }

        .core-value-item h4 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .core-value-item .icon {
            color: #f57c00;
            /* Adjust color to fit design */
            margin-right: 10px;
        }

        .about-cover {
            width: 100%;
            height: auto;
        }

        .small-text.grey {
            color: #757575;
            font-style: italic;
        }

        .icon-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 15px;
            color: #fff;
            font-size: 14px;
        }

        .bg-orange {
            background-color: #FFA500;
        }

        /* Mission icon background */
        .bg-green {
            background-color: #32CD32;
        }

        /* Vision icon background */
        .bg-red {
            background-color: #FF6347;
        }

        /* Values icon background */
        .entry-title {
            font-size: 1.2em;
            margin: 10px 0;
            color: #333;
        }

        h3.entry-title-custom {
            font-size: 16px;
            margin-bottom: 0.45em;
        }

        .values-list {
            list-style-type: none;
            padding: 0;
        }

        .values-list li {
            margin-bottom: 5px;
        }

        #benefits {
            padding: 0px 0;
        }

        .benefit-item {
            margin: 20px 0;
        }

        .benefit-item img {
            max-width: 60px;
            margin-bottom: 15px;
        }

        .benefit-item h3 {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .benefit-item p {
            font-size: 16px;
            color: #666;
        }

        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="password"],
        input[type="search"],
        input[type="tel"],
        input[type="number"],
        input[type="date"],
        textarea,
        select,
        .form-control {
            box-shadow: 0px 4px 8px rgba(21, 2, 130, 0.2);
        }

        span.light_bg_color.small-text {
            color: #000;
        }

        .cs {
            background-color: #1b0687;
            color: #fff !important;
        }

        .ls h1,
        .ls h2,
        .ls h3,
        .ls h4,
        .ls h5,
        .ls h6 {
            color: #150282 !important;
        }

        #section-social .page_social {
            box-shadow: 0px 4px 8px rgba(21, 2, 130, 0.2) !important;
        }

        .gallery-content {
            color: black;
            font-size: 16px;
            font-weight: 400;
        }

        a.entry-title.small {
            text-transform: uppercase;
            letter-spacing: 5px;
        }

        .entry-title+.more-link {
            font-size: 12px;
        }

        .page_copyright.background_cover,
        .page_topline.background_cover {
            background-color: #150282 !important;
            background-image: none !important;
        }

        section.ds.ms.page_copyright.parallax.overlay_color.section_padding_15.with_top_border_container {
            line-height: 0.5rem;
            font-size: 14px;
        }

        body {
            font-family: 'Nunito Sans', sans-serif;
            font-size: 16px;
        }

        .overlay_color.ds.ms:after {
            background-color: #150282 !important;
            opacity: 0.9;
        }

        .ds .highlight,
        .ds .highlight1 {
            color: #fff !important;
        }

        @-webkit-keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-250px * 7));
                /* Adjust this based on the number of items */
            }
        }

        @keyframes scroll {
            0% {
                transform: translateX(0);
            }

            100% {
                transform: translateX(calc(-250px * 7));
                /* Adjust this based on the number of items */
            }
        }

        .slider {
            background: white;
            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
            padding: 10px !important;
            height: 120px;
            /* Adjusted to fit the images */
            overflow: hidden;
            margin: auto;
            position: relative;
            width: 100%;
        }

        .slider::before,
        .slider::after {
            background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
            content: "";
            padding: 10px !important;
            height: 120px;
            /* Adjusted to fit the images */
            position: absolute;
            width: 200px;
            z-index: 2;
        }

        .slider::after {
            right: 0;
            top: 0;
            transform: rotateZ(180deg);
        }

        .slider::before {
            left: 0;
            top: 0;
        }

        .slider .slide-track {
            -webkit-animation: scroll 40s linear infinite;
            animation: scroll 40s linear infinite;
            display: flex;
            width: calc(250px * 14);
            /* Adjust based on the number of slides */
        }

        .slider .slide {
            height: 120px;
            /* Adjusted to fit the images */
            width: 250px;
            /* Adjust based on the image size */
        }

        @media screen and (max-width: 720px) {
            .slider img {
                width: auto;
            }
        }

        .scroll-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            font-size: 18px;
            padding: 10px;
            cursor: pointer;
            z-index: 10;
        }

        .scroll-button.left {
            left: 10px;
        }

        .scroll-button.right {
            right: 10px;
        }

        .ds .theme_buttons a:hover,
        .ds .theme_buttons a:focus,
        .ds .theme_buttons a:active,
        .ds .theme_button:hover,
        .ds .theme_button:focus,
        .ds .theme_button:active {
            border-color: #fff !important;
        }

        .small-text {
            font-weight: 900 !important;
        }

        .custom-social-icons {
            position: fixed;
            top: 27%;
            right: 0;
            transform: translateY(-50%);
            display: flex;
            margin-right: 0px !important;
            z-index: 1005;
            flex-direction: column;
            gap: 10px;
            transition: transform 0.3s;
        }

        .custom-social-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background-color: #150282;
            color: #FFFFFF;
            font-size: 18px;
            border-radius: 50%;
            text-decoration: none;
            transition: background-color 0.3s, transform 0.3s, width 0.3s;
        }

        .custom-social-icon:hover {
            background-color: #1e0fb4;
            transform: scale(1.1);
            width: 60px;
            /* Expand the width on hover */
        }

        /* General Styling */
        /* General Styling */
        .login-wrap {
            width: 314px;
            position: fixed;
            bottom: 10px;
            /* Align to the bottom */
            right: 10px;
            /* Align to the right */
            background: #fff;
            max-height: 400px;
            /* Adjust height */
            overflow-y: auto;
            /* Enable scroll */
            padding: 0px;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-size: 14px;
            z-index: 2000;
            display: none;
            /* Hidden by default */
            scrollbar-width: none;
            /* Hide scrollbar for Firefox */
        }

        /* Hide scrollbar for WebKit browsers */
        .login-wrap::-webkit-scrollbar {
            display: none;
        }

        .form-controls {
            font-size: 12px;
        }

        .form-group button {
            font-size: 12px;
            padding: 5px 10px;
        }

        .error {
            color: red;
            font-size: 10px;
            display: none;
        }

        h3 {
            font-size: 16px;
        }

        textarea {
            font-size: 12px;
        }

        .img {
            height: 100px;
            width: 100px;
            margin: 0 auto 10px;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
        }

        .popup-close-button {
            color: #fff;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
            position: absolute;
            top: 10px;
            right: 15px;
        }

        .popup-close-button:hover {
            color: black;
        }

        @media (max-width: 768px) {

            .login-wrap {
                width: calc(100% - 40px);
                max-width: 400px;
                max-height: 88%;
                position: fixed;
                left: 50%;
                transform: translate(-50%, 0);
                border-radius: 15px;
                box-shadow: none;
                margin: 0;
                background: #fff;
                top: 20px;
                overflow-y: auto;
            }
        }


        .popup-close-button {
            top: 10px;
            right: 10px;
        }


        article,
        aside,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        main,
        nav,
        section {
            display: block;
        }

        *,
        *::before,
        *::after {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

        }

        .newform {
            font-family: "Lato", Arial, sans-serif;
        }

        .login-wrap:after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 160px;
            content: '';
            z-index: -1;
            border-radius: 5px 5px 30% 0;
        }

        .login-wrap .img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            margin: 0 auto;
            margin-bottom: 20px;
            border: 4px solid #fff;
            -webkit-box-shadow: 0px 10px 23px -16px rgba(0, 0, 0, 0.4);
            -moz-box-shadow: 0px 10px 23px -16px rgba(0, 0, 0, 0.4);
            box-shadow: 0px 10px 23px -16px rgba(0, 0, 0, 0.4);
        }

        textarea#requirement {
            font-size: 14px;
        }

        .form-group {
            position: relative;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-controls {
            height: 40px;
            color: #000;
            font-size: 16px;
            border-radius: 40px;
            -webkit-box-shadow: none;
            box-shadow: none;
            background: rgba(0, 0, 0, 0.03);
            border: none;
            padding-left: 20px;
            padding-right: 20px;
        }

        .form-controls {
            display: block;
            width: 100%;
            padding: 0.375rem 0.75rem;
            font-weight: 400;
            line-height: 1.5;
        }

        input,
        button,
        select,
        optgroup,
        textarea {
            margin: 0;
            font-family: inherit;
        }

        textarea.form-controls {
            height: inherit !important;

        }

        textarea {
            overflow: auto;
            resize: vertical;
        }

        .btn.btn-primary {
            background: #150282 !important;
            color: #fff !important;
        }

        button:not(:disabled),
        [type="button"]:not(:disabled),
        [type="reset"]:not(:disabled),
        [type="submit"]:not(:disabled) {
            cursor: pointer;
        }

        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="password"],
        input[type="search"],
        input[type="tel"],
        input[type="number"],
        input[type="date"],
        textarea,
        select,
        .form-control {
            height: 30px;
            padding: 20px 40px;
            font-size: 14px;
            border-radius: 5px;
        }

        #requirement {
            border-radius: 5px !important;
        }

        form .with_icon+i {
            position: absolute;
            top: 14px !important;
            left: 15px !important;
            font-size: 14px !important;
        }

        textarea#message {
            padding-top: 0px !important;
        }

        .theme_buttons a,
        .theme_button,
        .wc-proceed-to-checkout .checkout-button,
        .buttons a,
        button,
        input[type="submit"] {
            padding: 15px 45px !important;
            border-radius: 40px;
        }

        .ls .theme_buttons a,
        .ls .theme_button {
            color: #150282 !important;
            border: 2px solid #150282 !important;
        }
    </style>
</head>