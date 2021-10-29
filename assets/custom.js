/* === CUSTOM JS === */
          
// custom quantity buttons
$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>')
.insertAfter('.custom__quantity input');
$('.custom__quantity').each(function() {
  var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    var newVal = oldValue + 1;
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$(document).ready(function(){
  
  // Product Page -- Mobile Slider
  if ( $('.product-gallery--viewport-mobile').length > 0 ) {
    if ($(window).width() < 720) {
      var moblie_product_image_slider = tns({
        "container": ".product-gallery--viewport-mobile",
        "items": 1,
        "speed": 400,
        "loop": false,
        "mouseDrag": true,
        "autoplayHoverPause": true,
        slideBy: 'page',
        navContainer: '.product-gallery--navigation--init',
        "controlsText": [`<svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path></svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path></svg>`]
      });
    }
  };
  
  // Product Page -- Thumbnails
  if ( $('.product-gallery--navigation--init').length > 0 ) {
    var thumbnails_slider = tns({
      "container": ".product-gallery--navigation--init",
      "items": 5.5,
      "speed": 400,
      "nav": false,
      "controls": false,
      "loop": false,
      "mouseDrag": true,
      "responsive": {
        "250": {
          "items": 4.5,
          "gutter": 0
        },
        "1023": {
          "items": 5.5,
          "gutter": 10
        },
        "1300": {
          "items": 6.5,
          "gutter": 10
        }
      }
    });
  };
  
  // Product Page -- Reviews
  if ( $('.review__carousel').length > 0 ) {
    var review_slider = tns({
      "container": ".review__carousel",
      "items": 1,
      "speed": 400,
      "nav": false,
      "autoplay": true,
      "autoplayHoverPause": true,
      "autoplayTimeout": 5000,
      "autoplayText": [
        "",
        ""
      ],
      "mouseDrag": true,
      controlsText: [`
      <svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path>
      </svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path>
      </svg>
      `]
    });
  }
  
  // Product Page -- Reviews - mobile
  if ( $('.review__carousel--mobile').length > 0 ) {
    if ($(window).width() < 720) {
      var review_slider = tns({
        "container": ".review__carousel--mobile",
        "items": 1,
        "speed": 400,
        "nav": false,
        "autoplay": true,
        "autoplayHoverPause": true,
        "autoplayTimeout": 5000,
        "autoplayText": [
          "",
          ""
        ],
        "mouseDrag": true,
        controlsText: [`
        <svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path>
        </svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path>
        </svg>
        `]
      });
    }
  }
  
  // Product Page -- Ambassadors
  if ( $('.ambassador__slider').length > 0 ) {
    var ambassador_slider = tns({
      "container": ".ambassador__slider",
      "items": 3,
      "speed": 400,
      "nav": false,
      "mouseDrag": true,
      controlsText: [`
    <svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path>
    </svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
    <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path>
    </svg>
    `]
    });
  }
  
  // Product Page -- Recommended Products - mobile

  if ( $('.mobile__product-recommended').length > 0 ) {
    if ($(window).width() < 1025) {
      var mobile__recommended_slider = tns({
        "container": ".mobile__product-recommended",
        "speed": 400,
        "nav": true,
        "loop": false,
        "mouseDrag": true,
        controlsText: [`
      <svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path>
      </svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path>
      </svg>
      `],
        "responsive": {
          "250": {
            "items": 1
          },
          "720": {
            "items": 2
          }
        }
      });
    }
  }
  
  // Product Page -- Social Proof
  if ( $('.social-proof__slider-init').length > 0 ) {
    var socialProof_slider = tns({
      "container": ".social-proof__slider-init",
      "items": 6.5,
      "speed": 400,
      "nav": true,
      "mouseDrag": true,
      "center": true,
      "responsive": {
        "250": {
          "items": 2,
          "controls": true,
          "center": false,
          controlsText: [`
      <svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path>
      </svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40">
      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path>
      </svg>
      `]
        },
        "720": {
          "items": 4,
          "controls": false
        },
        "1023": {
          "items": 5,
          "controls": false
        },
        "1300": {
          "items": 6,
          "controls": false
        },
        "1500": {
          "items": 7,
          "controls": false
        }
      }
    });
  };
  
  // Anouncement Slider
  if ( $('.pxs-announcement-slider-init').length > 0 ) {
    var anouncement_slider = tns({
      "container": ".pxs-announcement-slider-init",
      "items": 1,
      "speed": 400,
      "nav": false,
      "autoplay": true,
      "autoplayHoverPause": true,
      "autoplayTimeout": 5000,
      "autoplayText": [
        "",
        ""
      ],
      "mouseDrag": false,
      "controlsText": [`<svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path></svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path></svg>`]
    });
  }
  
  // Homepage -- Featured Collection - mobile
  if ( $('.custom__featured-collection__init').length > 0 ) {
    var featured_collection_slider = tns({
      "container": ".custom__featured-collection__init",
      "speed": 400,
      "nav": true,
      "gutter": 10,
      "loop": false,
      "mouseDrag": true,
      "controlsText": [`<img class="left_button_custom_carousel" src="https://cdn.shopify.com/s/files/1/0068/7420/2167/files/btn_left.png?v=1617271470">`,`<img class="right_button_custom_carousel" src="https://cdn.shopify.com/s/files/1/0068/7420/2167/files/btn_right.png?v=1617271470">`],
      "responsive": {
        "250": {
          "items": 1
        },
        "720": {
          "items": 2
        },
        "1025": {
          "items": 3
        },
        "1200": {
          "items": 4
        }
      }
    });
  }

  // Homepage -- Custom Reviews 
  if ( $('.custom_homepage_reviews-init').length > 0 ) {
    var custom_homepage_reviews = tns({
      "container": ".custom_homepage_reviews-init",
      "speed": 400,
      "nav": true,
      "gutter": 10,
      "mouseDrag": true,
      "controlsText": [`<svg class="svg-icon icon-arrow-thin-left " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.14595 20L22.573 2.57298L20 0L0 20L20 40L22.573 37.427L5.14595 20Z"></path></svg>`,`<svg class="svg-icon icon-arrow-thin-right " xmlns="http://www.w3.org/2000/svg" width="23" height="40" viewBox="0 0 23 40"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.427 20L0 2.57298L2.57298 0L22.573 20L2.57298 40L0 37.427L17.427 20Z"></path></svg>`],
      "responsive": {
        "250": {
          "items": 2
        },
        "720": {
          "items": 3.5
        },
        "1025": {
          "items": 5.5
        },
        "1200": {
          "items": 6
        },
        "1300": {
          "items": 7
        },
        "1400": {
          "items": 8
        }
      }
    });
  }
  
  // Homepage -- Logo Section - mobile
  if ( $('.logo-list-mobile__init').length > 0 ) {
    if ($(window).width() < 720) {
      var custom_logo_list_mobile = tns({
        "container": ".logo-list-mobile__init",
        "speed": 400,
        "nav": true,
        "gutter": 0,
        "items": 1,
        "mouseDrag": true,
        "center": true
      });
    }
  }
  
  // Recommended Products (ATC) Section
  
  $(".recommended_selector--Color").change(function(){
    var recommended_color = $(this).val();
    var recommended_size = $(this).parents(".recommended__form").find(".recommended_selector--Size option:selected").text();
    var master_options = $(this).parents(".recommended__form").find("#recommended_master-select option");

    $(master_options).each(function(){
      var _option = $(this);
      if(_option.text().indexOf(recommended_color) > -1 && _option.text().indexOf(recommended_size) > -1){
        if(!_option.is(":disabled")){
          $(this).parent().find("option").filter(function() {
            return ($(this).text() == _option.text());
          }).prop('selected', true);
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__variant-id")
          .val(_option.val());
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__atc")
          .text("+ ADD")
          .prop("disabled",false);
        } else {
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__atc")
          .text("SOLD OUT")
          .prop("disabled",true);
        }
      }
    });

  });

  $(".recommended_selector--Size").change(function(){
    var recommended_size = $(this).val();
    var recommended_color = $(this).parents(".recommended__form").find(".recommended_selector--Color option:selected").text();
    var master_options = $(this).parents(".recommended__form").find("#recommended_master-select option");

    $(master_options).each(function(){
      var _option = $(this);
      if(_option.text().indexOf(recommended_color) > -1 && _option.text().indexOf(recommended_size) > -1){
        if(!_option.is(":disabled")){
          $(this).parent().find("option").filter(function() {
            return ($(this).text() == _option.text());
          }).prop('selected', true);
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__variant-id")
          .val(_option.val());
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__atc")
          .text("+ ADD")
          .prop("disabled",false);
        } else {
          $(this)
          .parents(".recommended-product-card-interactions")
          .find(".recommended__atc")
          .text("SOLD OUT")
          .prop("disabled",true);
        }
      }
    });

  });

});

  
/* === SOURCE: https://codepen.io/jshakes/pen/KKpjdYv === */

// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );

// The animation function, which takes an Element
const animateCountUp = el => {
  let frame = 0;
  const countTo = parseInt( el.innerHTML, 10 );
  // Start the animation running 60 times per second
  const counter = setInterval( () => {
                              frame++;
                              // Calculate our progress as a value between 0 and 1
                              // Pass that value to our easing function to get our
                              // progress on a curve
                              const progress = easeOutQuad( frame / totalFrames );
  // Use the progress value to calculate the current count
  const currentCount = Math.round( countTo * progress );

  // If the current count has changed, update the element
  if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
    el.innerHTML = currentCount;
  }

  // If we’ve reached our last frame, stop the animation
  if ( frame === totalFrames ) {
    clearInterval( counter );
  }
}, frameDuration );
};

// Run the animation on all elements with a class of ‘count_animate’
const runAnimations = () => {
  const countupEls = document.querySelectorAll( '.count_animate' );
  countupEls.forEach( animateCountUp );
};

runAnimations();

// AJAX CART LOADING ANIMATION/INDICATOR

// GIF SOURCE: https://tenor.com/search/loading-gifs

$(".mini-cart-wrap").click(function(){
  $("body").append(`<div class="ajax-cart-loading"><img src="https://cdn.shopify.com/s/files/1/0068/7420/2167/files/loading.gif?v=1619445173"</div>`);
  setTimeout(function () {
    $(".ajax-cart-loading").remove();
  }, 1000);
});

// Klavyo newletter form -- Index/Homepage
$(document).ready(function(){
  if(store_template === 'index'){
    KlaviyoSubscribe.attachToForms('#email_signup', {
      hide_form_on_success: false,
      success_message: "Thank you for signing up!"
    });
  }
});

// Shipping progress bar
$( "button.product-submit" ).click(function() {
//   	var freeshipping_value = $( "#free_shipping_value" ).val();
//   	jQuery.getJSON('/cart.js', function(cart) {
//         calculateProgress(cart.total_price, freeshipping_value);
//     });
  setTimeout(function(){
  	jQuery(".mini-cart-wrap").click();
  }, 2000);
  	
});	

$( ".mini-cart-wrap" ).click(function() {
  	var freeshipping_value = $( "#free_shipping_value" ).val();
    jQuery.getJSON('/cart.js', function(cart) {
        calculateProgress(cart.total_price, freeshipping_value);
    });
    
    const open = window.XMLHttpRequest.prototype.open; 
    function openReplacement() {
        this.addEventListener("load", function () {
        if ([
            "/cart/add.js", 
            "/cart/update.js", 
            "/cart/change.js",
            "/cart/clear.js", 
        ].includes(this._url)) {
            calculateShipping(this.response);
        }
        });
            
        return open.apply(this, arguments);
    }
        
    window.XMLHttpRequest.prototype.open = openReplacement; 
        
});	
        
function calculateProgress(currentVal, targetVal) {
    setTimeout(function(){
        var progressBar = document.querySelectorAll('.cart-shippingThreshold__progress');
        var progressNum = document.querySelectorAll('.cart-shipping__num');
        var progressOuter = document.querySelectorAll('.cart-shipping__numOuter');
        var successMsg = document.querySelectorAll('.cart-shipping__success');
        // calculate how far progress is from the total as a percentage
        var result = Math.round(100 * currentVal / targetVal);

        progressBar.forEach(function(el){
            el.setAttribute('style', "width: ".concat(result, "%"));
        })
        // Update the progess text. If threshold is met, show success message
        var newProgressNum = (targetVal - currentVal) / 100;

        if(newProgressNum <= 0){
        successMsg.forEach(function(el){
            el.setAttribute('style', 'display: block;');
        });
        progressOuter.forEach(function(el){
            el.setAttribute('style', 'display: none;');
        });
        progressNum.forEach(function(el){
            el.textContent = newProgressNum;
        });
        } else {
        successMsg.forEach(function(el){
            el.setAttribute('style', 'display: none;');
        });
        progressOuter.forEach(function(el){
            el.setAttribute('style', 'display: block;');
        });
        progressNum.forEach(function(el){
            el.textContent = newProgressNum;
        });
        }
    }, 1000);
};
          
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.sticky-add-to-cart-bottom').fadeIn();
  } else {
    $('.sticky-add-to-cart-bottom').fadeOut();
  }
});
          
// Product page Discount
$('.option-value-input').on('click', function (e) {
    setTimeout(function(){
		var compare_price = $(".original.money").attr("doubly-currency-usd");
    	var price = $(".money.money--last").attr("doubly-currency-usd");
        var discount = price*100;
        var discount_1 = discount/compare_price;
        var final_discount = 100-discount_1;
          $('.data-compare-price').text(Math.round(final_discount));
    }, 150);
});

// Size Chart
// $( ".option-value-size-cst .option-value" ).each(function( index ) {
//   	var varient_class = $(this).find('.option-value-input').val();
//   	$('.cst-dynamic-chart.'+varient_class).not(':first').remove();
// });

$(document).ready(function(){      
	var varient_value = $("input[name='Size']:checked").val();
    $('.cst-dynamic-chart.'+varient_value).css("display", "flex");
});

$(".option-value-size-cst .option-value").on('click', function (e) {
	$('.cst-dynamic-chart').css("display", "none");
	var varient_value = $("input[name='Size']:checked").val();
	$('.cst-dynamic-chart.'+varient_value).css("display", "flex");
});
          
// Size Chart Popup
$(document).ready(function () {
    $(".size-guide-cst").click(function () {
        $(".size-chart-container").fadeIn();
    });
    $(".size-chart-close").click(function () {
        $(".size-chart-container").fadeOut();
    });
    $(".size-chart-close-overlay").click(function () {
        $(".size-chart-container").fadeOut();
    });
});
          
$(document).ready(function(){
	$.get('//www.cloudflare.com/cdn-cgi/trace', function(data) {
      var country_code = data.replace(/(\r\n|\n|\r)/gm,"").split('loc=');
      country_code = country_code[1].split('tls=');
      country_code = country_code[0];
            
            if(country_code == 'US'){
            
          	$( ".dynamic-chart-value.weight" ).each(function() {
              var pounds = 0;
              var weight =$( this ).text();
              var weightArr = weight.split(' ');
              pounds = (parseInt(weightArr[0])/0.45359237);
              var final_pounds = parseFloat(pounds.toFixed(1));
              
              $(this).text(final_pounds + ' lbs');
            });
            $( ".dynamic-chart-value.diameter" ).each(function() {
              var inches = 0;
              var diameter = $(this).text();
              var diameterArr = diameter.split(' ');
              inches = (parseInt(diameterArr[0])/2.54);
              var final_inches = parseFloat(inches.toFixed(1));

              $(this).text(final_inches + ' in');
            });
        }
	});
});
          
          
 
          
          