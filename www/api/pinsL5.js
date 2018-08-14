$(document).ready(function() {
    var items = [];

    $.getJSON('api/pinsL5.json', function(json) {
        $.each(json.pins, function(index, orders) {
            $.each(this, function() {
                $.each(this, function() {
                    //items.push('<div class="row">' + this.name + "\t" + this.strength + "\t" + this.dose + "\t" + this.route + "\t" + this.sig + "\t" + this.pillCount + "\t" + this.refills + '</div>' + "\n");
                    items.push(
                        '<a class="pin pin--' + this.level_loc + '" data-category="' + this.datacategory + '" data-space="' + this.level_loc + '" href="#" aria-label="' + this.storelabel + '" style="top:' + this.top + 'vmin;left:' + this.left + 'vmin">' +
                        '<span class="pin__icon">' +
                        '<svg class="icon icon--pin"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-pin"></use></svg>' +
                        '<svg class="icon icon--logo icon--' + this.logo_icon + '"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-' + this.logo_icon + '"></use></svg>' +
                        '</span>' +
                        '</a>' + "\n");
                });
            });
        });

        $('<div>', {
            "class": 'levelsPins',
            html: items.join('')
        }).appendTo("#Level_5__Pins");

    });
});
``