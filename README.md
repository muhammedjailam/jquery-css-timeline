## Introducion ##
This is a simple jQuery and CSS timeline which can be used to represent information as a timeline. This jQuery and CSS timeline provides the basic functionality. It is meant to be futher modified and styled based on how and where you may use it. 

View Demo here https://codepen.io/muhammedjailam/pen/ZXGBZv



## How to install ##
Link the CSS file in the header section of your web page. 

     <link rel="stylesheet" type="text/css" href="pathToFile/timeline.css">
     
 Include the jQuery script file just before the `</body>` end body tag. Then include the javascript file for the timeline below it, before the end body tag. 
 
     <!-- JQuery through CDN -->
     <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
     
     <!-- Timeline.js -->
     <script type="text/javascript" src="pathToFile/timeline.js"></script>
 
 
## HTML Setup ##
Just list down all the dates as an ordered list `<ol>`. Add `data-date` data tag to the list item `<li>` objects. Add an icon using an icon font (used FontAwesome) in the `<i>` tag. A name can be given for each mark on the time-line by putting in in the `<span>` tag. A detailed description can be given in the `<span class="details"></span>` tag. The description will appear when the ursor hover to the mark on the timeline. The current class needs to be given to the latest event. A start date and estimated end date must be given. The first `<li>` child must have the start date. And the last `li` child must have the end date.

Example HTML for the Timeline:

    <div class="timeline-container">
        <div class="timeline">
            <div class="line"></div>
            <div id="progress-line" class="line"></div>
            <ol>
                <li data-date="01/02/2017">
                    <i class="fa fa-archive"></i>
                    <span>Order Created</span>
                    <span class="details">01/02/2017</span>
                </li>
                <li data-date="01/18/2017" class="current">
                    <i class="fa fa-ship"></i>
                    <span>Item Shipped</span>
                    <span class="details">01/18/2017</span>
                </li>
                <li data-date="01/30/2017">
                    <i class="fa fa-building"></i>
                    <span>Item Arrived</span>
                    <span class="details">01/30/2017</span>
                </li>
            </ol>
        </div>
    </div>

The code is to be modified and styled as required. 
