## Introducion ##
This is a simple jQuery and CSS timeline which can be used to represent information on the timeline. This jQuery and CSS timeline is only provides the basic functionality. The files may be needed to be futher modified and styled accordance with your usage. 

## Usage ##
Just list down all the dates as an ordered list `<ol>`. Add `data-date` tag to the list item `<li>` objects. Add an icon using an icon font (used FontAwesome) in the `<i>` tag. Add a name can be given in the `<span>` tag (optional). A detailed description can be given in the `<span class="details"></span>` tag. The current class needed to be given to the latest event. A start date and estimated end date must be given. The first `<li>` child must have the start date. And the last `li` child must have the end date.

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
