/**
 * Module to ajaxify all add to cart forms on the page.
 *
 * Copyright (c) 2015 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
Shopify.AjaxifyCart = (function($) {
  
  // Some configuration options.
  // I have separated what you will never need to change from what
  // you might change.
  
  var _config = {
    
    // What you might want to change
    addToCartBtnLabel:             '+ ADD TO CART',
    addedToCartBtnLabel:           'Thank you!',
    addingToCartBtnLabel:          'Adding...',
    soldOutBtnLabel:               'Sold Out',
    howLongTillBtnReturnsToNormal: 1000, // in milliseconds.
    cartCountSelector:             '.cart-count, #cart-count a:first, #gocart p a, #cart .checkout em, .item-count',
    cartTotalSelector:             '#cart-price',
    // 'aboveForm' for top of add to cart form, 
    // 'belowForm' for below the add to cart form, and 
    // 'nextButton' for next to add to cart button.
    feedbackPosition:              'nextButton',
    
    // What you will never need to change
    addToCartBtnSelector:          '[data-ajaxify]',
    addToCartFormSelector:         '[data-recommended-form]',
    shopifyAjaxAddURL:             '/cart/add.js',
    shopifyAjaxCartURL:            '/cart.js'
  };
  
  // We need some feedback when adding an item to the cart.
  // Here it is.  
  var _showFeedback = function(success, html, $addToCartForm) {
    $('.ajaxified-cart-feedback').remove();
    var feedback = '<p class="ajaxified-cart-feedback ' + success + '">' + html + '</p>';
    switch (_config.feedbackPosition) {
      case 'aboveForm':
        $addToCartForm.before(feedback);
        break;
      case 'belowForm':
        $addToCartForm.after(feedback);
        break;
      case 'nextButton':
      default:
        $addToCartForm.find(_config.addToCartBtnSelector).after(feedback);
        break;   
    }
    // If you use animate.css
    // $('.ajaxified-cart-feedback').addClass('animated bounceInDown');
    $('.ajaxified-cart-feedback').slideDown();
  };
  var _setText = function($button, label) {
    if ($button.children().length) {
      $button.children().each(function() {
        if ($.trim($(this).text()) !== '') {
          $(this).text(label);
        }
      });
    }
    else {
      $button.val(label).text(label);
    }
  };
  var _init = function() {   
    $(document).ready(function() { 
      $(_config.addToCartFormSelector).submit(function(e) {
        e.preventDefault();
        var $addToCartForm = $(this);
        var $addToCartBtn = $addToCartForm.find(_config.addToCartBtnSelector);
        _setText($addToCartBtn, _config.addingToCartBtnLabel);
        $addToCartBtn.addClass('disabled').prop('disabled', true);
        // Add to cart.
        $.ajax({
          url: _config.shopifyAjaxAddURL,
          dataType: 'json',
          type: 'post',
          data: $addToCartForm.serialize(),
          success: function(itemData) {
            
            // Trigger cart drawer on success
//             $('[data-cart-mini-toggle]').click();
            
            // Re-enable add to cart button.
            $addToCartBtn.addClass('inverted');
            _setText($addToCartBtn, _config.addedToCartBtnLabel);
            //_showFeedback('success','Added to cart!',$addToCartForm);
            window.setTimeout(function(){
              $addToCartBtn.prop('disabled', false).removeClass('disabled').removeClass('inverted');
              _setText($addToCartBtn,_config.addToCartBtnLabel);
            }, _config.howLongTillBtnReturnsToNormal);
            // Update cart count and show cart link.
            $.getJSON(_config.shopifyAjaxCartURL, function(cart) {
              if (_config.cartCountSelector && $(_config.cartCountSelector).length) {
                var value = $(_config.cartCountSelector).html() || '0';
                $(_config.cartCountSelector).html(value.replace(/[0-9]+/,cart.item_count)).removeClass('hidden-count');
              }
              if (_config.cartTotalSelector && $(_config.cartTotalSelector).length) {
                if (typeof Currency !== 'undefined' && typeof Currency.moneyFormats !== 'undefined') {
                  var newCurrency = '';
                  if ($('[name="currencies"]').length) {
                    newCurrency = $('[name="currencies"]').val();
                  }
                  else if ($('#currencies span.selected').length) {
                    newCurrency = $('#currencies span.selected').attr('data-currency');
                  }
                  if (newCurrency) {
                    $(_config.cartTotalSelector).html('<span class=money>' + Shopify.formatMoney(Currency.convert(cart.total_price, "", newCurrency), Currency.money_format[newCurrency]) + '</span>');
                  } 
                  else {
                    $(_config.cartTotalSelector).html(Shopify.formatMoney(cart.total_price, ""));
                  }
                }
                else {
                  $(_config.cartTotalSelector).html(Shopify.formatMoney(cart.total_price, ""));
                }
              };
            });        
          }, 
          error: function(XMLHttpRequest) {
            var response = eval('(' + XMLHttpRequest.responseText + ')');
            response = response.description;
            if (response.slice(0,4) === 'All ') {
              _showFeedback('error', response.replace('All 1 ', 'All '), $addToCartForm);
              $addToCartBtn.prop('disabled', false);
              _setText($addToCartBtn, _config.soldOutBtnLabel);
              $addToCartBtn.prop('disabled',true);
            }
            else {
              _showFeedback('error', '<i class="fa fa-warning"></i> ' + response, $addToCartForm);
              $addToCartBtn.prop('disabled', false).removeClass('disabled');
              _setText($addToCartBtn, _config.addToCartBtnLabel);
            }
          }
        });   
        return false;    
      });
    });
  };
  return {
    init: function(params) {
        // Configuration
        params = params || {};
        // Merging with defaults.
        $.extend(_config, params);
        // Action
        $(function() {
          _init();
        });
    },    
    getConfig: function() {
      return _config;
    }
  }  
})(jQuery);

Shopify.AjaxifyCart.init();
    
    Shopify.AjaxifyCart = (function($) {
  
  // Some configuration options.
  // I have separated what you will never need to change from what
  // you might change.
  
  var _config = {
    
    // What you might want to change
    addToCartBtnLabel:             '+ ADD TO CART',
    addedToCartBtnLabel:           'Thank you!',
    addingToCartBtnLabel:          'Adding...',
    soldOutBtnLabel:               'Sold Out',
    howLongTillBtnReturnsToNormal: 1000, // in milliseconds.
    cartCountSelector:             '.cart-count, #cart-count a:first, #gocart p a, #cart .checkout em, .item-count',
    cartTotalSelector:             '#cart-price',
    // 'aboveForm' for top of add to cart form, 
    // 'belowForm' for below the add to cart form, and 
    // 'nextButton' for next to add to cart button.
    feedbackPosition:              'nextButton',
    
    // What you will never need to change
    addToCartBtnSelector:          '.bttn',
    addToCartFormSelector:         '[data-recommended-form]',
    shopifyAjaxAddURL:             '/cart/add.js',
    shopifyAjaxCartURL:            '/cart.js'
  };
  
  // We need some feedback when adding an item to the cart.
  // Here it is.  
  var _showFeedback = function(success, html, $addToCartForm) {
    $('.ajaxified-cart-feedback').remove();
    var feedback = '<p class="ajaxified-cart-feedback ' + success + '">' + html + '</p>';
    switch (_config.feedbackPosition) {
      case 'aboveForm':
        $addToCartForm.before(feedback);
        break;
      case 'belowForm':
        $addToCartForm.after(feedback);
        break;
      case 'nextButton':
      default:
        $addToCartForm.find(_config.addToCartBtnSelector).after(feedback);
        break;   
    }
    // If you use animate.css
    // $('.ajaxified-cart-feedback').addClass('animated bounceInDown');
    $('.ajaxified-cart-feedback').slideDown();
  };
  var _setText = function($button, label) {
    if ($button.children().length) {
      $button.children().each(function() {
        if ($.trim($(this).text()) !== '') {
          $(this).text(label);
        }
      });
    }
    else {
      $button.val(label).text(label);
    }
  };
  var _init = function() {   
    $(document).ready(function() { 
      $(_config.addToCartFormSelector).submit(function(e) {
        e.preventDefault();
        var $addToCartForm = $(this);
        var $addToCartBtn = $addToCartForm.find(_config.addToCartBtnSelector);
        _setText($addToCartBtn, _config.addingToCartBtnLabel);
        $addToCartBtn.addClass('disabled').prop('disabled', true);
        // Add to cart.
        $.ajax({
          url: _config.shopifyAjaxAddURL,
          dataType: 'json',
          type: 'post',
          data: $addToCartForm.serialize(),
          success: function(itemData) {
            
            // Trigger cart drawer on success
//             $('[data-cart-mini-toggle]').click();
            
            // Re-enable add to cart button.
            $addToCartBtn.addClass('inverted');
            _setText($addToCartBtn, _config.addedToCartBtnLabel);
            //_showFeedback('success','Added to cart!',$addToCartForm);
            window.setTimeout(function(){
              $addToCartBtn.prop('disabled', false).removeClass('disabled').removeClass('inverted');
              _setText($addToCartBtn,_config.addToCartBtnLabel);
            }, _config.howLongTillBtnReturnsToNormal);
            // Update cart count and show cart link.
            $.getJSON(_config.shopifyAjaxCartURL, function(cart) {
              if (_config.cartCountSelector && $(_config.cartCountSelector).length) {
                var value = $(_config.cartCountSelector).html() || '0';
                $(_config.cartCountSelector).html(value.replace(/[0-9]+/,cart.item_count)).removeClass('hidden-count');
              }
              if (_config.cartTotalSelector && $(_config.cartTotalSelector).length) {
                if (typeof Currency !== 'undefined' && typeof Currency.moneyFormats !== 'undefined') {
                  var newCurrency = '';
                  if ($('[name="currencies"]').length) {
                    newCurrency = $('[name="currencies"]').val();
                  }
                  else if ($('#currencies span.selected').length) {
                    newCurrency = $('#currencies span.selected').attr('data-currency');
                  }
                  if (newCurrency) {
                    $(_config.cartTotalSelector).html('<span class=money>' + Shopify.formatMoney(Currency.convert(cart.total_price, "", newCurrency), Currency.money_format[newCurrency]) + '</span>');
                  } 
                  else {
                    $(_config.cartTotalSelector).html(Shopify.formatMoney(cart.total_price, ""));
                  }
                }
                else {
                  $(_config.cartTotalSelector).html(Shopify.formatMoney(cart.total_price, ""));
                }
              };
            });        
          }, 
          error: function(XMLHttpRequest) {
            var response = eval('(' + XMLHttpRequest.responseText + ')');
            response = response.description;
            if (response.slice(0,4) === 'All ') {
              _showFeedback('error', response.replace('All 1 ', 'All '), $addToCartForm);
              $addToCartBtn.prop('disabled', false);
              _setText($addToCartBtn, _config.soldOutBtnLabel);
              $addToCartBtn.prop('disabled',true);
            }
            else {
              _showFeedback('error', '<i class="fa fa-warning"></i> ' + response, $addToCartForm);
              $addToCartBtn.prop('disabled', false).removeClass('disabled');
              _setText($addToCartBtn, _config.addToCartBtnLabel);
            }
          }
        });   
        return false;    
      });
    });
  };
  return {
    init: function(params) {
        // Configuration
        params = params || {};
        // Merging with defaults.
        $.extend(_config, params);
        // Action
        $(function() {
          _init();
        });
    },    
    getConfig: function() {
      return _config;
    }
  }  
})(jQuery);

Shopify.AjaxifyCart.init();

    
    