
    function AZGridBaseCell(val) {
        this.text = val;
    }

    AZGridBaseCell.prototype.cellContent = function() {
        return "<div style='color:black'>" + this.text + "</div>"
    }

    function AZGridOptions() {
        this.highlightColor = '#F00';
        this.backgroundColor = '#FFF';
        this.odds = 0;
        this.dataGroupIndex = 0;
    }

    function generateData1(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + '' + j + 'XX';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData2(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + j + 'X';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData3(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData4(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + i + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData5(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + i + j + 'X';
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData6(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + 'X' + i + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData7(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = 'X' + 'X' + 'X' + i + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function generateData8(odds) {
        var data = new Array();
        for (var i = 0; i < 10; i++) {
            var tmp = new Array();
            for (var j = 0; j < 10; j ++) {
                var item = new Object;
                item.number = i + 'X' + 'X' + 'X' + j;
                item.odds = odds;
                tmp[j] = item;
            }
            data[i] = tmp;
        }

        return data;
    }

    function chooseAll(index) {
        alert(index);
    }

    function AZGridControl(container, options) {
        var contentNode = $("<div class='container'></div>")
        $(container).empty();
        $(contentNode).css("background-color", options.backgroundColor);

        
        var dataGroupBar = $("<div>类别</div>");
        for (var i = 0; i < 8; i++) {
            var dataGroupIndex = Number(i);
            var groupBar = $("<span class='data-group-item' click='changeDataGroup'><a>data" + (Number(i) + Number(1)) + "</a></span>");
            (function(index) {
                $(groupBar).click(function() {
                var newOptions = options;
                newOptions.dataGroupIndex = index;
                AZGridControl(container, newOptions);
                });
            })(dataGroupIndex);
            
            $(dataGroupBar).append(groupBar);
        }
        $(container).append(dataGroupBar);

        var height = 26;
        var headerItem = $("<div class='row'></div>");
        for (var i = 0; i < 10; i++) {
            (function(index) {
                var cell = $("<div class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 header-col'> \
                            <i class='header-icon icon icon-sort-down' style='vertical-align: middle;'></i> \
                            </div>");
                cell.click(function() {
                    chooseAll(Number(index));
                });
                $(headerItem).append(cell);
            })(i);
        }
        $(contentNode).append(headerItem);

        var titleRow = $("<div class='row'></div>");
        for (var i = 0; i < 10; i++) {
            $(titleRow).append($("<div class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 normalcell'>" +
                                "<div class='header-title'>" +
                                    "<span class='number'>号码</span>" +
                                    "<span class='odds'>赔率</span>" +
                                "</div>" +
                           "</div>"));
        }
        $(contentNode).append(titleRow);

        var data = null;
        switch (options.dataGroupIndex ) {
            case 0:
                data = generateData1(options.odds);
                break;
            case 1:
                data = generateData2(options.odds);
                break;
            case 2:
                data = generateData3(options.odds);
                break;
            case 3:
                data = generateData4(options.odds);
                break;
            case 4:
                data = generateData5(options.odds);
                break;
            case 5:
                data = generateData6(options.odds);
                break;
            case 6:
                data = generateData7(options.odds);
                break;
            case 7:
                data = generateData8(options.odds);
                break;
        }
        for (var i = 0; i < data.length; i++) {
            var rowData = data[i];
            var row = $("<div class='row'></div>");
            for (var j = 0; j < rowData.length; j++) {
                var cellData = rowData[j];
                var cell = $("<div class='col-xs-1-10 col-sm-1-10 col-md-1-10 col-lg-1-10 header-col'>" + 
                        "<div style='color:black'>" +
                        "<span class='number'>" + cellData.number + "</span>" +
                        "<span class='odds'>" + cellData.odds + "</span>" + 
                        "</div></div>");
                $(row).append(cell);
            }
            $(contentNode).append(row);
        }

        if (this.data != null) {
            height += 40 * 10;
        }
        $(contentNode).css("height", height + "px");

        $(container).append(contentNode);
    }

    AZGridControl.prototype.setHightlightColor = function(color) {
        this.color = color;
    };

    AZGridControl.prototype.generateData1 = function(odds) {
        var data = new Array;
        for (var i = 0; i < 10; i++) {
            var tmp = new Array;
            for (var j = 0; j < 10; j ++) {
                tmp[0].number = i + '' + j + 'XX';
                tmp[0].odds = odds;
            }
            data[i] = tmp;
        }

        return data;
    };
