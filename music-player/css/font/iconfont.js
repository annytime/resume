;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-heart" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1023.136 360.736c0-170.464-133.696-309.088-297.952-309.088-80.992 0-157.888 41.312-213.28 100.896-55.424-59.616-132.288-100.896-213.312-100.896-164.192 0-297.728 138.656-297.728 309.088 0 5.6 0.416 10.752 0.864 14.944-0.096 1.408-0.096 2.784-0.096 4.16 0 30.144 7.296 63.296 21.76 98.528 0.384 1.312 0.768 2.592 1.376 3.808 90.72 217.696 440.128 468.128 454.976 479.648 9.184 7.072 20.192 10.56 31.264 10.56 11.136 0 22.272-3.552 31.552-10.944 12.608-9.888 310.656-224.32 429.056-427.328 4.448-7.008 7.744-13.44 10.752-19.328 0.992-1.792 1.76-3.552 2.752-5.376l0.384-0.8c0.384-0.672 0.8-1.376 1.184-2.048 7.2-13.856 12.736-26.56 17.248-39.136 12.32-32.128 18.368-60.8 18.368-87.584 0-2.08-0.064-3.904-0.192-5.472C1022.496 371.008 1023.136 366.336 1023.136 360.736z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-transpond" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M704 437.76l0 181.758 320-266.288L704 97.282l0 160.254c-412.776 0.05-432.64 408.062-432.64 408.062 116.836-191.894 188.724-227.838 412.778-227.838L704 437.76z"  ></path>' +
    '' +
    '<path d="M768.002 728.82l0 39.178L768 767.998 128 767.998 128 320.002l107.264 0c0 0 35.278-71.474 111.104-128L32 192.002c-17.672 0-32 14.328-32 32l0 639.996L0 864c0 17.674 14.328 32 32 32l832 0c17.672 0 32-14.328 32-32L896 622.308 768.002 728.82z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-star" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 397.056l-353.792-51.392-158.208-320.576-158.208 320.576-353.792 51.392 256 249.536-60.416 352.32 316.416-166.336 316.416 166.336-60.416-352.32 256-249.536z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cycle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M706.682 221.906h-264.278v-71.189c0-30.411-20.93-41.661-46.519-25.042l-146.778 95.414c-25.584 16.623-25.584 43.846 0 60.478l146.778 95.409c25.589 16.623 46.519 5.37 46.519-25.037v-63.838h262.974c117.884 0 213.452 95.572 213.452 213.452v27.598c0 33.562-7.857 65.239-21.672 93.473l-13.138 21.125c-9.699 15.603-4.91 36.113 10.684 45.824 15.578 9.675 36.044 4.924 45.757-10.614l0.042 0.042c26.448-42.31 41.804-92.258 41.804-145.831v-35.641c-0.001-152.217-123.409-275.624-275.625-275.624z"  ></path>' +
    '' +
    '<path d="M787.078 742.431l-146.768-95.414c-25.599-16.622-46.534-5.369-46.534 25.042v70.539h-276.51c-117.88 0-213.447-95.561-213.447-213.446v-27.598c0-31.441 6.863-61.253 19.097-88.105l24.865-39.984c9.699-15.603 4.91-36.114-10.684-45.823-15.561-9.667-35.993-4.933-45.721 10.563l-0.112-0.112c-32.017 45.010-50.923 99.995-50.923 159.438v35.641c0 152.227 123.407 275.623 275.625 275.623h277.81v64.488c0 30.407 20.934 41.665 46.534 25.042l146.768-95.418c4.549-2.955 8.252-6.251 11.18-9.759 0.423-0.148 0.859-0.278 1.282-0.427-0.186-0.144-0.363-0.302-0.548-0.445 12.711-16.086 8.752-36.422-11.914-49.843z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-page" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M809.021787 916.341025l-590.652338 0c-48.40443 0-87.799672-39.395242-87.799672-87.799672l0-654.506644c0-48.40443 39.395242-87.799672 87.799672-87.799672l590.652338 0c48.40443 0 87.799672 39.395242 87.799672 87.799672l0 654.506644C896.821459 876.945783 857.426217 916.341025 809.021787 916.341025zM218.36945 134.125767c-22.01234 0-39.908942 17.896602-39.908942 39.908942l0 654.506644c0 22.01234 17.896602 39.908942 39.908942 39.908942l590.652338 0c22.01234 0 39.908942-17.896602 39.908942-39.908942l0-654.506644c0-22.01234-17.896602-39.908942-39.908942-39.908942L218.36945 134.125767z"  ></path>' +
    '' +
    '<path d="M322.132698 708.814528l383.125841 0 0 31.927153-383.125841 0 0-31.927153Z"  ></path>' +
    '' +
    '<path d="M322.132698 389.542994l383.125841 0 0 31.927153-383.125841 0 0-31.927153Z"  ></path>' +
    '' +
    '<path d="M322.132698 245.870804l383.125841 0 0 31.927153-383.125841 0 0-31.927153Z"  ></path>' +
    '' +
    '<path d="M322.132698 549.178761l383.125841 0 0 31.927153-383.125841 0 0-31.927153Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-stop" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M159.04 64l269.632 0 0 896-269.632 0 0-896Z"  ></path>' +
    '' +
    '<path d="M595.328 64l269.632 0 0 896-269.632 0 0-896Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-stepforward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M840.03843 13.594803c-8.420714-8.430037-18.407639-12.641559-29.942129-12.641559l-85.174367 0c-11.525167 0-21.519084 4.211522-29.942129 12.641559-8.423045 8.439359-12.650882 18.416961-12.650882 29.949121l0 451.157284c-2.209476-4.873433-5.104169-9.091947-8.663104-12.641559L201.238833 9.614017c-8.430037-8.430037-15.52926-11.317738-21.293009-8.653781-5.76608 2.663957-8.64912 9.76318-8.64912 21.29534l0 979.492404c0 11.532159 2.88304 18.631383 8.64912 21.29767 5.763749 2.656965 12.862973-0.233067 21.293009-8.679418L673.677473 541.927592c3.563596-3.987778 6.444305-8.206292 8.670096-12.641559L682.347569 980.420011c0 11.532159 4.218514 21.533068 12.634567 29.942129 8.437029 8.437029 18.421623 12.650882 29.942129 12.650882l85.190682 0c11.532159 0 21.526076-4.213853 29.942129-12.650882 8.423045-8.40673 12.650882-18.407639 12.650882-29.942129L852.707957 43.543924C852.686981 32.000111 848.452152 22.02484 840.03843 13.594803z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-forward" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M575.1 106.1l436.2 375.4c16.9 15.7 16.9 43.3 0 59L575.1 917.9c-24.4 22.8-63.1 4.7-63.1-29.5l0-377.3L512 135.6C512 101.5 550.7 83.4 575.1 106.1z"  ></path>' +
    '' +
    '<path d="M63.1 106.1l436.2 375.4c8.4 7.9 12.6 18.7 12.6 29.5 0 10.8-4.2 21.6-12.6 29.5L63.1 917.9C38.7 940.6 0 922.5 0 888.4l0-752.7C0 101.5 38.7 83.4 63.1 106.1z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bd_laba" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M555.838438 812.776298c0 81.118506-62.217017 39.238676-62.217017 39.238676l-269.416056-226.668463-41.609677 0c-25.7822 0-46.663786-21.266349-46.663786-47.502897L135.931902 387.871935c0-26.241664 20.881586-47.497781 46.663786-47.497781l49.768497 0L493.621421 118.740358c0 0 62.222133-42.219567 62.222133 39.574321l0 654.466736-0.005117 0L555.838438 812.776298zM695.798073 609.505731c77.769224-63.321164 72.580039-183.383634 0-237.471506-28.500101-17.143449-46.648436 39.58353-46.648436 39.58353s72.569806 91.032296 0 158.313655C634.886795 588.403111 662.107763 626.662483 695.798073 609.505731L695.798073 609.505731 695.798073 609.505731zM734.682685 237.473553c-10.369162-9.242502-60.906162 25.066909-31.100322 55.401798 154.217361 130.61685 156.803255 253.309216 0 387.875005-23.336498 22.425755 7.762801 64.654532 31.100322 55.401798C948.506609 637.20049 939.453419 329.819774 734.682685 237.473553L734.682685 237.473553 734.682685 237.473553zM734.682685 237.473553"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-start" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M924.446122 521.211802 119.894136 985.688439l0-928.957367L924.446122 521.211802z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M895.714 895.698c-12.764 12.764-34.235 11.991-47.956-1.73l-227.034-227.033c0 1.897 0 3.727 0 5.608l-306.18-306.182h5.608l-192.824-192.824c-13.72-13.72-14.496-35.192-1.731-47.956s34.235-11.991 47.955 1.731l202.032 202.032c93.634-90.076 198.038-190.246 209.674-202.124 15.342-15.69 35.468 1.641 35.468 37.336 0 20.195 0 226.761 0 409.928l273.26 273.26c13.72 13.719 14.494 35.191 1.73 47.955zM208.977 366.361h13.117l398.631 398.631c0 53.951 0 90.827 0 96.466 0 32.4-18.211 56.51-36.206 37.553-9.274-9.758-145.184-139.827-247.642-238.473h-127.9c-25.332 0-45.866-20.536-45.866-45.866v-202.442c0-25.332 20.536-45.867 45.866-45.867z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-houtui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M499.086222 170.666667L28.444444 501.646222l470.641778 330.979556V170.666667zM995.555556 832.625778V170.666667L524.913778 501.646222l470.641778 330.979556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)